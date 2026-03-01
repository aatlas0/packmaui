const trustItems = [
  {
    icon: "🚚",
    title: "توصيل سريع",
    description: "التوصيل خلال 24-72 ساعة لجميع المدن",
  },
  {
    icon: "💵",
    title: "الدفع عند الاستلام",
    description: "ادفعي عند استلام طلبك – بدون مخاطرة",
  },
  {
    icon: "✨",
    title: "منتجات أصلية 100%",
    description: "جميع المنتجات أصلية ومستوردة مباشرة",
  },
  {
    icon: "🛡️",
    title: "شراء آمن",
    description: "بياناتك محمية ومعاملاتك مؤمنة بالكامل",
  },
];

const TrustSection = () => {
  return (
    <section className="py-20 bg-background border-t border-border/30 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-1/2 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="text-center group bg-card/50 p-6 rounded-[2rem] hover:bg-card hover:shadow-warm transition-all duration-500 border border-transparent hover:border-border/50"
            >
              <div className="w-16 h-16 mx-auto bg-background shadow-sm rounded-2xl flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-md border border-border/30">
                <span className="text-3xl filter drop-shadow-sm">{item.icon}</span>
              </div>
              <h3 className="font-bold text-foreground mb-2 text-lg font-cairo group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
