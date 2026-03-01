const problems = [
  {
    icon: "💧",
    title: "جفاف مستمر",
    description: "شعرك يفقد رطوبته بسرعة ويبدو باهتاً وبلا حياة؟",
  },
  {
    icon: "🌀",
    title: "هيشان مزعج",
    description: "الهيشان يجعل تصفيف شعرك مهمة صعبة كل صباح؟",
  },
  {
    icon: "✂️",
    title: "تقصف الأطراف",
    description: "أطراف شعرك متقصفة ومتكسرة رغم العناية المستمرة؟",
  },
  {
    icon: "🪞",
    title: "فقدان اللمعان",
    description: "شعرك فقد بريقه الطبيعي وأصبح باهتاً وجافاً؟",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            هل تعانين من هذه المشاكل؟
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            إذا كان شعرك يعاني من الجفاف والتلف، فأنتِ لست وحدك. الحل يبدأ من روتين صحيح.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 text-center shadow-warm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-5xl mb-4 block">{problem.icon}</span>
              <h3 className="text-xl font-bold text-foreground mb-2">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <div className="inline-block bg-secondary/10 rounded-2xl px-8 py-6">
            <p className="text-xl font-bold text-secondary">
              ✨ الحل: روتين متكامل بحليب جوز الهند من Maui Moisture
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
