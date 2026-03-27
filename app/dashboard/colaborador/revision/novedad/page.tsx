import Link from "next/link";

export default function RevisionNovedadPage() {
  return (
    <main className="corporate-shell min-h-screen px-6 py-8 sm:px-8">
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-6">
        <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
            Revision de pendiente
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--foreground)]">
            Registrar novedad
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            Esta vista deja lista la captura de novedades para que luego el
            backend guarde descripcion, tipo y hora del evento reportado.
          </p>
        </div>

        <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
          <div className="grid gap-4">
            <input
              className="min-h-12 rounded-2xl border border-[var(--line)] px-4 text-sm outline-none focus:border-[var(--brand)] focus:ring-4 focus:ring-sky-100"
              placeholder="Tipo de novedad"
            />
            <textarea
              className="min-h-40 rounded-[1.5rem] border border-[var(--line)] px-4 py-4 text-sm outline-none focus:border-[var(--brand)] focus:ring-4 focus:ring-sky-100"
              placeholder="Describe lo sucedido"
            />
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <button className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--brand)] px-6 text-sm font-semibold text-white hover:bg-[var(--brand-strong)]" type="button">
              Enviar novedad
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
