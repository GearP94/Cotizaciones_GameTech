import React from 'react';
import { 
  Camera, 
  ShieldCheck, 
  HardDrive, 
  Wrench, 
  Smartphone, 
  CheckCircle2, 
  ChevronRight,
  Info,
  Zap,
  CloudRain,
  Clock
} from 'lucide-react';

const App = () => {
  const phoneNumber = "527774062748";

  const packages = [
    {
      id: 1,
      name: "Plan Esencial (X1)",
      price: 2100,
      desc: "Seguridad focalizada para un punto crítico.",
      features: [
        "1 Cámara Tapo Exterior HD",
        "MicroSD WD Purple 128GB",
        "Caja de protección de cables",
        "App móvil personalizada",
        "Soporte técnico inicial"
      ],
      color: "from-blue-500 to-cyan-400"
    },
    {
      id: 2,
      name: "Plan Dúo (X2)",
      price: 3600,
      desc: "Doble cobertura para mayor tranquilidad.",
      features: [
        "2 Cámaras Tapo Exterior HD",
        "2 MicroSD WD Purple 128GB",
        "Alertas instantáneas al celular",
        "Montaje estético y seguro",
        "1 Año de Garantía en Soporte"
      ],
      color: "from-indigo-500 to-purple-500",
      popular: true
    },
    {
      id: 3,
      name: "Plan Tridente (X3)",
      price: 5500,
      desc: "Protección perimetral de 3 puntos.",
      features: [
        "3 Cámaras Tapo Exterior HD",
        "3 MicroSD WD Purple 128GB",
        "Configuración multidispositivo",
        "1 Año de Garantía en Soporte"
      ],
      color: "from-purple-600 to-pink-500"
    },
    {
      id: 4,
      name: "Plan Diamante (X4)",
      price: 7200,
      desc: "Cobertura total 360° para tu propiedad.",
      features: [
        "4 Cámaras Tapo Exterior HD",
        "4 MicroSD WD Purple 128GB",
        "Máxima vigilancia 24/7",
        "Configuración multidispositivo",
        "1 Año de Garantía en Soporte"
      ],
      color: "from-cyan-600 to-blue-700"
    }
  ];

  const handleWhatsApp = (pkgName) => {
    const message = encodeURIComponent(`Hola GamaTech Security, me interesa cotizar el ${pkgName}. Quedo atento a la visita técnica.`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans selection:bg-blue-500/30 pb-10">
      {/* Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        
        {/* Header */}
        <header className="text-center mb-16 space-y-4">
          <div className="flex justify-center items-center space-x-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg">
              <ShieldCheck size={40} className="text-white" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight">
              GamaTech <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Security</span>
            </h1>
          </div>
          <p className="text-gray-400 text-lg font-medium italic tracking-wide">
            "Seguro, Accesible e Inteligente"
          </p>
        </header>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
              <HardDrive className="text-blue-400" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-blue-100">Almacenamiento Confiable</h3>
            <p className="text-sm text-gray-400">Memorias WD Purple de 128GB especiales para video. No usamos memorias estándar.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
              <CloudRain className="text-purple-400" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-purple-100">Resistencia al Clima</h3>
            <p className="text-sm text-gray-400">Equipos diseñados para el exterior (IP66), resistentes a lluvia y polvo extremo.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl">
            <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-4">
              <Clock className="text-pink-400" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-pink-100">Garantía de Soporte</h3>
            <p className="text-sm text-gray-400">Incluimos un año de soporte técnico en configuraciones y software para tu tranquilidad.</p>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <div 
              key={pkg.id}
              className={`relative bg-white/5 backdrop-blur-xl border ${pkg.popular ? 'border-blue-500/50' : 'border-white/10'} p-6 rounded-[2rem] flex flex-col transition-all duration-300 hover:bg-white/[0.08] hover:-translate-y-1 shadow-xl`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 shadow-lg shadow-blue-500/40">
                  <Zap size={10} fill="currentColor" /> Recomendado
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold mb-1">{pkg.name}</h3>
                <p className="text-gray-400 text-xs h-8 leading-tight">{pkg.desc}</p>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-extrabold">${pkg.price}</span>
                  <span className="ml-1 text-gray-500 text-xs">MXN*</span>
                </div>
              </div>

              <div className="space-y-3 flex-grow mb-6">
                {pkg.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-[13px] text-gray-300">
                    <CheckCircle2 size={16} className="text-blue-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => handleWhatsApp(pkg.name)}
                className={`w-full py-3 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 bg-gradient-to-r ${pkg.color} hover:brightness-110 active:scale-95 shadow-lg`}
              >
                Cotizar ahora
                <ChevronRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Terms */}
        <div className="mt-12 p-6 bg-white/5 border border-white/5 rounded-3xl flex items-start gap-4">
          <div className="mt-1 p-2 bg-blue-500/10 rounded-lg">
            <Info size={18} className="text-blue-400" />
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-blue-300 text-sm">Detalles de instalación</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              * El costo base considera hasta 10m de cableado por cámara. En distancias mayores o muros de alta dureza (concreto sólido/piedra), puede aplicar un ajuste de $100 a $200 por punto por materiales de fijación técnica. El año de garantía aplica exclusivamente en soporte de software y diagnóstico de instalación inicial.
            </p>
          </div>
        </div>

        <footer className="mt-16 text-center text-xs text-gray-600 uppercase tracking-[0.2em] border-t border-white/5 pt-8">
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-4 lowercase tracking-normal text-gray-400 italic">
            <span className="flex items-center justify-center gap-1"><Smartphone size={14} /> 777 406 2748</span>
            <span className="flex items-center justify-center gap-1"><Camera size={14} /> Santiago de Querétaro, Qro.</span>
          </div>
          © 2024 GamaTech Security
        </footer>

      </div>
    </div>
  );
};

export default App;