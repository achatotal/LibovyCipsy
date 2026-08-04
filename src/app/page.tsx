import Image from "next/image";

const INSTAGRAM_URL = "https://www.instagram.com/libovychipsy/";

export default function Home() {
  return (
    <main className="relative h-dvh w-full overflow-hidden bg-[#f3eee6]">
      <Image
        src="/plocha-vzhled.png"
        alt="Libový Chipsy"
        fill
        priority
        sizes="100vw"
        className="object-contain object-center"
      />

      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram libovychipsy"
        className="absolute inset-x-0 bottom-[3%] z-10 mx-auto h-[8%] w-[min(42%,22rem)]"
      />
    </main>
  );
}
