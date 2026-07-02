import { useEffect, useState } from "react";

export function WelcomeIntro() {
  const [phase, setPhase] = useState<"visible" | "leaving" | "gone">("visible");

  useEffect(() => {
    // Prevent scroll while intro is showing
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const leaveTimer = setTimeout(() => setPhase("leaving"), 2500);
    const goneTimer = setTimeout(() => {
      setPhase("gone");
      document.body.style.overflow = prevOverflow;
    }, 3000);

    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(goneTimer);
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      className={`fixed inset-0 z-[100] grid place-items-center bg-background transition-opacity duration-500 ${
        phase === "leaving" ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden={phase === "leaving"}
    >
      <div className="flex flex-col items-center text-center">
        <span className="intro-fade grid h-14 w-14 place-items-center rounded-sm border border-border bg-secondary font-mono text-sm">
          HI
        </span>
        <p className="intro-fade mt-6 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground [animation-delay:0.2s]">
          Welcome
        </p>
        <h1 className="intro-fade mt-3 text-4xl md:text-6xl [animation-delay:0.4s]">
          Hanan Ibrahim
        </h1>
        <p className="intro-fade mt-3 text-base text-muted-foreground [animation-delay:0.6s]">
          Robotics Engineer
        </p>
        <span className="intro-line mt-8 h-px w-0 bg-primary [animation-delay:0.8s]" />
      </div>
    </div>
  );
}
