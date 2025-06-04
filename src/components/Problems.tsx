import React from "react";
import Icon from "@/components/ui/icon";

const Problems = () => {
  const problems = [
    {
      icon: "TrendingDown",
      problem: "Теряете 40% клиентов",
      description: "из-за медленного и неудобного сайта",
      solution:
        "Создаём быстрые сайты, которые конвертируют посетителей в клиентов",
      result: "+180% конверсия",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: "Clock",
      problem: "Тратите 8 часов в день",
      description: "на рутинные задачи вместо развития бизнеса",
      solution: "Автоматизируем процессы и освобождаем ваше время",
      result: "-70% времени на рутину",
      color: "from-yellow-500 to-amber-500",
    },
    {
      icon: "Users",
      problem: "Не можете масштабироваться",
      description: "каждый новый клиент требует больше ресурсов",
      solution: "Строим системы, которые растут вместе с бизнесом",
      result: "+500% клиентов без роста затрат",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: "DollarSign",
      problem: "Упускаете прибыль",
      description: "конкуренты опережают в цифровой среде",
      solution: "Создаём конкурентные преимущества через технологии",
      result: "+350% рост выручки",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-red-500/20 text-red-300 rounded-full text-sm font-medium mb-4">
            ⚠️ Проблемы бизнеса
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Знакомые боли?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Каждый день промедления стоит вам денег. Мы решаем эти проблемы за
            30 дней
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-3xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div
                  className={`bg-gradient-to-r ${item.color} p-3 rounded-2xl flex-shrink-0`}
                >
                  <Icon name={item.icon} size={24} className="text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-red-400 mb-2">
                    {item.problem}
                  </h3>
                  <p className="text-gray-400 mb-4">{item.description}</p>

                  <div className="border-l-2 border-green-500 pl-4 mb-4">
                    <p className="text-green-300 font-medium">
                      ✅ {item.solution}
                    </p>
                  </div>

                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                    <span className="text-green-400 font-bold text-sm">
                      Результат: {item.result}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105">
            Решить мои проблемы за 30 дней
            <Icon name="ArrowRight" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Problems;
