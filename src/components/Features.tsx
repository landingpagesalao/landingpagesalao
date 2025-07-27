import React from 'react';
import { Smartphone, Settings, CreditCard, BarChart3, Globe, Wrench, MapPin, Clock, Shield, Headphones } from 'lucide-react';

const Features = () => {
  const clientFeatures = [
    {
      icon: <Smartphone className="w-8 h-8 text-blue-500" />,
      title: "Agendamento simples em 3 passos",
      description: "Nome, serviço, horário - pronto! Seus clientes conseguem agendar em menos de 2 minutos"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "Escolha de serviços e horários em tempo real",
      description: "Só aparecem os horários realmente disponíveis - sem confusão, sem conflitos"
    },
    {
      icon: <MapPin className="w-8 h-8 text-blue-500" />,
      title: "Localização integrada com Google Maps",
      description: "Seus clientes chegam fácil no seu salão com a localização exata"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-blue-500" />,
      title: "Interface responsiva",
      description: "Funciona perfeitamente em celular, tablet e computador"
    }
  ];

  const adminFeatures = [
    {
      icon: <Settings className="w-8 h-8 text-yellow-500" />,
      title: "Controle total de horários",
      description: "Sistema evita conflitos e sobreposições automaticamente - nunca mais duas clientes no mesmo horário"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-yellow-500" />,
      title: "Serviços ilimitados",
      description: "Adicione quantos serviços quiser com horários específicos para cada um"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-yellow-500" />,
      title: "Formas de pagamento flexíveis",
      description: "PIX, cartão, dinheiro - você escolhe as opções que aceita"
    },
    {
      icon: <Shield className="w-8 h-8 text-yellow-500" />,
      title: "Gestão completa de agendamentos",
      description: "Confirme quem pagou, vai pagar ou ficou fiado - tudo sob controle"
    },
    {
      icon: <Globe className="w-8 h-8 text-yellow-500" />,
      title: "Domínio personalizado",
      description: "salonclick.com.br/seusalao - link exclusivo e profissional"
    },
    {
      icon: <Wrench className="w-8 h-8 text-yellow-500" />,
      title: "Sistema personalizado",
      description: "Com o nome do seu salão - seus clientes vão amar!"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Funcionalidades que fazem a diferença
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tudo que você precisa para ter um salão organizado e clientes satisfeitas
          </p>
        </div>

        {/* Client Features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-full mb-4 border border-purple-400/30">
              <Smartphone className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Para seus clientes
            </h3>
            <p className="text-lg text-gray-600">
              Experiência simples e intuitiva
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {clientFeatures.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-white/20 backdrop-blur-sm rounded-lg p-3 border border-white/30">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-3">
                      ✅ {feature.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Admin Features */}
        <div>
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-500/20 rounded-full mb-4 border border-pink-400/30">
              <Settings className="w-8 h-8 text-pink-400" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Painel Administrativo
            </h3>
            <p className="text-lg text-gray-600">
              Controle total na palma da sua mão
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adminFeatures.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4">
                    🎯 {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Demo Section */}
        <div className="mt-20 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Veja como é simples para seus clientes agendarem
          </h3>
          <p className="text-xl mb-8 text-gray-200">
            Interface intuitiva que qualquer pessoa consegue usar
          </p>
          
          <div className="max-w-md mx-auto bg-white rounded-2xl p-6 text-gray-800">
            <div className="text-center mb-6">
              <h4 className="text-xl font-bold mb-2">Agendar Horário</h4>
              <p className="text-gray-600 text-sm">Salão Bella Donna</p>
            </div>
            
            <div className="space-y-4 text-left">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">1. Nome do cliente</label>
                <div className="bg-gray-100 rounded-lg p-3 text-gray-500">Maria Silva</div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">2. Escolha o serviço</label>
                <div className="bg-gray-100 rounded-lg p-3 text-gray-500">Corte + Escova - R$ 45,00</div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">3. Selecione o horário</label>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-gray-100 p-2 rounded text-center text-sm">09:00</div>
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-2 rounded text-center text-sm font-bold">10:30</div>
                  <div className="bg-gray-100 p-2 rounded text-center text-sm">14:00</div>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-bold">
                ✨ Confirmar Agendamento
              </button>
            </div>
          </div>
          
          <p className="mt-8 text-lg text-gray-200">
            📍 Rua das Flores, 123 - Centro (Google Maps integrado)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;