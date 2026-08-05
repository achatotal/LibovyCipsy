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

      <div className="relative z-10 flex min-h-dvh items-center justify-center px-3 py-5 md:px-4 md:py-3">
        <div className="relative w-full max-w-7xl">
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
            className="absolute bottom-[2%] left-1/2 z-10 h-[14%] w-[55%] max-w-md -translate-x-1/2 md:bottom-[1.5%] md:h-[12%] md:w-[30%]"
          />
        </div>
      </div>
    </main>
  );
}
