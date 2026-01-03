import Image from "next/image";

export default function ProductImages({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative h-40 w-full overflow-hidden rounded-lg bg-white">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    </div>
  );
}
