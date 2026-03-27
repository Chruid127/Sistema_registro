"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type CollaboratorDashboardProps = {
  email: string;
  internalId: string;
};

const tasks = [
  {
    title: "Revisar horario asignado",
    href: "/dashboard/colaborador/revision/horario",
  },
  {
    title: "Confirmar salida del vehiculo",
    href: "/dashboard/colaborador/revision/vehiculo",
  },
  {
    title: "Registrar novedad si aplica",
    href: "/dashboard/colaborador/revision/novedad",
  },
];

export function CollaboratorDashboard({
  email,
  internalId,
}: CollaboratorDashboardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [cameraState, setCameraState] = useState<
    "idle" | "requesting" | "ready" | "error"
  >("idle");
  const [verificationType, setVerificationType] = useState<
    "vehicular" | "selfie" | null
  >(null);
  const [cameraError, setCameraError] = useState("");

  useEffect(() => {
    return () => {
      streamRef.current?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  async function startVerification(type: "vehicular" | "selfie") {
    setVerificationType(type);
    setCameraState("requesting");
    setCameraError("");

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video:
          type === "selfie"
            ? { facingMode: "user" }
            : { facingMode: { ideal: "environment" } },
      });

      streamRef.current?.getTracks().forEach((track) => track.stop());
      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }

      setCameraState("ready");
    } catch {
      setCameraState("error");
      setCameraError(
        "No fue posible abrir la camara. Revisa los permisos del navegador.",
      );
    }
  }

  return (
    <main className="corporate-shell min-h-screen px-6 py-8 sm:px-8">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <header className="glass-panel rounded-[2rem] px-6 py-6 sm:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand)]">
                Ozsford Security
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--foreground)]">
                Panel del colaborador
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                Esta vista muestra la informacion personal, el vehiculo asignado
                y permite comenzar las verificaciones con camara.
              </p>
            </div>
            <div className="surface-soft grid gap-3 rounded-[1.5rem] p-4 sm:min-w-72">
              <p className="text-sm text-[var(--muted)]">Ingreso actual</p>
              <p className="text-base font-semibold text-[var(--foreground)]">
                {email}
              </p>
              <p className="text-sm text-[var(--muted)]">ID interno: {internalId}</p>
              <Link
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--brand)] px-5 text-sm font-semibold text-white hover:bg-[var(--brand-strong)]"
                href="/seleccion"
              >
                Cambiar de panel
              </Link>
            </div>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="glass-panel rounded-[2rem] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
              Mis datos
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[var(--foreground)]">
              Informacion personal
            </h2>
            <div className="mt-6 grid gap-4">
              <div className="surface-card rounded-3xl p-5">
                <p className="text-sm text-[var(--muted)]">Nombre</p>
                <p className="mt-2 text-lg font-semibold text-[var(--foreground)]">
                  Juan Perez
                </p>
              </div>
              <div className="surface-card rounded-3xl p-5">
                <p className="text-sm text-[var(--muted)]">Cargo</p>
                <p className="mt-2 text-lg font-semibold text-[var(--foreground)]">
                  Guarda de seguridad
                </p>
              </div>
              <div className="surface-card rounded-3xl p-5">
                <p className="text-sm text-[var(--muted)]">Turno de hoy</p>
                <p className="mt-2 text-lg font-semibold text-[var(--foreground)]">
                  7:00 AM a 7:00 PM
                </p>
              </div>
            </div>
          </article>

          <div className="grid gap-6">
            <article className="glass-panel rounded-[2rem] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
                Verificaciones
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-[var(--foreground)]">
                Iniciar revision con camara
              </h2>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <button
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--brand)] px-6 text-sm font-semibold text-white hover:bg-[var(--brand-strong)]"
                  onClick={() => startVerification("vehicular")}
                  type="button"
                >
                  Inicio de verificacion vehicular
                </button>
                <button
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--line)] px-6 text-sm font-semibold text-[var(--foreground)] hover:border-[var(--brand)] hover:text-[var(--brand)]"
                  onClick={() => startVerification("selfie")}
                  type="button"
                >
                  Inicio de verificacion por selfie
                </button>
              </div>

              <div className="surface-card mt-6 rounded-[1.75rem] p-4">
                <div className="aspect-video overflow-hidden rounded-[1.25rem] bg-black/85">
                  <video
                    ref={videoRef}
                    autoPlay
                    className="h-full w-full object-cover"
                    muted
                    playsInline
                  />
                </div>
                <div className="mt-4">
                  {cameraState === "idle" ? (
                    <p className="text-sm text-[var(--muted)]">
                      Elige una de las dos verificaciones para pedir permiso de
                      camara y comenzar la vista previa.
                    </p>
                  ) : null}
                  {cameraState === "requesting" ? (
                    <p className="text-sm text-[var(--muted)]">
                      Esperando permiso para usar la camara...
                    </p>
                  ) : null}
                  {cameraState === "ready" ? (
                    <p className="text-sm font-medium text-emerald-600">
                      Camara activa para verificacion{" "}
                      {verificationType === "vehicular" ? "vehicular" : "por selfie"}.
                    </p>
                  ) : null}
                  {cameraState === "error" ? (
                    <p className="text-sm font-medium text-red-600">
                      {cameraError}
                    </p>
                  ) : null}
                </div>
              </div>
            </article>

            <article className="glass-panel rounded-[2rem] p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
                    Acciones del turno
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-[var(--foreground)]">
                    Respuesta rapida
                  </h2>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-red-600 px-6 text-sm font-semibold text-white hover:bg-red-700"
                    href="/dashboard/colaborador/panico"
                  >
                    Boton de panico
                  </Link>
                  <Link
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--line)] px-6 text-sm font-semibold text-[var(--foreground)] hover:border-[var(--brand)] hover:text-[var(--brand)]"
                    href="/dashboard/colaborador/novedades"
                  >
                    Novedades del turno
                  </Link>
                </div>
              </div>
            </article>

            <article className="glass-panel rounded-[2rem] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
                Vehiculo asignado
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-[var(--foreground)]">
                Informacion del vehiculo
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="surface-card rounded-3xl p-5">
                  <p className="text-sm text-[var(--muted)]">Placa</p>
                  <p className="mt-2 text-lg font-semibold text-[var(--foreground)]">
                    OZS-214
                  </p>
                </div>
                <div className="surface-card rounded-3xl p-5">
                  <p className="text-sm text-[var(--muted)]">Estado</p>
                  <p className="mt-2 text-lg font-semibold text-[var(--foreground)]">
                    Activo
                  </p>
                </div>
                <div className="surface-card rounded-3xl p-5">
                  <p className="text-sm text-[var(--muted)]">Salida</p>
                  <p className="mt-2 text-lg font-semibold text-[var(--foreground)]">
                    6:30 AM
                  </p>
                </div>
              </div>
            </article>

            <article className="glass-panel rounded-[2rem] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
                Pendientes
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-[var(--foreground)]">
                Lo que debes revisar hoy
              </h2>
              <div className="mt-6 grid gap-4">
                {tasks.map((task) => (
                  <Link
                    key={task.title}
                    className="surface-card rounded-3xl p-5 hover:border-[var(--brand)]"
                    href={task.href}
                  >
                    <p className="text-base font-semibold text-[var(--foreground)]">
                      {task.title}
                    </p>
                    <p className="mt-2 text-sm text-[var(--muted)]">
                      Abrir paso a paso
                    </p>
                  </Link>
                ))}
              </div>
            </article>
          </div>
        </section>
      </section>
    </main>
  );
}
