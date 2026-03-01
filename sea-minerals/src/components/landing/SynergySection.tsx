import synergy1 from "@/assets/synergy1.png";
import synergy2 from "@/assets/synergy2.png";

const benefits = [
  {
    title: "تنظيف لطيف",
    description: "الشامبو ينظف بلطف دون تجريد الشعر من زيوته الطبيعية، ويهيئ الشعر لامتصاص الترطيب",
  },
  {
    title: "علاج مكثف",
    description: "الماسك يخترق ألياف الشعر ليغذي ويرطب بعمق ويصلح التلف والتقصف من الداخل",
  },
  {
    title: "حماية ولمعان",
    description: "بخاخ الزيت الخفيف يغلق الرطوبة ويحمي الشعر طوال اليوم مع لمعان طبيعي",
  }
];

const SynergySection = () => {
  return (
    <section className="py-24 bg-background overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-70" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Images Side (Left) */}
          <div className="w-full lg:w-1/2 relative aspect-square lg:aspect-auto border-transparent h-[400px] lg:h-[500px]">
            <div className="absolute top-0 right-0 w-[65%] h-[75%] rounded-[2rem] overflow-hidden shadow-warm-xl z-20 transform hover:-translate-y-2 transition-transform duration-500 border-4 border-white">
              <img src={synergy1} alt="Synergy 1" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            </div>

            <div className="absolute bottom-0 left-0 w-[60%] h-[65%] rounded-[2rem] overflow-hidden shadow-2xl z-30 transform -translate-y-8 translate-x-8 hover:-translate-y-10 transition-transform duration-500 border-4 border-white">
              <img src={synergy2} alt="Synergy 2" className="w-full h-full object-cover" />
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />

            {/* Decorative Dot pattern or badge */}
            <div className="absolute top-1/2 left-4 z-40 bg-background p-4 rounded-2xl shadow-xl transform -translate-y-1/2 -rotate-6 animate-float border border-primary/20">
              <div className="text-center">
                <span className="block text-3xl font-black text-primary">3x</span>
                <span className="text-xs font-bold text-foreground">تأثير مضاعف</span>
              </div>
            </div>
          </div>

          {/* Text Content Side (Right) */}
          <div className="w-full lg:w-1/2 space-y-10 mt-16 lg:mt-0">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4 border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-primary font-bold text-sm tracking-wide">السر في التكامل</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-10 leading-[1.3]">
                <span className="inline-block pb-2">لماذا يعمل هذا الباك</span>
                <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-l from-primary to-accent font-black pb-3">بشكل أفضل معاً؟</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                كل منتج يكمّل الآخر ليمنحك نتائج مضاعفة لا يمكن لمنتج واحد تحقيقها
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group flex gap-6 bg-card hover:bg-white p-6 rounded-2xl shadow-sm hover:shadow-warm transition-all duration-300 border border-border/50 hover:border-primary/20"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black text-xl group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <div className="inline-flex items-center gap-4 bg-gradient-to-r from-primary/10 to-transparent p-4 rounded-2xl border-r-4 border-primary">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 animate-pulse-slow">
                  <span className="text-xl">✨</span>
                </div>
                <p className="font-bold text-foreground">
                  <span className="block text-sm text-primary mb-1">النتيجة النهائية</span>
                  لون محمي، ترطيب غني، ولمعان فائق بتركيبة معادن البحر
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SynergySection;
