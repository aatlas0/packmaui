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
    const x = rect.right - clientX;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
  };

  const onPointerDown = () => { dragging.current = true; };
  const onPointerUp = () => { dragging.current = false; };

  return (
    <section id="results" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full translate-y-1/2 scale-150 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 border border-primary/20 shadow-sm">
            النتائج الحقيقية
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            النتائج تتحدث عن نفسها
          </h2>
          <p className="text-lg sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            فرق واضح من أول استعمال – اسحبي المؤشر لترى الفرق
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Interactive slider CONTAINER */}
          <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border-4 sm:border-8 border-white group">

            <div
              ref={containerRef}
              className="relative aspect-[4/5] sm:aspect-square md:aspect-video cursor-col-resize select-none"
              onPointerDown={onPointerDown}
              onPointerUp={onPointerUp}
              onPointerLeave={onPointerUp}
              onPointerMove={(e) => handleMove(e.clientX)}
              onTouchMove={(e) => { dragging.current = true; handleMove(e.touches[0].clientX); }}
              onTouchEnd={onPointerUp}
            >
              {/* After image (Base) */}
              <img src={afterImg}
                alt="بعد استعمال باك زبدة الشيا"
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
                  alt="قبل استعمال باك زبدة الشيا"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ filter: "grayscale(20%) sepia(20%) brightness(0.9)" }}
                  draggable={false} loading="lazy" decoding="async" />
              </div>

              {/* Slider line & handle */}
              <div
                className="absolute top-0 bottom-0 w-1 sm:w-1.5 bg-white shadow-[0_0_20px_rgba(0,0,0,0.5)] z-10 cursor-col-resize group-hover:bg-primary/50 transition-colors"
                style={{ right: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-2xl flex items-center justify-center cursor-grab active:cursor-grabbing border-4 border-primary transition-transform hover:scale-110">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary group-active:scale-90 transition-transform sm:w-8 sm:h-8">
                    <path d="M18 12L15 9M18 12L15 15M18 12H6M6 12L9 9M6 12L9 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Badges/Labels */}
              <div className="absolute top-6 right-6 sm:top-8 sm:right-8 bg-black/50 backdrop-blur-md text-white px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-sm sm:text-base font-bold z-20 pointer-events-none border border-white/20 shadow-lg transition-opacity duration-300" style={{ opacity: sliderPos > 20 ? 1 : 0 }}>
                قبل
              </div>
              <div className="absolute top-6 left-6 sm:top-8 sm:left-8 bg-primary/90 backdrop-blur-md text-white px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-sm sm:text-base font-bold z-20 pointer-events-none border border-white/20 shadow-lg transition-opacity duration-300" style={{ opacity: sliderPos < 80 ? 1 : 0 }}>
                بعد ✨
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16 relative z-10">
            {[
              { stat: "95%", label: "لاحظوا فرقاً في الترطيب", delay: "0s" },
              { stat: "89%", label: "شعر أكثر نعومة وحيوية", delay: "0.1s" },
              { stat: "92%", label: "إصلاح واضح للأطراف", delay: "0.2s" },
            ].map((item, i) => (
              <div key={i} className="text-center bg-card/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-warm border border-border/50 hover:shadow-warm-lg hover:-translate-y-2 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: item.delay }}>
                <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary to-accent block mb-2 sm:mb-3 drop-shadow-sm">{item.stat}</span>
                <span className="text-sm sm:text-base font-medium text-foreground/80 block">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
