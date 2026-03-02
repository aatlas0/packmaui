import { Link } from "react-router-dom";
import heroBundle from "@/assets/synergy2.webp";

const OfferSection = () => {
  return (
    <section id="offer" className="py-20 bg-coconut">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-background rounded-3xl shadow-warm-lg overflow-hidden border border-border/50">
          <div className="grid md:grid-cols-2">
            <div className="p-6 relative">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
              <img src={heroBundle}
                alt="باك معادن البحر"
                className="w-full rounded-2xl relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-500 aspect-[5/4] object-cover md:aspect-auto" loading="lazy" decoding="async" />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <span className="inline-block w-fit bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-bold mb-4">
                🔥 عرض خاص لفترة محدودة
              </span>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                باك معادن البحر المتكامل
              </h2>
              <p className="text-muted-foreground mb-6">
                شامبو + ماسك + بخاخ زيت خفيف – كل ما تحتاجينه لشعر صحي ولامع
              </p>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-black text-gradient-gold">449 درهم</span>
                <span className="text-xl text-muted-foreground line-through">520 درهم</span>
                <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-bold">
                  وفّري 71 درهم
                </span>
              </div>

              <ul className="space-y-3 mb-8 text-foreground">
                {[
                  "شامبو Sea Minerals – حماية اللون",
                  "ماسك Sea Minerals – حماية مكثفة",
                  "بخاخ Sea Minerals – لمعان وحماية",
                  "توصيل سريع لجميع المدن",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary/10 shadow-inner">
                      <svg className="w-3.5 h-3.5 text-secondary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                to="/checkout"
                className="gradient-cta text-primary-foreground text-center px-8 py-4 rounded-full text-lg font-bold shadow-warm-lg hover:shadow-warm transition-all duration-300 hover:-translate-y-0.5 block mb-4"
              >
                اطلبي الآن – 449 درهم فقط
              </Link>

              {/* Trust Indicators for Moroccan Market */}
              <div className="flex justify-center items-center gap-4 text-center mt-2 px-2">
                <div className="flex flex-col items-center">
                  <span className="text-2xl mb-1">💵</span>
                  <span className="text-[10px] md:text-xs font-bold text-muted-foreground leading-tight">الدفع عند<br />الاستلام</span>
                </div>
                <div className="w-px h-8 bg-border"></div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl mb-1">🚚</span>
                  <span className="text-[10px] md:text-xs font-bold text-muted-foreground leading-tight">توصيل<br />مجاني</span>
                </div>
                <div className="w-px h-8 bg-border"></div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl mb-1">🛡️</span>
                  <span className="text-[10px] md:text-xs font-bold text-muted-foreground leading-tight">رضا<br />مضمون</span>
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
