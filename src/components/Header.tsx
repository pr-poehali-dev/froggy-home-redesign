import React from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">froggymouth</h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Главная
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Услуги
            </a>
            <a
              href="#portfolio"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Портфолио
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Контакты
            </a>
          </nav>

          <button className="md:hidden">
            <Icon name="Menu" size={24} className="text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
