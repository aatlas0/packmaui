import { Link } from "react-router-dom";
import heroBundle from "@/assets/synergy1.png";

const OfferSection = () => {
  return (
    <section id="offer" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto bg-card/60 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden border border-border/50 relative">

          {/* subtle inside glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

          <div className="grid md:grid-cols-2 lg:gap-8 items-center">

            {/* Image Side */}
            <div className="p-8 md:p-12 relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <img
                src={heroBundle}
                alt="باك زبدة الشيا"
                className="w-full relative z-10 hover:scale-105 transition-transform duration-700 drop-shadow-2xl rounded-[2.5rem]"
              />
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-12 lg:pr-0 flex flex-col justify-center relative z-10">
              <span className="inline-flex items-center gap-2 w-fit bg-accent/10 text-accent px-5 py-2 rounded-full text-sm font-bold mb-6 border border-accent/20">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                عرض خاص لفترة محدودة
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                باك زبدة الشيا المتكامل
              </h2>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                شامبو + ماسك + بخاخ زيت خفيف – كل ما تحتاجينه لشعر صحي ولامع
              </p>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-10 bg-background/50 p-4 sm:p-6 rounded-2xl border border-white/10 shadow-inner inline-flex">
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground font-medium mb-1 line-through">520 درهم</span>
                  <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    449 <span className="text-2xl sm:text-3xl font-bold">درهم</span>
                  </span>
                </div>
                <div className="h-12 w-px bg-border/50 hidden sm:block mx-2" />
                <span className="bg-golden/10 text-golden px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-sm sm:text-base font-bold border border-golden/20 shadow-sm animate-pulse">
                  وفّري 71 درهم!
                </span>
              </div>

              <ul className="space-y-4 mb-10 text-foreground/90 font-medium">
                {[
                  "شامبو Shea Butter – ترطيب وإصلاح",
                  "ماسك Shea Butter – تغذية مكثفة",
                  "بخاخ Shea Butter – لمعان وحماية",
                  "توصيل سريع لجميع المدن",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 group">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 shadow-sm group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/checkout"
                className="gradient-cta text-primary-foreground text-center px-8 py-5 rounded-full text-xl font-bold shadow-[0_10px_40px_-10px_rgba(var(--primary),0.5)] hover:shadow-[0_20px_60px_-15px_rgba(var(--primary),0.6)] transition-all duration-300 hover:-translate-y-1 block mb-8 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10">اطلبي الآن – 449 درهم فقط</span>
              </Link>

              {/* Trust Indicators for Moroccan Market */}
              <div className="flex justify-center sm:justify-center items-center gap-6 sm:gap-8 text-center mt-2 px-2 opacity-80">
                <div className="flex flex-col items-center group cursor-default">
                  <span className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">💵</span>
                  <span className="text-xs sm:text-sm font-bold text-muted-foreground leading-tight">الدفع عند<br />الاستلام</span>
                </div>
                <div className="w-px h-10 bg-border/60"></div>
                <div className="flex flex-col items-center group cursor-default">
                  <span className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">🚚</span>
                  <span className="text-xs sm:text-sm font-bold text-muted-foreground leading-tight">توصيل<br />مجاني</span>
                </div>
                <div className="w-px h-10 bg-border/60"></div>
                <div className="flex flex-col items-center group cursor-default">
                  <span className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">🛡️</span>
                  <span className="text-xs sm:text-sm font-bold text-muted-foreground leading-tight">رضا<br />مضمون</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
