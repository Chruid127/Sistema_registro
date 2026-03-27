import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="corporate-shell section-grid flex min-h-screen items-center px-6 py-10 sm:px-8">
      <section className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col justify-between rounded-[2rem] bg-[var(--brand-strong)] p-8 text-white shadow-2xl shadow-sky-950/15 sm:p-10">
          <div>
            <Link
              className="inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-sm text-sky-100 hover:border-white/30 hover:text-white"
              href="/"
            >
              Volver al inicio
            </Link>
            <p className="mt-10 text-sm font-semibold uppercase tracking-[0.26em] text-sky-200">
              Ozsford Security
            </p>
            <h1 className="mt-4 max-w-md text-4xl font-semibold tracking-tight sm:text-5xl">
              Bienvenido al sistema de gestion.
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-7 text-sky-100/85 sm:text-base">
              Desde aqui podras entrar para revisar personal, vehiculos y la
              informacion asignada dentro de la empresa.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-sky-100/70">Ingreso rapido</p>
              <p className="mt-2 text-lg font-semibold">Pantalla facil de usar</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-sky-100/70">Siguiente paso</p>
              <p className="mt-2 text-lg font-semibold">Elegir panel con ID</p>
            </div>
          </div>
        </div>

        <section className="glass-panel rounded-[2rem] p-5 sm:p-7">
          <div className="rounded-[1.6rem] bg-[var(--surface-strong)] p-6 ring-1 ring-[var(--line)] sm:p-8">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">
                Ingreso
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-[var(--foreground)]">
                Entra con tus datos
              </h2>
              <p className="max-w-md text-sm leading-7 text-[var(--muted)]">
                Por ahora esta vista es de demostracion. Despues conectaremos
                estos datos con el backend.
              </p>
            </div>

            <form action="/seleccion" className="mt-8 space-y-5">
              <div className="space-y-2">
                <label
                  className="text-sm font-medium text-[var(--foreground)]"
                  htmlFor="email"
                >
                  Correo de trabajo
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="nombre@ozsfordsecurity.com"
                  className="min-h-12 w-full rounded-2xl border border-[var(--line)] px-4 text-sm text-[var(--foreground)] outline-none focus:border-[var(--brand)] focus:ring-4 focus:ring-sky-100"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <label
                    className="text-sm font-medium text-[var(--foreground)]"
                    htmlFor="password"
                  >
                    Clave
                  </label>
                  <button
                    type="button"
                    className="text-sm font-medium text-[var(--brand)] hover:text-[var(--brand-strong)]"
                  >
                    Necesito ayuda
                  </button>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Escribe tu clave"
                  className="min-h-12 w-full rounded-2xl border border-[var(--line)] px-4 text-sm text-[var(--foreground)] outline-none focus:border-[var(--brand)] focus:ring-4 focus:ring-sky-100"
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <label className="flex items-center gap-3 text-sm text-[var(--muted)]">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-[var(--line)] text-[var(--brand)] focus:ring-sky-200"
                  />
                  Recordar mi ingreso
                </label>
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
                  Vista de prueba
                </span>
              </div>

              <button
                type="submit"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[var(--brand)] px-6 text-sm font-semibold text-white shadow-lg shadow-sky-900/15 hover:-translate-y-0.5 hover:bg-[var(--brand-strong)]"
              >
                Continuar
              </button>
            </form>

            <div className="mt-8 grid gap-4 border-t border-[var(--line)] pt-6 sm:grid-cols-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                  Personal
                </p>
                <p className="mt-2 text-sm font-semibold text-[var(--foreground)]">
                  Consulta datos del equipo
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                  Vehiculos
                </p>
                <p className="mt-2 text-sm font-semibold text-[var(--foreground)]">
                  Revisa las asignaciones
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                  Paneles
                </p>
                <p className="mt-2 text-sm font-semibold text-[var(--foreground)]">
                  Admin y colaborador
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
