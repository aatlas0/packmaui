import productShampoo from "@/assets/product-shampoo.webp";
import productSpray from "@/assets/product-spray.webp";
import productMask from "@/assets/product-mask.webp";

const products = [
  {
    image: productShampoo,
    name: "شامبو Sea Minerals",
    subtitle: "حماية اللون وترطيب غني",
    description:
      "ينظف بلطف ويساعد على حماية لون الشعر المصبوغ من البهتان بفضل معادن البحر الغنية والطحالب البحرية، مع تغذية إضافية تترك شعرك ناعماً ولامعاً.",
    benefits: ["حماية اللون", "ترطيب غني", "خالي من السلفات"],
  },
  {
    image: productMask,
    name: "ماسك Sea Minerals",
    subtitle: "علاج مكثف للحفاظ على اللون",
    description:
      "ماسك مغذي بعمق يساعد على إصلاح الشعر المصبوغ والحفاظ على حيوية اللون بفضل تركيبة معادن البحر وأعشاب البحر (Sea Kelp)، يقلل الهيجان ويمنح نعومة فائقة.",
    benefits: ["ثبات اللون", "ترطيب مكثف", "لمعان صحي"],
  },
  {
    image: productSpray,
    name: "بخاخ Sea Minerals Oil Mist",
    subtitle: "لمعان خفيف وحماية فورية",
    description:
      "بخاخ زيت خفيف يمنح لمعاناً فورياً وحماية للون الشعر دون أن يثقله، بتركيبة غنية بمعادن البحر تساعد على فك التشابك وتنعيم الشعر.",
    benefits: ["حماية فورية", "بدون زيادة وزن", "سهولة التصفيف"],
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
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
                  <img src={product.image}
                    alt={product.name}
                    className="w-full max-w-sm mx-auto rounded-xl" loading="lazy" decoding="async" />
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
