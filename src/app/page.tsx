const INSTAGRAM_URL = "https://www.instagram.com/libovychipsy/";

export default function Home() {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-white px-4 py-6 md:p-0">
      {/*
        Desktop uses the same 16:9 box as the artwork, so the Instagram hit area
        lines up with the handle instead of the full viewport.
      */}
      <div className="relative aspect-[3/4] w-full max-w-sm md:aspect-video md:h-auto md:max-h-dvh md:max-w-none md:w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/plocha-vzhled.png"
          alt="Libový Chipsy"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center md:object-contain"
          draggable={false}
        />

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Otevřít Instagram libovychipsy"
          className="absolute bottom-[3%] left-1/2 z-10 h-[16%] w-[78%] max-w-[20rem] -translate-x-1/2 md:bottom-[2%] md:h-[14%] md:w-[32%] md:max-w-none"
        />
      </div>
    </main>
  );
}
