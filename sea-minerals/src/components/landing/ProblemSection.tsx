const problems = [
  {
    icon: "🌵",
    title: "جفاف مستمر",
    description: "شعرك يفقد رطوبته بسرعة ويبدو باهتاً وبلا حياة؟",
  },
  {
    icon: "🌪️",
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
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-destructive/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-destructive/10 px-4 py-2 rounded-full mb-4 border border-destructive/20">
            <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
            <span className="text-destructive font-bold text-sm tracking-wide">مشاكل شائعة</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 md:mb-6">
            هل تعانين من <span className="text-destructive">هذه المشاكل؟</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            إذا كان شعرك يعاني من الجفاف والتلف، فأنتِ لست وحدك. الحل يبدأ من روتين صحيح.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group bg-card rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border/50 hover:border-destructive/30 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-destructive/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto bg-destructive/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-destructive/20 transition-all duration-500">
                  <span className="text-4xl filter drop-shadow-sm">{problem.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{problem.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20 shadow-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/40 group-hover:bg-transparent transition-colors duration-500" />
            <span className="text-3xl relative z-10 animate-bounce">✨</span>
            <p className="text-xl font-bold text-foreground relative z-10">
              <span className="text-primary block sm:inline">الحل:</span> روتين متكامل بمعادن البحر من Maui Moisture
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
