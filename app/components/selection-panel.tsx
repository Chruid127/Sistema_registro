"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type SelectionPanelProps = {
  email: string;
};

const panels = [
  {
    id: "admin",
    title: "Administradores",
    description:
      "Para revisar personal, vehiculos, movimientos y resumen general del equipo.",
  },
  {
    id: "colaborador",
    title: "Colaboradores",
    description:
      "Para ver datos personales, vehiculo asignado y tareas del dia.",
  },
] as const;

export function SelectionPanel({ email }: SelectionPanelProps) {
  const router = useRouter();
  const [selectedPanel, setSelectedPanel] = useState<
    "admin" | "colaborador" | null
  >(null);
  const [internalId, setInternalId] = useState("");

  function handleContinue() {
    if (!selectedPanel) {
      return;
    }

    const targetPath =
      selectedPanel === "admin"
        ? "/dashboard/admin"
        : "/dashboard/colaborador";

    const searchParams = new URLSearchParams();
    searchParams.set("id", internalId.trim() || "MUESTRA-DEMO");
    if (email) searchParams.set("email", email);
    router.push(`${targetPath}?${searchParams.toString()}`);
  }

  return (
    <main className="corporate-shell section-grid min-h-screen px-6 py-10 sm:px-8">
      <section className="mx-auto w-full max-w-6xl">
        <div className="glass-panel rounded-[2rem] p-5 sm:p-7">
          <div className="grid gap-8 rounded-[1.6rem] bg-[var(--surface-strong)] p-6 ring-1 ring-[var(--line)] lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">
                Ozsford Security
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-[var(--foreground)]">
                Elige el panel que deseas abrir
              </h1>
              <p className="max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                Elige primero un panel. Luego escribe el ID interno para abrir
                esa vista.
              </p>
              <div className="rounded-3xl bg-[var(--brand-soft)] p-5">
                <p className="text-sm text-[var(--muted)]">
                  Usuario en esta vista
                </p>
                <p className="mt-2 text-lg font-semibold text-[var(--brand-strong)]">
                  {email || "Sin correo cargado"}
                </p>
              </div>
            </div>

            <section className="grid gap-5">
              <div className="grid gap-4 sm:grid-cols-2">
                {panels.map((panel) => (
                  <button
                    key={panel.id}
                    className={`surface-card rounded-[1.75rem] p-5 text-left shadow-sm hover:-translate-y-0.5 hover:border-[var(--brand)] ${
                      selectedPanel === panel.id ? "ring-2 ring-[var(--brand)]" : ""
                    }`}
                    onClick={() => {
                      setSelectedPanel(panel.id);
                    }}
                    type="button"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
                      {panel.id === "admin" ? "Panel 1" : "Panel 2"}
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold text-[var(--foreground)]">
                      {panel.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                      {panel.description}
                    </p>
                  </button>
                ))}
              </div>

              <div className="surface-soft rounded-[1.75rem] p-5">
                <label
                  className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]"
                  htmlFor="internal-id"
                >
                  ID interno
                </label>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  {selectedPanel
                    ? "Si quieres, escribe el ID interno. Si no, puedes continuar igual para mostrar la vista."
                    : "Selecciona un panel. El ID interno es opcional en esta demostracion."}
                </p>
                <div className="mt-4 grid gap-4 sm:grid-cols-[1fr_auto]">
                  <input
                    id="internal-id"
                    type="text"
                    value={internalId}
                    onChange={(event) => setInternalId(event.target.value)}
                    placeholder="Ejemplo: OZ-2048"
                    className="min-h-12 w-full rounded-2xl border border-[var(--line)] px-4 text-sm text-[var(--foreground)] outline-none focus:border-[var(--brand)] focus:ring-4 focus:ring-sky-100"
                  />
                  <button
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--brand)] px-6 text-sm font-semibold text-white hover:bg-[var(--brand-strong)]"
                    onClick={handleContinue}
                    type="button"
                  >
                    Continuar
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
