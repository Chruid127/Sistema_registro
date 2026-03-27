import Link from "next/link";

export default function RevisionVehiculoPage() {
  return (
    <main className="corporate-shell min-h-screen px-6 py-8 sm:px-8">
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-6">
        <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
            Revision de pendiente
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--foreground)]">
            Confirmar salida del vehiculo
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            Esta vista prepara el recorrido para registrar estado, kilometraje y
            confirmacion de salida del vehiculo asignado.
          </p>
        </div>

        <div className="grid gap-4">
          <div className="surface-card rounded-[1.75rem] p-6">
            <p className="text-sm text-[var(--muted)]">Placa</p>
            <p className="mt-2 text-lg font-semibold text-[var(--foreground)]">
              OZS-214
            </p>
          </div>
          <div className="surface-card rounded-[1.75rem] p-6">
            <p className="text-sm text-[var(--muted)]">Revision visual</p>
            <p className="mt-2 text-lg font-semibold text-[var(--foreground)]">
              Luces, puertas, llantas y combustible
            </p>
          </div>
          <div className="surface-card rounded-[1.75rem] p-6">
            <p className="text-sm text-[var(--muted)]">Accion de la API</p>
            <p className="mt-2 text-lg font-semibold text-[var(--foreground)]">
              Guardar hora de salida, evidencia y estado del vehiculo
            </p>
          </div>
        </div>

        <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <button className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--brand)] px-6 text-sm font-semibold text-white hover:bg-[var(--brand-strong)]" type="button">
              Confirmar salida
            </button>
            <Link className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--line)] px-6 text-sm font-semibold text-[var(--foreground)] hover:border-[var(--brand)] hover:text-[var(--brand)]" href="/dashboard/colaborador">
              Volver al panel
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
