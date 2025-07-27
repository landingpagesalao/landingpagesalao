import React from 'react';
import { Play, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 lg:px-12">
        <div className="text-2xl font-bold text-white">
          SalonClick
        </div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-white hover:text-purple-400 transition-colors">Funcionalidades</a>
          <a href="#plans" className="text-white hover:text-purple-400 transition-colors">Planos</a>
          <a href="#testimonials" className="text-white hover:text-purple-400 transition-colors">Depoimentos</a>
          <a href="#faq" className="text-white hover:text-purple-400 transition-colors">FAQ</a>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white shadow-lg z-20 md:hidden">
          <div className="flex flex-col space-y-4 p-6">
            <a href="#features" className="text-gray-800 hover:text-purple-600">Funcionalidades</a>
            <a href="#plans" className="text-gray-800 hover:text-purple-600">Planos</a>
            <a href="#testimonials" className="text-gray-800 hover:text-purple-600">Depoimentos</a>
            <a href="#faq" className="text-gray-800 hover:text-purple-600">FAQ</a>
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center px-6 lg:px-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6 leading-tight">
                Transforme seu salão em uma 
                <span className="block bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">máquina de agendamentos</span>
                <span className="block">automática</span>
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed">
                Sistema completo para salões que querem crescer sem complicação
              </p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/30">
              <p className="text-2xl font-bold text-white mb-2">
                🎉 TESTE GRATUITO DE 7 DIAS
              </p>
              <p className="text-gray-200">
                SEM CARTÃO DE CRÉDITO
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                COMEÇAR TESTE GRATUITO
              </button>
              
              <button className="flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all duration-300 border border-white/30">
                <Play size={20} />
                <span>Ver Demonstração</span>
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Agende seu horário</h3>
                  <p className="text-gray-600">Rápido e fácil</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                    <input 
                      type="text" 
                      placeholder="Digite seu nome"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Serviço</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500">
                      <option>Corte + Escova</option>
                      <option>Manicure + Pedicure</option>
                      <option>Pintura</option>
                      <option>Hidratação</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Horário</label>
                    <div className="grid grid-cols-3 gap-2">
                      <button className="py-2 px-3 text-sm border border-gray-300 rounded-lg hover:bg-purple-500 hover:text-white transition-colors">09:00</button>
                      <button className="py-2 px-3 text-sm bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg">10:30</button>
                      <button className="py-2 px-3 text-sm border border-gray-300 rounded-lg hover:bg-purple-500 hover:text-white transition-colors">14:00</button>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-bold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105">
                    Confirmar Agendamento
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-110 animate-pulse">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;