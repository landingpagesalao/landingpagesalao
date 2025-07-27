import React, { useState } from 'react';
import { Download, Gift, CheckCircle } from 'lucide-react';

const LeadCapture = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    salonName: '',
    city: '',
    source: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your lead capture system
    console.log('Lead data:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center text-white">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <CheckCircle className="w-16 h-16 mx-auto mb-6 text-white" />
            <h2 className="text-4xl font-bold mb-6">
              Parabéns! Você está no caminho certo! 🎉
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Enviamos o e-book para seu WhatsApp e também as instruções para começar seu teste gratuito de 7 dias!
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <p className="text-lg font-bold mb-2">
                🎁 Bônus Especial
              </p>
              <p>
                Por ser uma das primeiras, você ganhou 50% de desconto no primeiro mês!
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Benefit */}
          <div className="text-white">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6">
              <Gift className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ganhe nosso e-book
              <span className="block bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">100% Gratuito!</span>
            </h2>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                📚 "10 Estratégias para Aumentar a Receita do seu Salão"
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Como atrair mais clientes</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Técnicas para aumentar o ticket médio</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Como fidelizar clientes e aumentar a frequência</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Estratégias de precificação que funcionam</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Como usar as redes sociais para vender mais</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-purple-500/20 rounded-xl p-6 border border-purple-500/30">
              <p className="text-purple-300 font-bold text-lg">
                🎁 Bônus: Acesso antecipado ao teste gratuito de 7 dias!
              </p>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <Download className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Baixe grátis agora!
              </h3>
              <p className="text-gray-600">
                Preencha os dados abaixo e receba o e-book no seu WhatsApp
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome completo *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400/50"
                  placeholder="Digite seu nome completo"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  WhatsApp *
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  required
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400/50"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome do seu salão *
                </label>
                <input
                  type="text"
                  name="salonName"
                  required
                  value={formData.salonName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400/50"
                  placeholder="Digite o nome do seu salão"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cidade *
                </label>
                <input
                  type="text"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400/50"
                  placeholder="Sua cidade - UF"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Como soube de nós?
                </label>
                <select
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400/50"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="google">Google</option>
                  <option value="facebook">Facebook</option>
                  <option value="instagram">Instagram</option>
                  <option value="whatsapp">WhatsApp</option>
                  <option value="indicacao">Indicação</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg"
              >
                📚 BAIXAR E-BOOK GRATUITO
              </button>

              <p className="text-xs text-gray-500 text-center">
                Seus dados estão seguros. Não fazemos spam.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCapture;
