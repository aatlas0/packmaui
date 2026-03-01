const benefits = [
  {
    icon: "💧",
    title: "ترطيب عميق",
    description: "زبدة الشيا الكريمية تخترق ألياف الشعر لترطب بعمق حتى الشعر الأكثر جفافاً",
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
    icon: "🔄",
    title: "روتين متكامل",
    description: "ثلاث خطوات بسيطة لعناية شاملة بالشعر الجاف",
  },
  {
    icon: "🔒",
    title: "حماية يومية",
    description: "يحمي الشعر من الجفاف والعوامل الخارجية طوال اليوم",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 bg-background relative overflow-hidden">
      {/* Soft background elements */}
      <div className="absolute top-40 right-[-10%] w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-[-10%] w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            فوائد الروتين المتكامل
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            استثمري في شعرك مع روتين يمنحك كل ما تحتاجينه
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-card/50 backdrop-blur-sm rounded-3xl p-8 shadow-warm hover:shadow-warm-lg transition-all duration-500 hover:-translate-y-2 border border-border/40 hover:border-primary/20 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 border border-primary/10">
                  <span className="text-3xl">{benefit.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
