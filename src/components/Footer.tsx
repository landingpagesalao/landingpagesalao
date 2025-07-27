import React from 'react';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              SalonClick
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A solução completa para salões que querem crescer sem complicação. 
              Transformamos agendamentos em resultados reais para o seu negócio.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Funcionalidades</a></li>
              <li><a href="#plans" className="text-gray-400 hover:text-white transition-colors">Planos</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-purple-400" />
                <span className="text-gray-400">(81) 99676-3099</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="text-gray-400">contato@salonclick.com.br</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="text-gray-400">São Paulo - SP</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © 2025 SalonClick. Todos os direitos reservados.
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                LGPD
              </a>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-4">
              Seus dados estão protegidos
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
