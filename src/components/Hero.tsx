import React from "react";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">
              🚀 Запускаем цифровое будущее
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Создаём{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              инновационные
            </span>{" "}
            цифровые продукты
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Превращаем идеи в современные веб-платформы, мобильные приложения и
            цифровые решения, которые масштабируют ваш бизнес
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105">
              Обсудить проект
              <Icon name="ArrowRight" size={20} />
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm">
              Смотреть кейсы
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">50+</div>
              <div className="text-gray-400 text-sm">Проектов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">3+</div>
              <div className="text-gray-400 text-sm">Года опыта</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-gray-400 text-sm">Поддержка</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-gray-400 text-sm">Качество</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={24} className="text-white/60" />
      </div>
    </section>
  );
};

export default Hero;
