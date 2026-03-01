import { useState } from "react";

const faqs = [
  {
    question: "هل المنتجات مناسبة لجميع أنواع الشعر؟",
    answer: "هذا الباك مصمم خصيصاً للشعر الباهت والمجهد. يعمل على توفير لمعان مذهل ونعومة فائقة بفضل زنجبيل الأوابوهي وزهرة التياري.",
  },
  {
    question: "كم مرة يجب استخدام الماسك أسبوعياً؟",
    answer: "ننصح باستخدام الماسك 2-3 مرات أسبوعياً. بفضل تركيبته الخفيفة، فهو يمنحك تألقاً فورياً دون إثقال الشعر.",
  },
  {
    question: "هل المنتجات خالية من المواد الضارة؟",
    answer: "نعم، جميع منتجات Maui Moisture خالية من المنظفات الكبريتية (Sulfated Surfactants) والسيليكون والبارابين. تركيبة نباتية وآمنة تماماً.",
  },
  {
    question: "متى سألاحظ النتائج؟",
    answer: "ستلاحظين فرقاً واضحاً في نعومة ولمعان شعرك من أول استعمال. النتائج تتحسن بشكل ملحوظ مع الاستخدام المنتظم خلال 2-4 أسابيع.",
  },
  {
    question: "هل يمكن استخدام البخاخ على الشعر الجاف؟",
    answer: "نعم! يمكن استخدام بخاخ الزيت الخفيف على الشعر الرطب أو الجاف. مثالي للمسات سريعة من الترطيب واللمعان خلال اليوم.",
  },
  {
    question: "كم تستغرق مدة التوصيل؟",
    answer: "التوصيل يتم خلال 24-72 ساعة حسب مدينتك. الدفع عند الاستلام متاح لجميع المدن.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            أسئلة شائعة
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            كل ما تحتاجين معرفته عن الباك
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border/50 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-right"
              >
                <span className="font-bold text-foreground text-lg">{faq.question}</span>
                <div className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}>
                  <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
