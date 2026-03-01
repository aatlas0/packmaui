import { Link } from "react-router-dom";

const FinalCTASection = () => {
  return (
    <section id="order" className="py-20 gradient-cta">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          لا تضيّعي الفرصة – العرض لفترة محدودة!
        </h2>
        <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
          احصلي على باك جوز الهند المتكامل بسعر خاص واستمتعي بشعر صحي ولامع
        </p>

        <div className="inline-flex flex-col items-center gap-4">
          <div className="flex items-center gap-4 text-primary-foreground">
            <span className="text-5xl font-black">449 درهم</span>
            <span className="text-2xl line-through opacity-60">520 درهم</span>
          </div>

          <Link
            to="/checkout"
            className="bg-background text-foreground px-10 py-5 rounded-full text-xl font-bold shadow-warm-lg hover:shadow-warm transition-all duration-300 hover:-translate-y-1"
          >
            🛒 اطلبي الآن
          </Link>

          <p className="text-primary-foreground/70 text-sm mt-2">
            الدفع عند الاستلام ✅ توصيل سريع لجميع المدن 🚚
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
