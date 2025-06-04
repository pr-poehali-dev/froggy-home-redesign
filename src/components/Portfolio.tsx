import React from "react";
import Icon from "@/components/ui/icon";

const Portfolio = () => {
  const projects = [
    {
      title: "Интернет-магазин мебели",
      category: "E-commerce",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      description: "Увеличили онлайн-продажи в 4 раза за 2 месяца",
      tech: ["Конверсия +380%", "Время загрузки -70%", "Чек +45%"],
      metrics: "280% рост продаж за 60 дней",
      link: "#",
    },
    {
      title: "Клиника пластической хирургии",
      category: "Медицина",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      description: "Автоматизировали запись и увеличили поток пациентов",
      tech: ["Онлайн-запись", "CRM система", "Email-маркетинг"],
      metrics: "+150% новых клиентов",
      link: "#",
    },
    {
      title: "Сеть ресторанов",
      category: "HoReCa",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
      description: "Система управления заказами и доставкой",
      tech: ["Мобильное приложение", "Интеграция с POS", "Аналитика"],
      metrics: "Экономия 40 часов в неделю",
      link: "#",
    },
    {
      title: "IT-консалтинг",
      category: "B2B сервис",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      description: "Лендинг + CRM для B2B продаж",
      tech: ["Квиз-воронка", "Интеграция AmoCRM", "Аналитика"],
      metrics: "Стоимость лида -60%",
      link: "#",
    },
    {
      title: "Онлайн-школа",
      category: "EdTech",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      description: "Платформа для продажи курсов",
      tech: ["LMS система", "Платёжи", "Геймификация"],
      metrics: "+320% продаж курсов",
      link: "#",
    },
    {
      title: "Производство мебели",
      category: "Производство",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      description: "ERP система для управления производством",
      tech: ["Учёт материалов", "Планирование", "Отчёты"],
      metrics: "Эффективность +85%",
      link: "#",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4">
            📈 Измеримые результаты
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Кейсы с цифрами
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Каждый проект — это конкретный результат для бизнеса. Смотрите, как
            мы решали задачи, похожие на ваши
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
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                  <span className="text-green-700 font-bold text-sm">
                    ✅ {project.metrics}
                  </span>
                </div>

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
                      className="px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-800 transition-colors group/btn">
                  Подробный кейс
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
          <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105">
            Хочу такой же результат
            <Icon name="TrendingUp" size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
