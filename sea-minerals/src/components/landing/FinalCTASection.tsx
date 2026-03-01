import { Link } from "react-router-dom";

const FinalCTASection = () => {
  return (
    <section id="order" className="py-20 gradient-cta">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          لا تضيّعي الفرصة – العرض لفترة محدودة!
        </h2>
        <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
          احصلي على باك معادن البحر المتكامل بسعر خاص واستمتعي بشعر صحي ولامع وحماية فائقة للون
        </p>

        <div className="inline-flex flex-col items-center gap-4">
          <div className="flex items-center gap-4 text-primary-foreground">
            <span className="text-5xl font-black">449 درهم</span>
            <span className="text-2xl line-through opacity-60">520 درهم</span>
          </div>

          <Link
            to="/checkout"
            className="group bg-background text-foreground px-10 py-5 rounded-full text-xl font-bold shadow-warm-lg hover:shadow-warm transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center justify-center gap-3">
              <svg className="w-8 h-8 group-hover:scale-110 transition-transform duration-500" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="54" r="4" fill="hsl(var(--primary))" />
                <circle cx="48" cy="54" r="4" fill="hsl(var(--primary))" />
                <path d="M4 8H12L16 42H52L58 14H16" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M24 24H44M34 16V32" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
              </svg>
              <span>اطلبي الآن</span>
            </div>
          </Link>

          <div className="text-primary-foreground/70 text-sm mt-6 flex flex-wrap items-center justify-center gap-8">
            <span className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 32L26 46L52 18" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              الدفع عند الاستلام
            </span>
            <span className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="12" y="24" width="32" height="20" rx="2" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="2" />
                  <path d="M44 28H52L56 36V44H44" fill="white" fillOpacity="0.4" stroke="white" strokeWidth="2" />
                  <circle cx="20" cy="46" r="3" fill="white" />
                  <circle cx="48" cy="46" r="3" fill="white" />
                </svg>
              </div>
              توصيل سريع لجميع المدن
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
