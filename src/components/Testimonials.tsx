import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Paula Santos",
      salon: "Salão Bella Vita",
      city: "São Paulo - SP",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Antes eu perdia pelo menos 5 clientes por semana por causa do telefone ocupado. Agora com o SalonClick, minhas clientes agendam sozinhas e minha agenda está sempre lotada! Já recuperei o investimento só no primeiro mês.",
      highlight: "Recuperei o investimento no primeiro mês"
    },
    {
      name: "Mariana Costa", 
      salon: "Studio M Hair",
      city: "Rio de Janeiro - RJ",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "O que mais me impressionou foi como minhas clientes se adaptaram rápido. Até as mais velhinhas conseguem agendar sem problema! E eu durmo tranquila sabendo que nunca vai ter dois horários marcados no mesmo tempo.",
      highlight: "Até as clientes mais velhas conseguem usar"
    },
    {
      name: "Juliana Oliveira",
      salon: "Espaço Juliana",
      city: "Belo Horizonte - MG", 
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Meu salão tinha cara de coisa pequena, mas agora com o sistema personalizado e o link próprio, as clientes acham que sou uma rede grande! Meu faturamento aumentou 40% em 3 meses.",
      highlight: "Faturamento aumentou 40% em 3 meses"
    },
    {
      name: "Carla Regina",
      salon: "Salão da Carla",
      city: "Brasília - DF",
      image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "O melhor foi acabar com aquela confusão de papel. Antes eu vivia estressada tentando entender minha própria letra. Agora tudo fica registrado no sistema e posso acessar de qualquer lugar.",
      highlight: "Acabou com a confusão de papéis"
    }
  ];

  const stats = [
    { number: "2.847", label: "Agendamentos realizados" },
    { number: "156", label: "Salões atendidos" },
    { number: "4.9", label: "Avaliação média" },
    { number: "98%", label: "Satisfação das clientes" }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Resultados que falam por si só
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Mais de 150 salões já transformaram seus negócios conosco
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">
            O que as donas de salão estão falando
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-purple-600 font-medium">
                      {testimonial.salon}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {testimonial.city}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <div className="relative">
                  <Quote className="w-8 h-8 text-yellow-200 absolute -top-2 -left-2" />
                  <p className="text-gray-700 leading-relaxed mb-4 pl-6">
                    "{testimonial.text}"
                  </p>
                </div>
                
                <div className="bg-purple-50 rounded-xl p-4 border-l-4 border-purple-500">
                  <p className="text-purple-700 font-bold text-sm">
                    ⭐ {testimonial.highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Before/After Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold text-center mb-12">
            Antes x Depois do SalonClick
          </h3>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="bg-red-500/20 rounded-2xl p-6 mb-4">
                <h4 className="text-2xl font-bold text-red-400 mb-4">😰 ANTES</h4>
                <ul className="text-left space-y-3">
                  <li className="flex items-center space-x-2">
                    <span className="text-red-400">❌</span>
                    <span>Telefone ocupado, clientes desistindo</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-red-400">❌</span>
                    <span>Horários sobrepostos e confusão</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-red-400">❌</span>
                    <span>Papéis perdidos e desorganização</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-red-400">❌</span>
                    <span>Clientes esquecendo agendamentos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-red-400">❌</span>
                    <span>Aparência amadora do negócio</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-green-500/20 rounded-2xl p-6 mb-4">
                <h4 className="text-2xl font-bold text-green-400 mb-4">😍 DEPOIS</h4>
                <ul className="text-left space-y-3">
                  <li className="flex items-center space-x-2">
                    <span className="text-green-400">✅</span>
                    <span>Agendamentos 24h automáticos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-400">✅</span>
                    <span>Zero conflitos de horário</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-400">✅</span>
                    <span>Tudo organizado digitalmente</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-400">✅</span>
                    <span>Controle total dos agendamentos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-400">✅</span>
                    <span>Visual profissional e moderno</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-full font-bold text-xl hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg">
              QUERO ESSA TRANSFORMAÇÃO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;