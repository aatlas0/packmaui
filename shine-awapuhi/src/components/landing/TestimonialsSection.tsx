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
    text: "جربت بزاف د الحوايج قبل ما نلقى هاد الباك. الفرق كبير من أول غسلة. ريحة الأوابوهي والزهور واعرة بزااااف والشعر كيبقى كيبري نهار كامل.",
    rating: 4.5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="reviews" className="py-24 bg-background relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 lg:mb-20 animate-fade-up">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">
            تجارب حقيقية
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-cairo">
            آراء عميلاتنا
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-golden mx-auto rounded-full mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-cairo">
            تجارب حقيقية من نساء جربن الباك وشاهدن الفرق
          </p>
        </div>

        <div className="columns-1 md:columns-2 gap-8 max-w-5xl mx-auto space-y-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="break-inside-avoid bg-card rounded-[2rem] p-8 shadow-sm border border-border/50 hover:shadow-warm-xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex gap-1.5 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div key={star} className="relative transition-transform duration-300 group-hover:scale-110" style={{ transitionDelay: `${star * 50}ms` }}>
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-muted/20" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <div
                        className="absolute inset-0 overflow-hidden text-[#FFD700]"
                        style={{
                          width: `${Math.max(0, Math.min(100, (testimonial.rating - (star - 1)) * 100))}%`
                        }}
                      >
                        <svg className="w-5 h-5 md:w-6 md:h-6 drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-foreground/90 leading-relaxed mb-8 text-lg md:text-xl font-cairo">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-primary-foreground shadow-inner group-hover:scale-110 transition-transform duration-500 p-2.5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full opacity-90">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-foreground font-cairo">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {testimonial.location}
                    </p>
                  </div>
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
