import synergy1 from "@/assets/synergy1.png";
import synergy2 from "@/assets/synergy2.png";

const SynergySection = () => {
  return (
    <section className="py-20 bg-coconut relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            لماذا يعمل هذا الباك بشكل أفضل معاً؟
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            كل منتج يكمّل الآخر ليمنحك نتائج مضاعفة لا يمكن لمنتج واحد تحقيقها
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Images Column */}
          <div className="flex-1 w-full relative aspect-square lg:aspect-auto border-transparent h-[400px] lg:h-[500px] mt-2 sm:mt-4 lg:mt-0">
            <div className="absolute top-0 right-0 w-[65%] h-[75%] rounded-[2rem] overflow-hidden shadow-warm-xl z-20 transform hover:-translate-y-2 transition-transform duration-500 border-4 border-white">
              <img src={synergy1} alt="Synergy Product 1" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            </div>

            <div className="absolute bottom-0 left-0 w-[60%] h-[65%] rounded-[2rem] overflow-hidden shadow-2xl z-30 transform -translate-y-8 translate-x-8 hover:-translate-y-10 transition-transform duration-500 border-4 border-white">
              <img src={synergy2} alt="Synergy Product 2" className="w-full h-full object-cover" />
            </div>

            {/* Decorative Dot pattern or badge */}
            <div className="absolute top-1/2 left-4 z-40 bg-background p-4 rounded-2xl shadow-xl transform -translate-y-1/2 -rotate-6 animate-float border border-primary/20">
              <div className="text-center">
                <span className="block text-3xl font-black text-primary">3x</span>
                <span className="text-xs font-bold text-foreground">تأثير مضاعف</span>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="flex-1 w-full flex flex-col gap-4 sm:gap-6 mt-8 lg:mt-0">
            <div className="bg-background rounded-2xl p-5 md:p-8 flex items-start gap-4 sm:gap-5 shadow-warm border border-border/50 transition-all duration-300 hover:-translate-x-2">
              <div className="w-10 h-10 sm:w-14 sm:h-14 shrink-0 gradient-cta rounded-full flex items-center justify-center">
                <span className="text-lg sm:text-xl font-bold text-primary-foreground">1</span>
              </div>
              <div className="text-right flex-1 pt-0.5 sm:pt-1">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1 sm:mb-2">تنظيف لطيف</h3>
                <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed">
                  الشامبو ينظف بلطف دون تجريد الشعر من زيوته الطبيعية، ويهيئ الشعر لامتصاص الترطيب
                </p>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-5 md:p-8 flex items-start gap-4 sm:gap-5 shadow-warm border border-border/50 transition-all duration-300 hover:-translate-x-2">
              <div className="w-10 h-10 sm:w-14 sm:h-14 shrink-0 gradient-cta rounded-full flex items-center justify-center">
                <span className="text-lg sm:text-xl font-bold text-primary-foreground">2</span>
              </div>
              <div className="text-right flex-1 pt-0.5 sm:pt-1">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1 sm:mb-2">علاج مكثف</h3>
                <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed">
                  الماسك يخترق ألياف الشعر ليغذي ويرطب بعمق ويصلح التلف والتقصف من الداخل
                </p>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-5 md:p-8 flex items-start gap-4 sm:gap-5 shadow-warm border border-border/50 transition-all duration-300 hover:-translate-x-2">
              <div className="w-10 h-10 sm:w-14 sm:h-14 shrink-0 gradient-cta rounded-full flex items-center justify-center">
                <span className="text-lg sm:text-xl font-bold text-primary-foreground">3</span>
              </div>
              <div className="text-right flex-1 pt-0.5 sm:pt-1">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1 sm:mb-2">حماية ولمعان</h3>
                <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed">
                  بخاخ الزيت الخفيف يغلق الرطوبة ويحمي الشعر طوال اليوم مع لمعان طبيعي
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-primary/10 rounded-full px-6 py-3">
            <span className="text-primary text-2xl">🔗</span>
            <span className="font-bold text-primary">النتيجة: شعر مرطب، ناعم، ولامع بتركيبة متكاملة</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SynergySection;
