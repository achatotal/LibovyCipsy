const INSTAGRAM_URL = "https://www.instagram.com/libovychipsy/";

export default function Home() {
  return (
    <main className="relative min-h-dvh w-full overflow-hidden">
      {/* Full-bleed marble — covers edges on every screen size */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/background.jpg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
        draggable={false}
      />

      <div className="relative z-10 flex min-h-dvh items-center justify-center px-4 py-6 md:px-8 md:py-6">
        {/* Trimmed artwork — nearly full phone width, capped on desktop */}
        <div className="relative w-[92vw] max-w-md md:w-full md:max-w-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/foreground.png"
            alt="Libový Chipsy"
            className="pointer-events-none h-auto w-full select-none"
            draggable={false}
          />

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Otevřít Instagram libovychipsy"
            className="absolute bottom-[1%] left-1/2 z-10 h-[12%] w-[85%] -translate-x-1/2 md:bottom-[1%] md:h-[10%] md:w-[70%]"
          />
        </div>
      </div>
    </main>
  );
}
