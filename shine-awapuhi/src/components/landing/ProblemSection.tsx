const problems = [
  {
    icon: "🍂",
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
    <section className="py-24 bg-gradient-to-b from-coconut to-background relative overflow-hidden">
      {/* Decorative background lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, var(--foreground) 0, var(--foreground) 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 lg:mb-20 animate-fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-destructive/10 text-destructive text-sm font-bold mb-4">
            المشكلة المشتركة
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-cairo">
            هل تعانين من هذه المشاكل؟
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-destructive/50 to-destructive mx-auto rounded-full mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-cairo">
            إذا كان شعرك يعاني من الجفاف والتلف، فأنتِ لست وحدك. الحل يبدأ من روتين صحيح.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-background rounded-[2rem] p-8 text-center shadow-sm hover:shadow-warm-lg transition-all duration-500 hover:-translate-y-2 border border-border/50 group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-destructive/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto bg-destructive/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-destructive/10 transition-all duration-500 shadow-inner">
                  <span className="text-4xl filter drop-shadow-sm">{problem.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 font-cairo group-hover:text-destructive transition-colors">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center animate-fade-in-up">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-primary/10 rounded-2xl md:rounded-full px-8 py-4 border border-primary/20 shadow-warm-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            <span className="text-2xl relative z-10 animate-pulse">✨</span>
            <p className="text-xl font-bold text-primary relative z-10">
              الحل: روتين متكامل بالأوابوهي للمعان من Maui Moisture
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
