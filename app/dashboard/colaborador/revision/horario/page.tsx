import Link from "next/link";

export default function RevisionHorarioPage() {
  return (
    <main className="corporate-shell min-h-screen px-6 py-8 sm:px-8">
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-6">
        <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
            Revision de pendiente
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--foreground)]">
            Revisar horario asignado
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            Esta vista deja listo el flujo para que las APIs notifiquen el
            horario del turno y registren la confirmacion del colaborador.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <article className="glass-panel rounded-[1.75rem] p-6">
            <p className="text-sm font-semibold text-[var(--brand)]">Paso 1</p>
            <h2 className="mt-3 text-xl font-semibold text-[var(--foreground)]">
              Recibir horario
            </h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              El backend mostrara hora de inicio, hora de cierre y punto de
              trabajo.
            </p>
          </article>
          <article className="glass-panel rounded-[1.75rem] p-6">
            <p className="text-sm font-semibold text-[var(--brand)]">Paso 2</p>
            <h2 className="mt-3 text-xl font-semibold text-[var(--foreground)]">
              Confirmar recibido
            </h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              El colaborador confirma que reviso el turno y que esta enterado de
              la asignacion.
            </p>
          </article>
          <article className="glass-panel rounded-[1.75rem] p-6">
            <p className="text-sm font-semibold text-[var(--brand)]">Paso 3</p>
            <h2 className="mt-3 text-xl font-semibold text-[var(--foreground)]">
              Enviar respuesta
            </h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              La API podra guardar confirmacion, hora y estado del pendiente.
            </p>
          </article>
        </div>

        <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <button className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--brand)] px-6 text-sm font-semibold text-white hover:bg-[var(--brand-strong)]" type="button">
              Confirmar horario
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
