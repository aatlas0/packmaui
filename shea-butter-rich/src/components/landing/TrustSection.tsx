const trustItems = [
  {
    icon: "🛵",
    title: "توصيل سريع",
    description: "التوصيل خلال 24-72 ساعة لجميع المدن",
  },
  {
    icon: "🤝",
    title: "الدفع عند الاستلام",
    description: "ادفعي عند استلام طلبك – بدون مخاطرة",
  },
  {
    icon: "💯",
    title: "منتجات أصلية 100%",
    description: "جميع المنتجات أصلية ومستوردة مباشرة",
  },
  {
    icon: "🔐",
    title: "شراء آمن",
    description: "بياناتك محمية ومعاملاتك مؤمنة بالكامل",
  },
];

const TrustSection = () => {
  return (
    <section className="py-16 bg-background relative overflow-hidden border-t border-border/50">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {trustItems.map((item, index) => (
            <div key={index} className="text-center group p-6 rounded-3xl bg-card/40 hover:bg-card/80 transition-colors border border-transparent hover:border-border/50">
              <div className="text-4xl sm:text-5xl mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2 inline-block drop-shadow-sm">
                {item.icon}
              </div>
              <h3 className="font-bold text-foreground text-sm sm:text-base mb-2">{item.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
