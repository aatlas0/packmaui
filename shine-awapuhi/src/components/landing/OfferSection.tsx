import { Link } from "react-router-dom";
import heroBundle from "@/assets/synergy2.webp";

const OfferSection = () => {
  return (
    <section id="offer" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 rounded-[100%] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-golden/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto bg-card rounded-[2.5rem] shadow-warm-xl overflow-hidden border border-border/50 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />

          <div className="grid lg:grid-cols-2 relative z-10">
            {/* Image Side */}
            <div className="p-8 lg:p-12 flex flex-col justify-center relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="relative">
                {/* Glowing effect behind image */}
                <div className="absolute inset-4 bg-primary/20 blur-[60px] rounded-full mix-blend-multiply transition-all duration-700 group-hover:bg-primary/30 group-hover:blur-[80px]"></div>
                <img src={heroBundle}
                  alt="باك أوابوهي للمعان"
                  className="w-full h-auto object-cover rounded-[2.5rem] relative z-10 animate-float drop-shadow-2xl transition-transform duration-700 group-hover:scale-105 aspect-[5/4] lg:aspect-auto lg:object-contain" loading="lazy" decoding="async" />
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 lg:p-12 flex flex-col justify-center bg-background/50 backdrop-blur-sm border-r border-border/50">
              <div className="mb-8">
                <span className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-1.5 rounded-full text-sm font-bold mb-6 animate-pulse-slow border border-destructive/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive"></span>
                  </span>
                  عرض خاص لفترة محدودة
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-cairo leading-tight">
                  باك أوابوهي المتكامل
                  <span className="block text-primary">للمعان والنعومة</span>
                </h2>
                <p className="text-lg text-muted-foreground font-cairo">
                  شامبو + ماسك + بخاخ زيت خفيف – كل ما تحتاجينه لشعر صحي ولامع
                </p>
              </div>

              <div className="flex flex-wrap items-end gap-4 mb-8 bg-primary/5 p-6 rounded-3xl border border-primary/10">
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">السعر الحالي</span>
                  <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-golden">449 <span className="text-2xl">درهم</span></span>
                </div>
                <div className="flex flex-col pb-1">
                  <span className="text-xl text-muted-foreground line-through decoration-destructive/50 decoration-2">520 درهم</span>
                </div>
                <span className="mr-auto bg-green-500/10 text-green-600 px-4 py-2 rounded-2xl text-sm font-bold border border-green-500/20 shadow-sm flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  وفري 71 درهم
                </span>
              </div>

              <ul className="space-y-4 mb-10 text-foreground font-medium">
                {[
                  "شامبو Shine Awapuhi – لمعان ونعومة",
                  "ماسك Shine Awapuhi – وهج صحي",
                  "بخاخ Shine Awapuhi – لمعان الحرير",
                  "توصيل سريع لجميع المدن",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 group">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="group-hover:text-primary transition-colors duration-300 font-cairo">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/checkout"
                className="group relative w-full overflow-hidden rounded-full p-[2px] transition-all hover:shadow-[0_0_40px_rgba(var(--primary),0.3)] mb-6 block"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-golden to-primary opacity-70 group-hover:opacity-100 animate-gradient-bg"></div>
                <div className="relative bg-background/10 backdrop-blur-sm w-full h-full rounded-full flex flex-col items-center justify-center py-4 px-8 border border-white/20">
                  <span className="text-white font-bold text-xl md:text-2xl font-cairo block group-hover:scale-105 transition-transform duration-300">
                    اطلبي الآن – 449 درهم فقط
                  </span>
                </div>
              </Link>

              {/* Trust Indicators for Moroccan Market */}
              <div className="flex justify-center items-center gap-6 text-center">
                <div className="flex flex-col items-center group">
                  <div className="w-12 h-12 bg-muted/30 rounded-full flex items-center justify-center mb-2 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                    <span className="text-2xl filter drop-shadow-sm">💵</span>
                  </div>
                  <span className="text-xs font-bold text-muted-foreground group-hover:text-foreground transition-colors font-cairo">الدفع عند<br />الاستلام</span>
                </div>
                <div className="w-px h-12 bg-border"></div>
                <div className="flex flex-col items-center group">
                  <div className="w-12 h-12 bg-muted/30 rounded-full flex items-center justify-center mb-2 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                    <span className="text-2xl filter drop-shadow-sm">🚚</span>
                  </div>
                  <span className="text-xs font-bold text-muted-foreground group-hover:text-foreground transition-colors font-cairo">توصيل<br />مجاني</span>
                </div>
                <div className="w-px h-12 bg-border"></div>
                <div className="flex flex-col items-center group">
                  <div className="w-12 h-12 bg-muted/30 rounded-full flex items-center justify-center mb-2 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                    <span className="text-2xl filter drop-shadow-sm">🛡️</span>
                  </div>
                  <span className="text-xs font-bold text-muted-foreground group-hover:text-foreground transition-colors font-cairo">رضا<br />مضمون</span>
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
