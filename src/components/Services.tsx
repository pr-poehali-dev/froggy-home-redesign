import React from "react";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "TrendingUp",
      title: "Сайты-продавцы",
      description:
        "Создаём сайты, которые продают 24/7. Каждый элемент работает на конверсию",
      features: ["Высокая конверсия", "Быстрая загрузка", "Mobile-first"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "Zap",
      title: "Автоматизация процессов",
      description: "Избавляем от рутины. Система работает, вы зарабатываете",
      features: ["CRM интеграция", "Автоворонки", "Отчётность"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "Smartphone",
      title: "Мобильные решения",
      description: "Приложения для роста лояльности и увеличения продаж",
      features: ["Push-уведомления", "Программы лояльности", "Аналитика"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "BarChart3",
      title: "Системы аналитики",
      description:
        "Видите, откуда приходят деньги. Принимаете решения на данных",
      features: ["Дашборды", "Прогнозы", "ROI трекинг"],
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4">
            💡 Решения для роста
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Превращаем проблемы в прибыль
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Конкретные решения для конкретных бизнес-задач. Работаем только над
            тем, что приносит деньги
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-3xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div
                className={`bg-gradient-to-r ${service.color} p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon name={service.icon} size={24} className="text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-sm text-gray-500"
                  >
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    {feature}
                  </div>
                ))}
              </div>

              <button className="mt-6 text-purple-600 font-semibold text-sm hover:text-purple-800 transition-colors inline-flex items-center gap-1 group">
                Подробнее
                <Icon
                  name="ArrowRight"
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
