import { useState, useRef } from "react";
import beforeImg from "@/assets/before.webp";
import afterImg from "@/assets/after.webp";

const BeforeAfterSection = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current || !dragging.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // RTL: invert direction
    const x = rect.right - clientX;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
  };

  const onPointerDown = () => { dragging.current = true; };
  const onPointerUp = () => { dragging.current = false; };

  return (
    <section id="results" className="py-20 bg-coconut">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            النتائج الحقيقية
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            النتائج تتحدث عن نفسها
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            فرق واضح من أول استعمال – اسحبي المؤشر لترى الفرق
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Interactive slider */}
          <div
            ref={containerRef}
            className="relative rounded-2xl overflow-hidden shadow-warm-lg cursor-col-resize select-none aspect-[4/3] md:aspect-video"
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
            onPointerMove={(e) => handleMove(e.clientX)}
            onTouchMove={(e) => { dragging.current = true; handleMove(e.touches[0].clientX); }}
            onTouchEnd={onPointerUp}
          >
            {/* After image (Base) */}
            <img src={afterImg}
              alt="بعد استعمال باك معادن البحر"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              draggable={false} loading="lazy" decoding="async" />

            {/* Before image (Overlay) */}
            <div
              className="absolute inset-0 pointer-events-none overflow-hidden"
              style={{
                clipPath: `inset(0 0 0 ${100 - sliderPos}%)`,
              }}
            >
              <img src={beforeImg}
                alt="قبل استعمال باك معادن البحر"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: "grayscale(30%) brightness(0.9)" }}
                draggable={false} loading="lazy" decoding="async" />
            </div>

            {/* Slider line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white/90 shadow-[0_0_15px_rgba(0,0,0,0.3)] z-10"
              style={{ right: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center cursor-grab active:cursor-grabbing border-2 border-primary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary group-active:scale-110 transition-transform">
                  <path d="M18 12L15 9M18 12L15 15M18 12H6M6 12L9 9M6 12L9 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-bold z-20 pointer-events-none border border-white/20">
              قبل الاستعمال
            </div>
            <div className="absolute top-4 left-4 bg-primary/80 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-bold z-20 pointer-events-none border border-primary/20">
              بعد الاستعمال ✨
            </div>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 sm:mt-16 relative z-10">
            {[
              { stat: "95%", label: "لاحظوا فرقاً في الحفاظ على اللون" },
              { stat: "89%", label: "شعر أكثر نعومة وترطيباً" },
              { stat: "92%", label: "لمعان صحي يدوم طويلاً" },
            ].map((item, i) => (
              <div key={i} className="text-center bg-card/80 backdrop-blur-md rounded-2xl p-6 shadow-sm hover:shadow-warm transition-shadow border border-white/50">
                <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent block mb-2">{item.stat}</span>
                <span className="text-base md:text-lg text-foreground font-medium block">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
