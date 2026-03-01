import { Link } from "react-router-dom";
import heroBundle from "@/assets/hero-bundle.png";
import heroBg from "@/assets/hero11.png";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-[100vh] gradient-hero flex items-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px] -translate-x-1/2 -translate-y-1/2 animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] translate-x-1/3 translate-y-1/3 animate-pulse-slow font-cairo" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-right animate-slide-in-right px-4 lg:px-0">

            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-transparent pr-4 pl-6 py-2 rounded-full border border-primary/20 shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
              <span className="text-primary text-sm font-bold tracking-wide uppercase">
                Maui Moisture
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.3] text-foreground tracking-tight mb-6">
              باك معادن البحر
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary via-primary to-accent relative inline-block mt-4 font-black pb-2">
                لحماية اللون وترطيب
              </span>
              <br className="hidden sm:block" />
              <span className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black block font-black">فائق للشعر المصبوغ</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium mb-6">
              روتين متكامل بمعادن البحر الغنية، الطحالب البحرية، وأعشاب البحر لحماية لون شعرك ومنحه لمعاناً وصحة من أول استعمال
            </p>

            {/* Guarantee / Features Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 py-2">
              {[
                { text: "خالي من السلفات", icon: "✨" },
                { text: "خالي من السيليكون", icon: "🛡️" },
                { text: "نتائج من أول استعمال", icon: "⏳" },
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-2 bg-background/80 backdrop-blur-md px-4 py-2 rounded-2xl border border-primary/10 shadow-sm text-foreground/80 font-semibold text-sm hover:border-primary/30 transition-colors">
                  <span className="text-base">{item.icon}</span>
                  {item.text}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pb-12 mb-10">
              <Link
                to="/checkout"
                className="group relative gradient-cta text-primary-foreground px-8 py-4 rounded-full text-lg lg:text-xl font-bold shadow-warm-lg hover:shadow-warm-xl transition-all duration-300 hover:-translate-y-1 text-center overflow-hidden flex items-center justify-center gap-3"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 flex items-center gap-2">
                  اطلبي الآن – 449 درهم فقط
                  <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </span>
              </Link>
              <a
                href="#products"
                className="border-2 border-primary/20 bg-background/50 backdrop-blur-sm text-foreground px-8 py-4 rounded-full text-lg font-bold hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 text-center flex items-center justify-center"
              >
                اكتشف المنتجات
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in pt-8 lg:pt-0" style={{ animationDelay: "0.2s" }}>
            <div className="relative group">
              {/* Image Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/20 blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-700 rounded-full" />

              <img
                src={heroBundle}
                alt="باك معادن البحر من Maui Moisture"
                className="w-[90%] lg:w-full max-w-[500px] mx-auto relative z-10 rounded-[2.5rem] shadow-2xl group-hover:scale-[1.02] transition-transform duration-700 mt-8 lg:mt-0"
              />

              {/* Floating Price Badge */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 md:bottom-8 md:-left-12 bg-accent text-accent-foreground rounded-full w-32 h-32 sm:w-36 sm:h-36 flex flex-col items-center justify-center shadow-warm-xl animate-float border-4 border-background z-20">
                <span className="text-xs sm:text-sm font-bold opacity-80 mb-1">تدفعين فقط</span>
                <span className="text-3xl sm:text-4xl font-black leading-none mb-1">449</span>
                <span className="text-sm font-bold">درهم</span>
                <div className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground text-[10px] font-bold px-2 py-1 rounded-full shadow-sm animate-pulse rotate-12 border-2 border-background">
                  -15%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
