const benefits = [
  {
    icon: "🥥",
    title: "ترطيب عميق",
    description: "حليب جوز الهند يخترق ألياف الشعر ليرطب من الداخل",
  },
  {
    icon: "🥭",
    title: "تغذية وإصلاح",
    description: "خلاصة الجوافة وزبدة المانجو تغذي وتصلح التلف",
  },
  {
    icon: "🌿",
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
    icon: "🛡️",
    title: "حماية يومية",
    description: "يحمي الشعر من الجفاف والعوامل الخارجية طوال اليوم",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 bg-coconut">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            فوائد الروتين المتكامل
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            استثمري في شعرك مع روتين يمنحك كل ما تحتاجينه
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-background rounded-2xl p-7 shadow-warm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1 border border-border/50"
            >
              
              <span className="text-4xl mb-4 block transition-transform duration-500 group-hover:scale-110">{benefit.icon}</span>
              <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
