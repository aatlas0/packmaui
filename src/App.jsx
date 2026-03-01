import React from 'react';
import { Sparkles, ArrowRight, Droplets, Leaf } from 'lucide-react';

function App() {
    const projects = [
        {
            id: 'coconut-milk-glow',
            name: 'Coconut Milk Glow',
            description: 'Soins nourrissants formulés au pur lait de coco pour un teint éclatant.',
            icon: <Sparkles className="w-6 h-6" />,
            color: 'bg-amber-50 text-amber-700 border-amber-200',
            hoverColor: 'hover:bg-amber-100',
            buttonColor: 'bg-amber-600 hover:bg-amber-700',
        },
        {
            id: 'sea-minerals',
            name: 'Sea Minerals',
            description: 'Extraits océaniques revitalisants pour purifier, hydrater et rafraîchir votre peau.',
            icon: <Droplets className="w-6 h-6" />,
            color: 'bg-blue-50 text-blue-700 border-blue-200',
            hoverColor: 'hover:bg-blue-100',
            buttonColor: 'bg-blue-600 hover:bg-blue-700',
        },
        {
            id: 'shea-butter-rich',
            name: 'Shea Butter Rich',
            description: 'Formules profondément hydratantes enrichies au beurre de karité africain de première qualité.',
            icon: <Leaf className="w-6 h-6" />,
            color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
            hoverColor: 'hover:bg-emerald-100',
            buttonColor: 'bg-emerald-600 hover:bg-emerald-700',
        },
        {
            id: 'shine-awapuhi',
            name: 'Shine Awapuhi',
            description: 'Mélanges botaniques de gingembre tropical pour une brillance inégalée des cheveux et de la peau.',
            icon: <Sparkles className="w-6 h-6" />,
            color: 'bg-rose-50 text-rose-700 border-rose-200',
            hoverColor: 'hover:bg-rose-100',
            buttonColor: 'bg-rose-600 hover:bg-rose-700',
        },
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-100 selection:text-indigo-900">

            {/* Decorative Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-100/50 blur-3xl" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-rose-100/50 blur-3xl" />
            </div>

            <div className="relative max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">

                {/* Header section */}
                <div className="text-center mb-20 animate-fade-in-up">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
                        Cosmetics <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Portail Central</span>
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600 leading-relaxed">
                        Bienvenue sur le tableau de bord centralisé. Naviguez parmi nos pages de présentation de produits de beauté et de soins premium ci-dessous.
                    </p>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`group flex flex-col bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${project.color}`}>
                                {project.icon}
                            </div>

                            <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                                {project.name}
                            </h2>

                            <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                                {project.description}
                            </p>

                            <a
                                href={`/${project.id}/`}
                                className={`inline-flex items-center justify-center w-full px-6 py-3.5 text-base font-semibold text-white rounded-xl shadow-sm transition-all duration-200 ${project.buttonColor} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                            >
                                Voir la page
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-24 text-center pb-8">
                    <p className="text-slate-500 font-medium">
                        Tableau de Bord Manager &bull; Tous les systèmes sont opérationnels
                    </p>
                </div>

            </div>
        </div>
    );
}

export default App;
