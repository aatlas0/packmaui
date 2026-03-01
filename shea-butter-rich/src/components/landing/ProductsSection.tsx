import productShampoo from "@/assets/product-shampoo.png";
import productSpray from "@/assets/product-spray.png";
import productMask from "@/assets/product-mask.png";

const products = [
  {
    image: productShampoo,
    name: "شامبو Shea Butter",
    subtitle: "ترطيب عميق وإصلاح غني",
    description:
      "ينظف بلطف ويغذي الشعر الجاف جداً بفضل زبدة الشيا الكريمية وزيت المكاديميا النقي، يترك شعرك ناعماً كالحرير وسهل التصفيف.",
    benefits: ["ترطيب عميق", "تغذية مكثفة", "خالي من السلفات"],
  },
  {
    image: productMask,
    name: "ماسك Shea Butter",
    subtitle: "علاج فائق للشعر التالف",
    description:
      "ماسك مغذي بعمق يعمل على إصلاح الألياف التالفة بتركيبة زبدة الشيا وزيت جوز الهند، يعيد الحيوية واللمعان للشعر الأكثر جفافاً.",
    benefits: ["إصلاح التلف", "نعومة فائقة", "لمعان صحي"],
  },
  {
    image: productSpray,
    name: "بخاخ Shea Butter Oil Mist",
    subtitle: "لمعان وحماية من الجفاف",
    description:
      "بخاخ زيت خفيف يمنح لمسة نهائية لامعة ويحمي من الجفاف دون تزييت، بتركيبة زيت المكاديميا والشيا لترطيب فوري طوال اليوم.",
    benefits: ["ترطيب فوري", "بدون زيادة وزن", "سهولة التصفيف"],
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
