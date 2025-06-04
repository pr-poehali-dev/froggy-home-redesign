import React from "react";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Globe",
      title: "Веб-разработка",
      description:
        "Создаём современные сайты и веб-приложения с адаптивным дизайном и высокой производительностью",
    },
    {
      icon: "Smartphone",
      title: "Мобильные приложения",
      description:
        "Разрабатываем нативные и кроссплатформенные мобильные приложения для iOS и Android",
    },
    {
      icon: "Palette",
      title: "UI/UX Дизайн",
      description:
        "Проектируем интуитивные пользовательские интерфейсы и создаём уникальные дизайн-системы",
    },
    {
      icon: "Zap",
      title: "Цифровая трансформация",
      description:
        "Помогаем бизнесу внедрять цифровые технологии и автоматизировать процессы",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Предлагаем полный спектр услуг по разработке цифровых продуктов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-purple-50 p-8 rounded-2xl hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary p-3 rounded-full w-fit mb-6">
                <Icon name={service.icon} size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
