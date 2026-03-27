import Link from "next/link";

const metrics = [
  { value: "2 areas", label: "personal y vehiculos en un solo lugar" },
  { value: "1 acceso", label: "entrada simple para todo el equipo" },
  { value: "100%", label: "pensado para uso diario del personal" },
];

const features = [
  {
    title: "Gestion del personal",
    description:
      "Consulta datos del equipo, turnos, estados y novedades de forma clara y rapida.",
  },
  {
    title: "Control de vehiculos",
    description:
      "Revisa asignaciones, disponibilidad y uso de los vehiculos entregados a colaboradores.",
  },
  {
    title: "Acceso por rol",
    description:
      "Cada persona podra entrar al panel que le corresponde con su identificacion interna.",
  },
];

export default function Home() {
  return (
    <main className="corporate-shell section-grid min-h-screen">
      <section className="mx-auto flex w-full max-w-7xl flex-col px-6 pb-14 pt-6 sm:px-8 lg:px-10">
        <header className="glass-panel flex items-center justify-between rounded-full px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--brand)] text-sm font-semibold tracking-[0.24em] text-white">
              OZ
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">
                Ozsford Security
              </p>
              <p className="text-sm text-[var(--muted)]">
                Gestion de personal y vehiculos asignados
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-[var(--muted)] md:flex">
            <a href="#servicios">Servicios</a>
            <a href="#uso">Como funciona</a>
            <a href="#ingreso">Ingreso</a>
          </nav>
        </header>

        <div className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
          <section className="space-y-8">
            <div className="surface-soft inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-[var(--brand)]">
              Plataforma interna para el equipo de Ozsford Security
            </div>
            <div className="space-y-5">
              <h1 className="balanced-text max-w-3xl text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
                Todo el control del personal y de los vehiculos de la empresa en
                una sola vista.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                Este sistema esta pensado para que administradores y
                colaboradores encuentren la informacion importante sin
                complicaciones, desde celular, tablet o computador.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--brand)] px-6 text-sm font-semibold text-white shadow-lg shadow-sky-900/15 hover:-translate-y-0.5 hover:bg-[var(--brand-strong)]"
                href="/login"
              >
                Ingresar a Ozsford Security
              </Link>
              <a
                className="surface-soft inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold text-[var(--foreground)] hover:border-[var(--brand)] hover:text-[var(--brand)]"
                href="#servicios"
              >
                Ver informacion
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <article
                  key={metric.label}
                  className="glass-panel rounded-3xl px-5 py-5"
                >
                  <p className="text-2xl font-semibold text-[var(--brand-strong)]">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    {metric.label}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <aside className="glass-panel rounded-[2rem] p-5 sm:p-7">
            <div className="rounded-[1.6rem] bg-[var(--surface-strong)] p-5 ring-1 ring-[var(--line)] sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
                    Resumen diario
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-[var(--foreground)]">
                    Ozsford Security
                  </h2>
                </div>
                <div className="status-good rounded-full px-3 py-1 text-xs font-semibold">
                  Activo
                </div>
              </div>

              <div className="mt-8 grid gap-4">
                <div className="rounded-3xl bg-[var(--brand-soft)] p-5">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-sm text-[var(--muted)]">
                        Personal registrado
                      </p>
                      <p className="mt-2 text-3xl font-semibold text-[var(--brand-strong)]">
                        128
                      </p>
                    </div>
                    <div className="text-right text-sm text-[var(--brand)]">
                      12 nuevos este mes
                    </div>
                  </div>
                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/80">
                    <div className="h-full w-3/4 rounded-full bg-[var(--brand)]" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-[var(--line)] p-5">
                    <p className="text-sm text-[var(--muted)]">
                      Vehiculos activos
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-[var(--foreground)]">
                      36
                    </p>
                  </div>
                  <div className="rounded-3xl border border-[var(--line)] p-5">
                    <p className="text-sm text-[var(--muted)]">
                      Entregas del dia
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-[var(--foreground)]">
                      14
                    </p>
                  </div>
                </div>

                <div className="rounded-3xl border border-[var(--line)] p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-[var(--muted)]">
                        Estado general
                      </p>
                      <p className="mt-2 text-lg font-semibold text-[var(--foreground)]">
                        Todo listo para revisar personal y vehiculos
                      </p>
                    </div>
                    <span className="status-neutral rounded-full px-3 py-1 text-xs font-semibold">
                      Al dia
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <section
          id="servicios"
          className="grid gap-5 border-t border-[var(--line)] py-12 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <article
              key={feature.title}
              className="glass-panel rounded-[1.75rem] p-6"
            >
              <div className="mb-5 h-12 w-12 rounded-2xl bg-[var(--brand-soft)]" />
              <h3 className="text-xl font-semibold text-[var(--foreground)]">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {feature.description}
              </p>
            </article>
          ))}
        </section>

        <section
          id="uso"
          className="grid gap-6 py-4 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
              Uso simple
            </p>
            <h2 className="balanced-text text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
              La idea es que cualquier persona del equipo pueda entrar y ubicar
              su informacion sin perder tiempo.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="surface-soft rounded-3xl p-6">
              <p className="text-sm font-semibold text-[var(--foreground)]">
                Ingreso guiado
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                Primero se inicia sesion y luego se elige el panel que se desea
                abrir usando el ID interno.
              </p>
            </div>
            <div className="surface-soft rounded-3xl p-6">
              <p className="text-sm font-semibold text-[var(--foreground)]">
                Informacion clara
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                Los nombres, botones y secciones hablan en lenguaje de trabajo,
                sin palabras tecnicas ni mensajes confusos.
              </p>
            </div>
          </div>
        </section>

        <section
          id="ingreso"
          className="mt-10 rounded-[2rem] bg-[var(--brand-strong)] px-6 py-8 text-white sm:px-8 lg:flex lg:items-center lg:justify-between"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">
              Acceso al sistema
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Entra y continua al panel de administradores o al panel de
              colaboradores.
            </h2>
          </div>
          <div className="mt-6 lg:mt-0">
            <Link
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[var(--brand-strong)] hover:-translate-y-0.5"
              href="/login"
            >
              Ir al login
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
