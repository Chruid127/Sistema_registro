import Link from "next/link";

export default function PanicoPage() {
  return (
    <main className="corporate-shell min-h-screen px-6 py-8 sm:px-8">
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-6">
        <div className="glass-panel rounded-[2rem] border border-red-500/30 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-600">
            Alerta inmediata
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--foreground)]">
            Boton de panico
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            Esta vista simula el flujo donde la app enviara una alerta urgente a
            traves de las APIs con ubicacion, hora y datos del colaborador.
          </p>
        </div>

        <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
          <div className="surface-card rounded-[1.75rem] p-6">
            <p className="text-sm text-[var(--muted)]">Accion esperada</p>
            <p className="mt-2 text-lg font-semibold text-[var(--foreground)]">
              Notificar de inmediato al centro de control y registrar el evento.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <button className="inline-flex min-h-14 items-center justify-center rounded-full bg-red-600 px-6 text-base font-semibold text-white hover:bg-red-700" type="button">
              Enviar alerta de panico
            </button>
            <Link className="inline-flex min-h-14 items-center justify-center rounded-full border border-[var(--line)] px-6 text-base font-semibold text-[var(--foreground)] hover:border-[var(--brand)] hover:text-[var(--brand)]" href="/dashboard/colaborador">
              Volver al panel
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
