import Link from "next/link";

const novedades = [
  "Cambio de punto de control a las 10:00 AM",
  "Revision adicional del vehiculo al finalizar el turno",
  "Recordatorio de reporte de novedades antes del cierre",
];

export default function NovedadesPage() {
  return (
    <main className="corporate-shell min-h-screen px-6 py-8 sm:px-8">
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-6">
        <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
            Informacion del turno
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--foreground)]">
            Novedades del turno y del vehiculo
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            Aqui se mostraran los avisos enviados por la API sobre el turno, el
            vehiculo y cualquier novedad operativa.
          </p>
        </div>

        <div className="grid gap-4">
          {novedades.map((novedad) => (
            <article key={novedad} className="glass-panel rounded-[1.75rem] p-6">
              <p className="text-base font-semibold text-[var(--foreground)]">
                {novedad}
              </p>
            </article>
          ))}
        </div>

        <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
          <Link
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--line)] px-6 text-sm font-semibold text-[var(--foreground)] hover:border-[var(--brand)] hover:text-[var(--brand)]"
            href="/dashboard/colaborador"
          >
            Volver al panel
          </Link>
        </div>
      </section>
    </main>
  );
}
