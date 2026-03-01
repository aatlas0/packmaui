import productShampoo from "@/assets/product-shampoo.png";
import productSpray from "@/assets/product-spray.png";
import productMask from "@/assets/product-mask.png";

const products = [
  {
    image: productShampoo,
    name: "شامبو Shine Awapuhi",
    subtitle: "لمعان ونعومة الحرير",
    description:
      "ينظف بلطف ويمنح الشعر الباهت لمعاناً فورياً بفضل زنجبيل الأوابوهي وزهرة التياري، يترك شعرك خفيفاً ومتألقاً.",
    benefits: ["لمعان فائق", "نعومة فورية", "خالي من السلفات"],
  },
  {
    image: productMask,
    name: "ماسك Shine Awapuhi",
    subtitle: "علاج للمعان عميق",
    description:
      "ماسك خفيف يغذي الشعر بعمق دون إثقاله، بتركيبة زيت جوز الهند الخفيف ليعيد الحيوية والبريق للشعر المجهد.",
    benefits: ["وهج صحي", "ترطيب خفيف", "سهولة التفكيك"],
  },
  {
    image: productSpray,
    name: "بخاخ Shine Awapuhi Oil Mist",
    subtitle: "لمسة نهائية متألقة",
    description:
      "بخاخ زيت خفيف جداً يمنح لمعاناً كالمرايا وحماية طوال اليوم، مع ريحة استوائية ساحرة من زهرة التياري.",
    benefits: ["لمعان كالمرايا", "رائحة استوائية", "حماية من الهيجان"],
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            تعرّفي على كل منتج في الباك
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ثلاث منتجات مصممة بعناية لتعمل معاً وتمنحك أفضل النتائج
          </p>
        </div>

        <div className="space-y-16">
          {products.map((product, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? "md:direction-ltr" : ""
                }`}
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="bg-coconut rounded-2xl p-6 shadow-warm">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full max-w-sm mx-auto rounded-xl"
                  />
                </div>
              </div>
              <div className={`space-y-5 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  {product.name}
                </h3>
                <p className="text-primary font-semibold text-lg">{product.subtitle}</p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {product.benefits.map((benefit, i) => (
                    <span
                      key={i}
                      className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
