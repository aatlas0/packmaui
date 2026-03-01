const problems = [
  {
    icon: "🌵",
    title: "جفاف مستمر",
    description: "شعرك يفقد رطوبته بسرعة ويبدو باهتاً وبلا حياة؟",
  },
  {
    icon: "⚡",
    title: "هيجان مزعج",
    description: "الهيجان يجعل تصفيف شعرك مهمة صعبة كل صباح؟",
  },
  {
    icon: "✂️",
    title: "تقصف الأطراف",
    description: "أطراف شعرك متقصفة ومتكسرة رغم العناية المستمرة؟",
  },
  {
    icon: "🌫️",
    title: "فقدان اللمعان",
    description: "شعرك فقد بريقه الطبيعي وأصبح باهتاً وجافاً؟",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            هل تعانين من هذه المشاكل؟
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            إذا كان شعرك يعاني من الجفاف والتلف، فأنتِ لست وحدك. الحل يبدأ من روتين صحيح.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group bg-card/60 backdrop-blur-sm rounded-3xl p-8 text-center shadow-warm hover:shadow-warm-lg transition-all duration-500 hover:-translate-y-2 border border-border/50 hover:border-red-500/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 inline-block">
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <div className="inline-block bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl p-[1px]">
            <div className="bg-background/80 backdrop-blur-md rounded-2xl px-6 py-4 sm:px-10 sm:py-6">
              <p className="text-lg sm:text-xl font-bold flex items-center gap-3">
                <span className="text-2xl animate-pulse">✨</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary to-accent">
                  الحل: روتين متكامل بزبدة الشيا من Maui Moisture
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
