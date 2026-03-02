const testimonials = [
  {
    name: "سارة م.",
    location: "الدار البيضاء",
    text: "من أول استعمال بان ليا الفرق! شعري ولا رطب وكيبري كيحمق. كننصح أي وحدة شعرها ناشف تجرب هاد الباك.",
    rating: 4.5,
  },
  {
    name: "نورة أ.",
    location: "الرباط",
    text: "كنت كنعاني من واحد الهيجان خايب بزاف، خصوصاً فاش كيسخن الحال. من بعد جوج سيمانات ديال الاستعمال، شعري تبدل بشكل كبير. هاد المنتجات واعرة!",
    rating: 5,
  },
  {
    name: "فاطمة ز.",
    location: "مراكش",
    text: "الماسك بوحدو راه طوب! ولكن مع الشامبو والسبراي النتيجة كتكون خيال. شعري ولا ساهل فالمشيط وما بقاش كيتقصف.",
    rating: 4,
  },
  {
    name: "أمينة ك.",
    location: "طنجة",
    text: "جربت بزاف د الحوايج قبل ما نلقى هاد الباك. الفرق كبير من أول غسلة. ريحة معادن البحر زوينة بزاف والشعر كيبقى رطب نهار كامل.",
    rating: 4.5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Abstract Backgrounds */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4 border border-primary/20">
            <span className="text-primary font-bold text-sm tracking-wide">قصص نجاح</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 md:mb-6">
            آراء <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary to-accent">عميلاتنا</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            تجارب حقيقية من نساء جربن الباك وشاهدن الفرق
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-card rounded-3xl p-8 shadow-sm hover:shadow-warm-lg transition-all duration-500 border border-border/50 hover:border-primary/30 relative group ${index % 2 === 1 ? 'sm:translate-y-8' : ''
                }`}
            >
              <div className="absolute top-8 right-8 text-primary/10 group-hover:text-primary/20 transition-colors duration-500">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <div className="flex gap-1 mb-6 relative z-10">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div key={star} className="relative">
                    <svg className="w-6 h-6 text-muted/30" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <div
                      className="absolute inset-0 overflow-hidden text-[#FFB800]"
                      style={{
                        width: `${Math.max(0, Math.min(100, (testimonial.rating - (star - 1)) * 100))}%`
                      }}
                    >
                      <svg className="w-6 h-6 drop-shadow-sm" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-foreground/90 font-medium leading-relaxed mb-8 text-lg md:text-xl relative z-10">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4 border-t border-border/50 pt-6 relative z-10">
                <div className="w-12 h-12 gradient-cta rounded-full flex items-center justify-center text-primary-foreground shadow-inner group-hover:scale-110 transition-transform duration-500 p-2.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full opacity-90">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg">{testimonial.name}</p>
                  <p className="text-sm text-primary font-medium">{testimonial.location}</p>
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
