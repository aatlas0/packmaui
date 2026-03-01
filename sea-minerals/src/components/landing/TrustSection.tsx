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
    icon: "👑",
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
    <section className="py-16 bg-background relative overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="text-center group bg-card p-6 rounded-3xl shadow-sm hover:shadow-warm-lg transition-all duration-300 border border-border/50 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10 w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary/20">
                <span className="text-3xl filter drop-shadow-sm">{item.icon}</span>
              </div>
              <h3 className="font-bold text-foreground mb-2 text-lg relative z-10">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed relative z-10">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
