const INSTAGRAM_URL = "https://www.instagram.com/libovychipsy/";

export default function Home() {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-white px-4 py-6 md:p-0">
      <div className="relative aspect-[3/4] w-full max-w-sm md:aspect-auto md:h-dvh md:max-w-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/plocha-vzhled.png"
          alt="Libový Chipsy"
          className="absolute inset-0 h-full w-full object-cover object-center md:object-contain"
        />

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram libovychipsy"
          className="absolute inset-x-0 bottom-[6%] z-10 mx-auto h-[12%] w-[75%] md:bottom-[3%] md:h-[8%] md:w-[min(42%,22rem)]"
        />
      </div>
    </main>
  );
}
