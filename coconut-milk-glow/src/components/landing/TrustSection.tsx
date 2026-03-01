const trustItems = [
  {
    icon: "🚚",
    title: "توصيل سريع",
    description: "التوصيل خلال 24-72 ساعة لجميع المدن",
  },
  {
    icon: "💰",
    title: "الدفع عند الاستلام",
    description: "ادفعي عند استلام طلبك – بدون مخاطرة",
  },
  {
    icon: "✅",
    title: "منتجات أصلية 100%",
    description: "جميع المنتجات أصلية ومستوردة مباشرة",
  },
  {
    icon: "🔒",
    title: "شراء آمن",
    description: "بياناتك محمية ومعاملاتك مؤمنة بالكامل",
  },
];

const TrustSection = () => {
  return (
    <section className="py-16 bg-coconut">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <div key={index} className="text-center">
              <span className="text-4xl mb-3 block">{item.icon}</span>
              <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
