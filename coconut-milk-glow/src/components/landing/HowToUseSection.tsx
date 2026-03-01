import step1 from "@/assets/step1.png";
import step2 from "@/assets/step2.png";
import step3 from "@/assets/step3.png";

const steps = [
  {
    step: 1,
    title: "الشامبو",
    instruction: "يُستخدم الشامبو على شعر مبلل مع تدليك فروة الرأس بلطف ثم يُشطف جيداً",
    image: step1,
    tip: "دلّكي فروة الرأس بحركات دائرية لمدة 2-3 دقائق",
  },
  {
    step: 2,
    title: "الماسك",
    instruction: "يُوضع الماسك على الشعر الرطب من الجذور حتى الأطراف ويُترك 5–10 دقائق ثم يُشطف",
    image: step2,
    tip: "للنتائج الأفضل، استخدمي الماسك 2-3 مرات أسبوعياً",
  },
  {
    step: 3,
    title: "بخاخ الزيت",
    instruction: "يُرش بخاخ الزيت الخفيف على الشعر الرطب أو الجاف للترطيب واللمعان دون شطف",
    image: step3,
    tip: "رشّيه على بعد 15-20 سم من الشعر للتوزيع المتساوي",
  },
];

const HowToUseSection = () => {
  return (
    <section id="how-to-use" className="py-16 sm:py-24 bg-background overflow-hidden relative">
      {/* Decorative subtle background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-20 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            طريقة الاستعمال
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            ثلاث خطوات بسيطة لشعر مرطب ولامع، مستوحاة من طقوس الجمال المغربية
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16 sm:space-y-24 md:space-y-32">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col gap-6 sm:gap-10 lg:gap-16 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2 relative group px-2 sm:px-0">
                <div className="absolute inset-0 bg-primary/10 rounded-[2rem] sm:rounded-[2.5rem] translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500" />
                <div className="relative rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-warm border border-white/10 bg-white">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-[300px] sm:h-[400px] md:h-[550px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Step Number Overlay */}
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20">
                    <span className="bg-white/95 backdrop-blur-sm text-primary font-bold text-xl sm:text-2xl w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg border border-white">
                      {step.step}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 px-2 sm:px-8">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full mb-1 sm:mb-2 border border-primary/20">
                  <span className="text-primary font-bold tracking-wide text-sm sm:text-base">الخطوة {step.step}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                  {step.title}
                </h3>

                <p className="text-muted-foreground text-base sm:text-xl leading-relaxed">
                  {step.instruction}
                </p>

                <div className="bg-card/40 backdrop-blur-sm border border-border/60 rounded-xl sm:rounded-2xl p-4 sm:p-6 mt-6 sm:mt-10 shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-foreground font-medium flex items-start gap-3 sm:gap-4">
                    <span className="text-xl sm:text-2xl mt-0.5 sm:mt-1 text-primary animate-pulse">✨</span>
                    <span className="leading-snug">
                      <span className="block text-xs sm:text-sm text-primary/80 font-bold mb-1 uppercase tracking-wider">نصيحة خبراء الجمال</span>
                      <span className="text-muted-foreground text-sm sm:text-base">{step.tip}</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;
