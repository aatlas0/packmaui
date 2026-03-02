import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import heroBundle from "@/assets/hero-bundle.webp";
import heroBg from "@/assets/hero11.webp";

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowStickyCta(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section ref={heroRef} id="hero" className="relative min-h-[110vh] md:min-h-[100vh] flex items-center justify-center overflow-hidden pt-40 md:pt-32 pb-20 gradient-hero" dir="rtl">
        {/* Background with Cinematic Overlay */}
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay" fetchPriority="high" />
          {/* Soft, luxurious gradient mask */}
          <div className="absolute inset-0 bg-gradient-to-l from-background/95 via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px] md:backdrop-blur-0" />
        </div>

        <div className="container mx-auto relative z-10 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Text Content - Right side for RTL */}
            <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-right animate-fade-up">

              {/* Top Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-foreground text-sm font-semibold mb-8 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(var(--primary),0.8)]" />
                مجموعة ماوي مويستشر
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.3] mb-8 drop-shadow-md font-cairo">
                <span className="inline-block pb-2">مجموعة أوابوهي جينجر</span>
                <span className="block mt-4 pb-3 text-transparent bg-clip-text bg-gradient-to-l from-golden to-coral drop-shadow-sm font-black">
                  لمعان ساحر ونعومة حريرية
                </span>
                <span className="block mt-6 font-black">تُعيد الحيوية للشعر الباهت</span>
              </h1>

              {/* Paragraph */}
              <p className="text-lg md:text-xl text-foreground/80 mb-12 leading-relaxed max-w-2xl font-medium font-cairo mix-blend-plus-lighter">
                روتين متألق بخلاصة زنجبيل الأوابوهي، زيت جوز الهند الخفيف، وزهرة التياري الاستوائية لمنح شعرك لمعاناً كالمرايا ونعومة الحرير
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto mb-16">
                <Link
                  to="/checkout"
                  className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-bold shadow-[0_10px_40px_-10px_rgba(var(--primary),0.5)] hover:shadow-[0_10px_40px_-5px_rgba(var(--primary),0.8)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  <span className="relative z-10 text-center">اطلب الآن – <span className="text-lg lg:text-xl">449</span> درهم</span>
                </Link>
                <a
                  href="#products"
                  className="w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-md border border-white/20 text-foreground rounded-full text-lg font-bold hover:bg-white/20 transition-all duration-300 flex items-center justify-center shadow-lg"
                >
                  اكتشف المنتجات
                </a>
              </div>

              {/* Feature Pills */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-sm font-bold text-foreground/90 font-cairo">
                {['خالي من السلفات', 'خالي من السيليكون', 'نتائج من أول استعمال'].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-background/30 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl shadow-sm hover:bg-background/50 transition-colors cursor-default">
                    <svg className="w-4 h-4 text-golden" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Image Content - Left side for RTL */}
            <div className="lg:col-span-5 relative flex justify-center items-center mt-12 lg:mt-0 animate-fade-in w-full">
              {/* Soft Glowing Backdrops */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-gradient-to-tr from-primary/20 via-golden/10 to-transparent blur-3xl rounded-full pointer-events-none" />

              {/* Price Badge */}
              <div className="absolute -top-2 -left-2 lg:top-8 lg:-left-4 z-30 bg-background/90 backdrop-blur-xl border-2 border-primary/20 shadow-2xl w-20 h-20 lg:w-24 lg:h-24 rounded-full flex flex-col items-center justify-center text-foreground transform -rotate-12 hover:rotate-0 transition-all duration-500 hover:scale-105 cursor-default group">
                <span className="text-2xl lg:text-3xl font-black text-primary leading-none mt-1 group-hover:scale-110 transition-transform">449</span>
                <span className="text-xs lg:text-sm font-bold text-foreground/80">درهم</span>
              </div>

              {/* Product Image */}
              <div className="relative z-20 animate-float w-full flex justify-center">
                <img src={heroBundle}
                  alt="باك أوابوهي من Maui Moisture"
                  className="w-full sm:w-[75%] lg:w-[110%] lg:max-w-[600px] object-contain rounded-[2.5rem] drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] lg:-ml-12 group-hover:scale-[1.02] transition-transform duration-700" fetchPriority="high" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className={`fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/90 backdrop-blur-xl border-t border-border/50 p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.15)] transition-transform duration-300 ${showStickyCta ? 'translate-y-0' : 'translate-y-full'}`}>
        <Link
          to="/checkout"
          className="block w-full py-3.5 bg-primary text-primary-foreground rounded-full text-center text-lg font-bold shadow-lg"
        >
          اطلب الآن – 449 درهم
        </Link>
      </div>
    </>
  );
};

export default HeroSection;
