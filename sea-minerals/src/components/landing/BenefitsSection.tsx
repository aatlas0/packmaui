const benefits = [
  {
    icon: "🌊",
    title: "ترطيب عميق",
    description: "معادن البحر الغنية تخترق ألياف الشعر ليرطب من الداخل ويحمي اللون",
  },
  {
    icon: "🌿",
    title: "تغذية وإصلاح",
    description: "الطحالب البحرية النقية وأعشاب البحر تغذي وتصلح التلف الناتج عن الصبغة",
  },
  {
    icon: "🛡️",
    title: "خالي من المواد الضارة",
    description: "بدون سلفات، سيليكون، أو بارابين – آمن على شعرك",
  },
  {
    icon: "✨",
    title: "نعومة ولمعان",
    description: "نتائج واضحة من أول استعمال – شعر ناعم ولامع",
  },
  {
    icon: "💧",
    title: "روتين متكامل",
    description: "ثلاث خطوات بسيطة لعناية شاملة بالشعر المصبوغ",
  },
  {
    icon: "🌦️",
    title: "حماية يومية",
    description: "يحمي الشعر من الجفاف والعوامل الخارجية طوال اليوم",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      <div className="absolute -left-40 top-40 w-80 h-80 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4 border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary font-bold text-sm tracking-wide">عناية فائقة</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            فوائد <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary to-accent">الروتين المتكامل</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            استثمري في شعرك مع روتين يمنحك كل ما تحتاجينه
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-sm hover:shadow-warm-lg transition-all duration-500 hover:-translate-y-2 border border-border/50 hover:border-primary/30 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner border border-primary/10">
                  <span className="text-3xl filter drop-shadow-sm">{benefit.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
