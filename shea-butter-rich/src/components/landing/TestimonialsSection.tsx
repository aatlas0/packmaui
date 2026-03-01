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
    text: "جربت بزاف د الحوايج قبل ما نلقى هاد الباك. الفرق كبير من أول غسلة. ريحة زبدة الشيا زوينة بزاف والشعر كيبقى رطب نهار كامل.",
    rating: 4.5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background overflow-hidden relative">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">تجارب حقيقية</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            آراء عميلاتنا
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            انضمي إلى آلاف النساء اللواتي استعدن صحة وجمال شعرهن
          </p>
        </div>

        <div className="columns-1 md:columns-2 gap-6 lg:gap-8 max-w-5xl mx-auto space-y-6 lg:space-y-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="break-inside-avoid bg-card/80 backdrop-blur-sm rounded-3xl p-8 sm:p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-border/50 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] hover:border-primary/20 transition-all duration-500 hover:-translate-y-1 relative group"
            >
              {/* Quote Mark Decoration */}
              <div className="absolute top-6 left-6 text-6xl text-primary/10 font-serif leading-none select-none group-hover:text-primary/20 transition-colors duration-500">
                "
              </div>

              <div className="flex gap-1.5 mb-6 relative z-10">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div key={star} className="relative">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-muted/20" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <div
                      className="absolute inset-0 overflow-hidden text-golden drop-shadow-sm"
                      style={{
                        width: `${Math.max(0, Math.min(100, (testimonial.rating - (star - 1)) * 100))}%`
                      }}
                    >
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-foreground text-lg sm:text-xl leading-relaxed mb-8 relative z-10 font-medium">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4 relative z-10 border-t border-border/50 pt-6 mt-auto">
                <div className="w-12 h-12 gradient-cta rounded-full flex items-center justify-center text-primary-foreground shadow-inner group-hover:scale-110 transition-transform duration-500 p-2.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full opacity-90">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg">{testimonial.name}</p>
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
