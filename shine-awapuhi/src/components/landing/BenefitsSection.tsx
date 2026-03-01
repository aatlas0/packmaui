const benefits = [
  {
    icon: "💧",
    title: "ترطيب عميق",
    description: "زنجبيل الأوابوهي النادر يمنح شعرك لمعاناً مذهلاً ووهجاً صحياً من أول استعمال",
  },
  {
    icon: "🌿",
    title: "تغذية وإصلاح",
    description: "الطحالب البحرية النقية وأعشاب البحر تغذي وتصلح التلف الناتج عن الصبغة",
  },
  {
    icon: "✨",
    title: "خالي من المواد الضارة",
    description: "بدون سلفات، سيليكون، أو بارابين – آمن على شعرك",
  },
  {
    icon: "⭐",
    title: "نعومة ولمعان",
    description: "نتائج واضحة من أول استعمال – شعر ناعم ولامع",
  },
  {
    icon: "🌺",
    title: "روتين متكامل",
    description: "ثلاث خطوات بسيطة لعناية شاملة بالشعر الجاف",
  },
  {
    icon: "🛡️",
    title: "حماية يومية",
    description: "يحمي الشعر من الجفاف والعوامل الخارجية طوال اليوم",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[500px] bg-primary/5 rounded-[100%] blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 lg:mb-20 animate-fade-up">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">
            المميزات والفوائد
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-cairo">
            فوائد الروتين المتكامل
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-golden mx-auto rounded-full mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-cairo">
            استثمري في شعرك مع روتين يمنحك كل ما تحتاجينه
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-card rounded-[2rem] p-8 shadow-sm hover:shadow-warm-xl transition-all duration-500 hover:-translate-y-2 border border-border/50 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner group-hover:bg-primary/20">
                  <span className="text-3xl filter drop-shadow-sm">{benefit.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 font-cairo group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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
