import React from "react";
import Icon from "@/components/ui/icon";

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce платформа",
      category: "Веб-разработка",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      description:
        "Современная платформа для онлайн-торговли с интеграцией платёжных систем",
    },
    {
      title: "Мобильное банкинг-приложение",
      category: "Мобильная разработка",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      description: "Безопасное приложение для управления финансами и переводов",
    },
    {
      title: "Корпоративный сайт",
      category: "UI/UX Дизайн",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      description: "Стильный корпоративный сайт с интерактивными элементами",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Портфолио</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Примеры наших работ и реализованных проектов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-primary text-sm font-medium mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <button className="inline-flex items-center gap-2 text-primary font-medium hover:text-purple-700 transition-colors">
                  Подробнее
                  <Icon name="ArrowRight" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
