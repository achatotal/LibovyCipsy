const INSTAGRAM_URL = "https://www.instagram.com/libovychipsy/";

export default function Home() {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-white px-4 py-6 md:p-0">
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Otevřít Instagram libovychipsy"
        className="relative block aspect-[3/4] w-full max-w-sm outline-none md:aspect-auto md:h-dvh md:max-w-none"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/plocha-vzhled.png"
          alt="Libový Chipsy"
          className="absolute inset-0 h-full w-full object-cover object-center md:object-contain"
          draggable={false}
        />
      </a>
    </main>
  );
}
