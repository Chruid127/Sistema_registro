"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type AdminDashboardProps = {
  email: string;
  internalId: string;
};

type Collaborator = {
  id: number;
  nombre: string;
  cargo: string;
  turno: string;
  vehiculo: string;
  estado: string;
};

const initialCollaborators: Collaborator[] = [
  { id: 1, nombre: "Laura Castro", cargo: "Supervisora", turno: "Diurno", vehiculo: "OZS-214", estado: "Activo" },
  { id: 2, nombre: "Juan Perez", cargo: "Guarda de seguridad", turno: "Nocturno", vehiculo: "OZS-118", estado: "Activo" },
  { id: 3, nombre: "Mariana Gil", cargo: "Auxiliar operativa", turno: "Diurno", vehiculo: "Sin asignacion", estado: "Pendiente" },
];

const emptyForm = { nombre: "", cargo: "", turno: "", vehiculo: "", estado: "" };

export function AdminDashboard({ email, internalId }: AdminDashboardProps) {
  const [collaborators, setCollaborators] = useState<Collaborator[]>(initialCollaborators);
  const [activeView, setActiveView] = useState<"ver" | "registrar" | "editar">("ver");
  const [selectedId, setSelectedId] = useState<number>(initialCollaborators[0].id);
  const [formData, setFormData] = useState(emptyForm);

  const selectedCollaborator = useMemo(
    () => collaborators.find((item) => item.id === selectedId) ?? null,
    [collaborators, selectedId],
  );

  function updateField(field: keyof typeof emptyForm, value: string) {
    setFormData((current) => ({ ...current, [field]: value }));
  }

  function resetForm() {
    setFormData(emptyForm);
  }

  function loadCollaboratorForEdit(collaborator: Collaborator) {
    setSelectedId(collaborator.id);
    setFormData({
      nombre: collaborator.nombre,
      cargo: collaborator.cargo,
      turno: collaborator.turno,
      vehiculo: collaborator.vehiculo,
      estado: collaborator.estado,
    });
    setActiveView("editar");
  }

  function handleCreate() {
    if (!formData.nombre || !formData.cargo || !formData.turno) return;

    const newItem: Collaborator = {
      id: Date.now(),
      nombre: formData.nombre,
      cargo: formData.cargo,
      turno: formData.turno,
      vehiculo: formData.vehiculo || "Sin asignacion",
      estado: formData.estado || "Activo",
    };

    setCollaborators((current) => [newItem, ...current]);
    setSelectedId(newItem.id);
    resetForm();
    setActiveView("ver");
  }

  function handleSaveEdit() {
    if (!selectedCollaborator) return;

    setCollaborators((current) =>
      current.map((item) =>
        item.id === selectedCollaborator.id
          ? {
              ...item,
              nombre: formData.nombre || item.nombre,
              cargo: formData.cargo || item.cargo,
              turno: formData.turno || item.turno,
              vehiculo: formData.vehiculo || item.vehiculo,
              estado: formData.estado || item.estado,
            }
          : item,
      ),
    );
    setActiveView("ver");
  }

  function handleDelete(id: number) {
    const nextItems = collaborators.filter((item) => item.id !== id);
    setCollaborators(nextItems);
    if (selectedId === id && nextItems.length > 0) setSelectedId(nextItems[0].id);
    if (nextItems.length === 0) setSelectedId(0);
  }

  return (
    <main className="corporate-shell min-h-screen px-6 py-8 sm:px-8">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <header className="glass-panel rounded-[2rem] px-6 py-6 sm:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">Ozsford Security</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--foreground)]">Panel de administradores</h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                Aqui puedes consultar, registrar, editar y eliminar la informacion del personal.
              </p>
            </div>
            <div className="surface-soft grid gap-3 rounded-[1.5rem] p-4 sm:min-w-72">
              <p className="text-sm text-[var(--muted)]">Ingreso actual</p>
              <p className="text-base font-semibold text-[var(--foreground)]">{email}</p>
              <p className="text-sm text-[var(--muted)]">ID interno: {internalId}</p>
              <Link className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--brand)] px-5 text-sm font-semibold text-white hover:bg-[var(--brand-strong)]" href="/seleccion">
                Cambiar de panel
              </Link>
            </div>
          </div>
        </header>

        <section className="grid gap-4 sm:grid-cols-3">
          <button className={`surface-card rounded-[1.6rem] p-6 text-left hover:border-[var(--brand)] ${activeView === "ver" ? "ring-2 ring-[var(--brand)]" : ""}`} onClick={() => setActiveView("ver")} type="button">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">Accion 1</p>
            <p className="mt-3 text-2xl font-semibold text-[var(--foreground)]">Ver el personal</p>
          </button>
          <button className={`surface-card rounded-[1.6rem] p-6 text-left hover:border-[var(--brand)] ${activeView === "registrar" ? "ring-2 ring-[var(--brand)]" : ""}`} onClick={() => { resetForm(); setActiveView("registrar"); }} type="button">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">Accion 2</p>
            <p className="mt-3 text-2xl font-semibold text-[var(--foreground)]">Registrar personal</p>
          </button>
          <button className={`surface-card rounded-[1.6rem] p-6 text-left hover:border-[var(--brand)] ${activeView === "editar" ? "ring-2 ring-[var(--brand)]" : ""}`} onClick={() => { if (selectedCollaborator) loadCollaboratorForEdit(selectedCollaborator); }} type="button">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">Accion 3</p>
            <p className="mt-3 text-2xl font-semibold text-[var(--foreground)]">Editar personal</p>
          </button>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="glass-panel rounded-[2rem] p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">Colaboradores</p>
                <h2 className="mt-2 text-2xl font-semibold text-[var(--foreground)]">Listado del personal</h2>
              </div>
              <span className="status-neutral rounded-full px-3 py-1 text-xs font-semibold">{collaborators.length} registrados</span>
            </div>
            <div className="mt-6 grid gap-4">
              {collaborators.map((collaborator) => (
                <div key={collaborator.id} className={`surface-card rounded-3xl p-5 ${collaborator.id === selectedId ? "ring-2 ring-[var(--brand)]" : ""}`}>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-lg font-semibold text-[var(--foreground)]">{collaborator.nombre}</p>
                      <p className="mt-1 text-sm text-[var(--muted)]">{collaborator.cargo} | {collaborator.turno}</p>
                      <p className="mt-2 text-sm text-[var(--muted)]">Vehiculo: {collaborator.vehiculo}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <button className="rounded-full border border-[var(--line)] px-4 py-2 text-sm font-semibold text-[var(--foreground)] hover:border-[var(--brand)]" onClick={() => { setSelectedId(collaborator.id); setActiveView("ver"); }} type="button">Ver</button>
                      <button className="rounded-full border border-[var(--line)] px-4 py-2 text-sm font-semibold text-[var(--foreground)] hover:border-[var(--brand)]" onClick={() => loadCollaboratorForEdit(collaborator)} type="button">Editar</button>
                      <button className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700" onClick={() => handleDelete(collaborator.id)} type="button">Eliminar</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="glass-panel rounded-[2rem] p-6">
            {activeView === "ver" ? (
              <>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">Vista del colaborador</p>
                <h2 className="mt-2 text-2xl font-semibold text-[var(--foreground)]">Datos actuales</h2>
                {selectedCollaborator ? (
                  <div className="mt-6 grid gap-4">
                    <div className="surface-card rounded-3xl p-5"><p className="text-sm text-[var(--muted)]">Nombre</p><p className="mt-2 text-lg font-semibold text-[var(--foreground)]">{selectedCollaborator.nombre}</p></div>
                    <div className="surface-card rounded-3xl p-5"><p className="text-sm text-[var(--muted)]">Cargo</p><p className="mt-2 text-lg font-semibold text-[var(--foreground)]">{selectedCollaborator.cargo}</p></div>
                    <div className="surface-card rounded-3xl p-5"><p className="text-sm text-[var(--muted)]">Turno</p><p className="mt-2 text-lg font-semibold text-[var(--foreground)]">{selectedCollaborator.turno}</p></div>
                    <div className="surface-card rounded-3xl p-5"><p className="text-sm text-[var(--muted)]">Vehiculo</p><p className="mt-2 text-lg font-semibold text-[var(--foreground)]">{selectedCollaborator.vehiculo}</p></div>
                    <div className="surface-card rounded-3xl p-5"><p className="text-sm text-[var(--muted)]">Estado</p><p className="mt-2 text-lg font-semibold text-[var(--foreground)]">{selectedCollaborator.estado}</p></div>
                  </div>
                ) : <p className="mt-6 text-sm text-[var(--muted)]">No hay colaboradores seleccionados.</p>}
              </>
            ) : null}

            {activeView === "registrar" ? (
              <>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">Registrar personal</p>
                <h2 className="mt-2 text-2xl font-semibold text-[var(--foreground)]">Nuevo colaborador</h2>
                <div className="mt-6 grid gap-4">
                  <input className="min-h-12 rounded-2xl border border-[var(--line)] px-4 text-sm outline-none focus:border-[var(--brand)] focus:ring-4 focus:ring-sky-100" onChange={(event) => updateField("nombre", event.target.value)} placeholder="Nombre completo" value={formData.nombre} />
                  <input className="min-h-12 rounded-2xl border border-[var(--line)] px-4 text-sm outline-none focus:border-[var(--brand)] focus:ring-4 focus:ring-sky-100" onChange={(event) => updateField("cargo", event.target.value)} placeholder="Cargo" value={formData.cargo} />
                  <input className="min-h-12 rounded-2xl border border-[var(--line)] px-4 text-sm outline-none focus:border-[var(--brand)] focus:ring-4 focus:ring-sky-100" onChange={(event) => updateField("turno", event.target.value)} placeholder="Turno" value={formData.turno} />
                  <input className="min-h-12 rounded-2xl border border-[var(--line)] px-4 text-sm outline-none focus:border-[var(--brand)] focus:ring-4 focus:ring-sky-100" onChange={(event) => updateField("vehiculo", event.target.value)} placeholder="Vehiculo asignado" value={formData.vehiculo} />
                  <input className="min-h-12 rounded-2xl border border-[var(--line)] px-4 text-sm outline-none focus:border-[var(--brand)] focus:ring-4 focus:ring-sky-100" onChange={(event) => updateField("estado", event.target.value)} placeholder="Estado" value={formData.estado} />
                  <button className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--brand)] px-6 text-sm font-semibold text-white hover:bg-[var(--brand-strong)]" onClick={handleCreate} type="button">Guardar colaborador</button>
                </div>
              </>
            ) : null}

            {activeView === "editar" ? (
              <>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">Editar personal</p>
                <h2 className="mt-2 text-2xl font-semibold text-[var(--foreground)]">Actualizar colaborador</h2>
                <div className="mt-6 grid gap-4">
                  <select className="min-h-12 rounded-2xl border border-[var(--line)] px-4 text-sm outline-none focus:border-[var(--brand)] focus:ring-4 focus:ring-sky-100" onChange={(event) => { const nextId = Number(event.target.value); const collaborator = collaborators.find((item) => item.id === nextId) ?? null; setSelectedId(nextId); if (collaborator) loadCollaboratorForEdit(collaborator); }} value={selectedId}>
                    {collaborators.map((item) => <option key={item.id} value={item.id}>{item.nombre}</option>)}
                  </select>
                  <input className="min-h-12 rounded-2xl border border-[var(--line)] px-4 text-sm outline-none focus:border-[var(--brand)] focus:ring-4 focus:ring-sky-100" onChange={(event) => updateField("nombre", event.target.value)} placeholder="Nombre completo" value={formData.nombre} />
                  <input className="min-h-12 rounded-2xl border border-[var(--line)] px-4 text-sm outline-none focus:border-[var(--brand)] focus:ring-4 focus:ring-sky-100" onChange={(event) => updateField("cargo", event.target.value)} placeholder="Cargo" value={formData.cargo} />
                  <input className="min-h-12 rounded-2xl border border-[var(--line)] px-4 text-sm outline-none focus:border-[var(--brand)] focus:ring-4 focus:ring-sky-100" onChange={(event) => updateField("turno", event.target.value)} placeholder="Turno" value={formData.turno} />
                  <input className="min-h-12 rounded-2xl border border-[var(--line)] px-4 text-sm outline-none focus:border-[var(--brand)] focus:ring-4 focus:ring-sky-100" onChange={(event) => updateField("vehiculo", event.target.value)} placeholder="Vehiculo asignado" value={formData.vehiculo} />
                  <input className="min-h-12 rounded-2xl border border-[var(--line)] px-4 text-sm outline-none focus:border-[var(--brand)] focus:ring-4 focus:ring-sky-100" onChange={(event) => updateField("estado", event.target.value)} placeholder="Estado" value={formData.estado} />
                  <button className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--brand)] px-6 text-sm font-semibold text-white hover:bg-[var(--brand-strong)]" onClick={handleSaveEdit} type="button">Guardar cambios</button>
                </div>
              </>
            ) : null}
          </article>
        </section>
      </section>
    </main>
  );
}
