export default function Partner({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex flex-col justify-center items-center gap-y-5">
      <img src={src} alt={alt} loading="lazy" className="w-35" />
    </div>
  );
}
