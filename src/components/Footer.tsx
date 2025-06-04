import React from "react";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">froggymouth</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Создаём цифровые продукты, которые помогают бизнесу расти и
              развиваться. Свяжитесь с нами для обсуждения вашего проекта.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-primary p-2 rounded-full hover:bg-purple-700 transition-colors"
              >
                <Icon name="Mail" size={20} />
              </a>
              <a
                href="#"
                className="bg-primary p-2 rounded-full hover:bg-purple-700 transition-colors"
              >
                <Icon name="Phone" size={20} />
              </a>
              <a
                href="#"
                className="bg-primary p-2 rounded-full hover:bg-purple-700 transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Веб-разработка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Мобильные приложения
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  UI/UX Дизайн
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Консультации
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>hello@froggymouth.ru</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span>Москва, Россия</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 froggymouth.ru. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
