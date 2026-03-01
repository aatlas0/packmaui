// SynergySection.tsx
import synergy1 from '@/assets/synergy1.png';
import synergy2 from '@/assets/synergy2.png';

const SynergySection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-coconut relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-golden/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="text-center mb-16 lg:mb-24 animate-fade-up">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">
            سر الفعالية القصوى
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-10 leading-[1.3] font-cairo">
            <span className="inline-block pb-2">لماذا يعمل هذا الباك</span>
            <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-l from-primary to-accent font-black pb-3">بشكل أفضل معاً؟</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-golden mx-auto rounded-full mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-cairo">
            كل منتج يكمّل الآخر ليمنحك نتائج مضاعفة لا يمكن لمنتج واحد تحقيقها
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Images Collage */}
          <div className="relative w-full aspect-square lg:aspect-auto border-transparent h-full min-h-[400px]">
            <div className="absolute top-0 right-0 w-[65%] h-[75%] rounded-[2rem] overflow-hidden shadow-warm-xl z-20 transform hover:-translate-y-2 transition-transform duration-500 border-4 border-white">
              <img src={synergy1} alt="استخدام منتجات الباك" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            </div>

            <div className="absolute bottom-0 left-0 w-[60%] h-[65%] rounded-[2rem] overflow-hidden shadow-2xl z-30 transform -translate-y-8 translate-x-8 hover:-translate-y-10 transition-transform duration-500 border-4 border-white">
              <img src={synergy2} alt="نتيجة الباك المتكامل" className="w-full h-full object-cover" />
            </div>

            {/* Decorative Dot pattern or badge */}
            <div className="absolute top-1/2 left-4 z-40 bg-white p-4 rounded-2xl shadow-xl transform -translate-y-1/2 -rotate-6 animate-float">
              <div className="text-center">
                <span className="block text-3xl font-black text-primary">3x</span>
                <span className="text-xs font-bold text-foreground">تأثير مضاعف</span>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-warm transition-all duration-300 group hover:-translate-y-1">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 text-primary">
                  <span className="text-2xl font-black">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">تنظيف لطيف</h3>
                  <p className="text-muted-foreground leading-relaxed">الشامبو ينظف بلطف دون تجريد الشعر من زيوته الطبيعية، ويهيئ الشعر لامتصاص الترطيب</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-warm transition-all duration-300 group hover:-translate-y-1">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 text-primary">
                  <span className="text-2xl font-black">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">علاج مكثف</h3>
                  <p className="text-muted-foreground leading-relaxed">الماسك يخترق ألياف الشعر ليغذي ويرطب بعمق ويصلح التلف والتقصف من الداخل</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-warm transition-all duration-300 group hover:-translate-y-1">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 text-primary">
                  <span className="text-2xl font-black">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">حماية ولمعان</h3>
                  <p className="text-muted-foreground leading-relaxed">بخاخ الزيت الخفيف يغلق الرطوبة ويحمي الشعر طوال اليوم مع لمعان طبيعي</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <div className="inline-flex items-center gap-4 bg-gradient-to-r from-primary/10 to-transparent p-4 rounded-xl border-r-4 border-primary">
                <span className="text-2xl">✨</span>
                <p className="font-bold text-primary">
                  النتيجة: لمعان فائق، نعومة الحرير، ووهج صحي بتركيبة الأوابوهي الاستوائية
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
