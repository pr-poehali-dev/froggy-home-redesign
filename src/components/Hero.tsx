import React from "react";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-20 bg-gradient-to-br from-purple-50 to-indigo-100 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Создаём <span className="text-primary">цифровые</span> продукты
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Разрабатываем веб-сайты, мобильные приложения и цифровые решения,
            которые помогают бизнесу расти и развиваться
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center gap-2">
              Начать проект
              <Icon name="ArrowRight" size={20} />
            </button>
            <button className="border-2 border-primary text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary hover:text-white transition-colors">
              Посмотреть работы
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
