import React from "react";
import Icon from "@/components/ui/icon";

const Portfolio = () => {
  const projects = [
    {
      title: "FinTech платформа",
      category: "Веб-приложение",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      description:
        "Комплексная платформа для управления финансами с AI-аналитикой",
      tech: ["React", "Node.js", "PostgreSQL"],
      link: "#",
    },
    {
      title: "Мобильный маркетплейс",
      category: "iOS/Android",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      description: "Социальная платформа для торговли с геолокацией",
      tech: ["React Native", "Firebase", "Stripe"],
      link: "#",
    },
    {
      title: "EdTech платформа",
      category: "Веб-приложение",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      description: "Интерактивная платформа для онлайн-обучения",
      tech: ["Next.js", "WebRTC", "MongoDB"],
      link: "#",
    },
    {
      title: "IoT Dashboard",
      category: "Dashboard",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      description: "Система мониторинга умного дома в реальном времени",
      tech: ["Vue.js", "Socket.io", "InfluxDB"],
      link: "#",
    },
    {
      title: "Корпоративный CRM",
      category: "Enterprise",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      description: "CRM-система для автоматизации продаж",
      tech: ["Angular", "Django", "Redis"],
      link: "#",
    },
    {
      title: "Блокчейн кошелёк",
      category: "Мобильное приложение",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      description: "Безопасный кошелёк для криптовалют",
      tech: ["Flutter", "Blockchain", "Biometrics"],
      link: "#",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            Портфолио
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Успешные проекты
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Реальные кейсы и решения, которые помогли нашим клиентам достичь
            бизнес-целей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-medium text-gray-700">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-800 transition-colors group/btn">
                  Изучить кейс
                  <Icon
                    name="ArrowRight"
                    size={16}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition-colors inline-flex items-center gap-2">
            Смотреть все проекты
            <Icon name="ExternalLink" size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
