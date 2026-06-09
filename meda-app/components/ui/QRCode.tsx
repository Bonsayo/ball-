export function QRCode({ data }: { data: string }) {
  // A fake QR code generator using CSS grid
  // We use the string length to seed a pseudo-random layout
  
  const seed = data.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const squares = Array.from({ length: 64 }).map((_, i) => {
    // Arbitrary pseudo-random function for styling
    const isDark = ((i * seed) % 7) > 2;
    return isDark;
  });

  return (
    <div className="grid grid-cols-8 grid-rows-8 gap-0.5 w-[160px] h-[160px] p-2 bg-white rounded-lg border-2 border-surface-variant">
      {squares.map((isDark, i) => (
        <div key={i} className={isDark ? "bg-black rounded-sm" : "bg-white"} />
      ))}
      
      {/* Three distinct positioning squares for realism */}
      <div className="col-start-1 col-end-3 row-start-1 row-end-3 bg-white p-0.5 border-[3px] border-black rounded-sm relative">
        <div className="absolute inset-0.5 bg-black" />
      </div>
      <div className="col-start-7 col-end-9 row-start-1 row-end-3 bg-white p-0.5 border-[3px] border-black rounded-sm relative">
        <div className="absolute inset-0.5 bg-black" />
      </div>
      <div className="col-start-1 col-end-3 row-start-7 row-end-9 bg-white p-0.5 border-[3px] border-black rounded-sm relative">
        <div className="absolute inset-0.5 bg-black" />
      </div>
    </div>
  );
}
