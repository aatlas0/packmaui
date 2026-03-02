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
    <section id="results" className="py-24 bg-gradient-to-b from-background to-coconut relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 lg:mb-20 animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4 border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            النتائج الحقيقية
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-cairo">
            النتائج تتحدث عن نفسها
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-golden mx-auto rounded-full mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-cairo">
            فرق واضح من أول استعمال – اسحبي المؤشر لترى الفرق
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Interactive slider */}
          <div
            ref={containerRef}
            className="relative rounded-[2rem] overflow-hidden shadow-2xl cursor-col-resize select-none aspect-[4/3] md:aspect-[21/9] border-4 border-white/50 bg-muted/20 group"
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
            onPointerMove={(e) => handleMove(e.clientX)}
            onTouchMove={(e) => { dragging.current = true; handleMove(e.touches[0].clientX); }}
            onTouchEnd={onPointerUp}
          >
            {/* After image (Base) */}
            <img src={afterImg}
              alt="بعد استعمال باك أوابوهي للمعان"
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
                alt="قبل استعمال باك أوابوهي للمعان"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: "grayscale(30%) brightness(0.9)" }}
                draggable={false} loading="lazy" decoding="async" />
            </div>

            {/* Slider line */}
            <div
              className="absolute top-0 bottom-0 w-1.5 bg-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] z-10 transition-shadow group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)]"
              style={{ right: `calc(${sliderPos}% - 3px)` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-2xl flex items-center justify-center cursor-grab active:cursor-grabbing border-4 border-primary/20 hover:border-primary/50 hover:scale-110 transition-all">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary group-active:scale-110 transition-transform">
                  <path d="M18 12L15 9M18 12L15 15M18 12H6M6 12L9 9M6 12L9 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-bold z-20 pointer-events-none border border-white/10 shadow-lg translate-y-2 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              قبل الاستعمال
            </div>
            <div className="absolute top-6 left-6 bg-gradient-to-r from-primary to-primary-dark/90 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-bold z-20 pointer-events-none border border-white/20 shadow-[0_0_20px_rgba(var(--primary),0.3)] translate-y-2 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              بعد الاستعمال ✨
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              { stat: "98%", label: "لاحظوا زيادة في اللمعان" },
              { stat: "92%", label: "شعر أكثر انسيابية ونعومة" },
              { stat: "94%", label: "تخلصوا من بهتان الشعر" },
            ].map((item, i) => (
              <div key={i} className={`text-center bg-card rounded-[2rem] p-8 shadow-sm hover:shadow-warm transition-all duration-300 border border-border/50 group ${i === 2 ? 'col-span-2 lg:col-span-1' : ''}`}>
                <span className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-br from-primary via-primary to-golden block mb-2 group-hover:scale-110 transition-transform duration-300">
                  {item.stat}
                </span>
                <span className="text-base text-muted-foreground font-medium block">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
