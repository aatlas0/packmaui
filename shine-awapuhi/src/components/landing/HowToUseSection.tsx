import step1 from '@/assets/step1.png';
import step2 from '@/assets/step2.png';
import step3 from '@/assets/step3.png';

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
    <section id="how-to-use" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-golden/5 rounded-full blur-3xl translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-up">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">
            طريقة الاستخدام المثلى
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-cairo">
            لنتائج مبهرة في 3 خطوات
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-golden mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-cairo">
            ثلاث خطوات بسيطة لشعر مرطب ولامع
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col gap-16 lg:gap-24">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center group`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative">
                <div className="absolute inset-0 bg-primary/5 rounded-[2.5rem] transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
                <div className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-warm-xl aspect-square sm:aspect-video lg:aspect-square">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={step.image}
                    alt={`الخطوة ${step.step}: ${step.title}`}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Floating Number Badge */}
                  <div className="absolute top-6 left-6 z-20 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                    <span className="text-3xl font-black text-primary">{step.step}</span>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-6 lg:px-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                  </span>
                  الخطوة {step.step}
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-foreground font-cairo">
                  {step.title}
                </h3>

                <p className="text-xl text-muted-foreground leading-relaxed font-cairo">
                  {step.instruction}
                </p>

                <div className="bg-golden/10 border border-golden/20 rounded-2xl p-6 relative overflow-hidden group-hover:bg-golden/15 transition-colors duration-300">
                  <div className="absolute right-0 top-0 w-2 h-full bg-golden" />
                  <div className="flex gap-4 items-start">
                    <div className="text-2xl mt-1">💡</div>
                    <div>
                      <h4 className="font-bold text-golden-dark mb-1 text-sm uppercase">نصيحة الخبراء</h4>
                      <p className="text-foreground/80 font-medium">
                        {step.tip}
                      </p>
                    </div>
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

export default HowToUseSection;
