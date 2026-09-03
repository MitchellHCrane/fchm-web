"use client";

/**
 * Replacement for the abandoned `particles-bg` package (peers on React 16/17).
 * TODO(phase-1): swap in `@tsparticles/react` cobweb config, or a lightweight
 * canvas implementation. For now this renders a subtle static gradient so the
 * layout matches the "particles" variant without shipping a broken dep.
 */
export function ParticleField() {
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        zIndex: -1,
        background:
          "radial-gradient(circle at 30% 20%, rgba(44,164,242,0.10), transparent 60%)",
        pointerEvents: "none",
      }}
    />
  );
}
