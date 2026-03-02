import { Link } from "react-router-dom";
import heroBundle from "@/assets/synergy1.webp";

const OfferSection = () => {
  return (
    <section id="offer" className="py-20 bg-coconut">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto bg-background rounded-3xl shadow-warm-lg overflow-hidden border border-border/50">
          <div className="grid md:grid-cols-2">
            <div className="p-6">
              <img src={heroBundle}
                alt="باك جوز الهند"
                className="w-full rounded-2xl aspect-[5/4] object-cover md:aspect-auto" loading="lazy" decoding="async" />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <span className="inline-block w-fit bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-bold mb-4">
                🔥 عرض خاص لفترة محدودة
              </span>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                باك جوز الهند المتكامل
              </h2>
              <p className="text-muted-foreground mb-6">
                شامبو + ماسك + بخاخ زيت خفيف – كل ما تحتاجينه لشعر صحي ولامع
              </p>

              <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-6">
                <span className="text-3xl sm:text-4xl font-black text-gradient-gold">449 درهم</span>
                <span className="text-lg sm:text-xl text-muted-foreground line-through">520 درهم</span>
                <span className="bg-secondary text-secondary-foreground px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-bold">
                  وفّري 71 درهم
                </span>
              </div>

              <ul className="space-y-3 mb-8 text-foreground">
                {[
                  "شامبو Coconut Milk – تنظيف وترطيب",
                  "ماسك Coconut Milk – تغذية مكثفة",
                  "بخاخ Oil Mist – لمعان وحماية",
                  "توصيل سريع لجميع المدن",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
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
