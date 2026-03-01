import { User } from 'lucide-react';

const testimonials = [
  {
    name: "سارة م.",
    location: "الدار البيضاء",
    text: "من أول استعمال لاحظت الفرق! شعري أصبح ناعم ولامع بشكل مذهل. أنصح كل من تعاني من الجفاف بتجربة هذا الباك.",
    rating: 5,
  },
  {
    name: "نورة أ.",
    location: "الرباط",
    text: "كنت أعاني من هيشان رهيب خاصة في الصيف. بعد أسبوعين من الاستعمال المنتظم، شعري تغيّر تماماً. المنتجات رائعة!",
    rating: 5,
  },
  {
    name: "فاطمة ز.",
    location: "مراكش",
    text: "الماسك لوحده يستاهل! لكن مع الشامبو والبخاخ النتيجة مضاعفة. شعري أصبح سهل التصفيف وما عاد يتقصف.",
    rating: 5,
  },
  {
    name: "أمينة ك.",
    location: "طنجة",
    text: "جربت منتجات كثيرة قبل ما ألقى هذا الباك. الفرق واضح من أول غسلة. ريحة جوز الهند رائعة والشعر ناعم طول اليوم.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            آراء عميلاتنا
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            تجارب حقيقية من نساء جربن الباك وشاهدن الفرق
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-7 shadow-warm border border-border/50"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-golden text-lg">⭐</span>
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-5 text-lg">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 gradient-cta rounded-full flex items-center justify-center text-primary-foreground">
                  <User size={20} />
                </div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
