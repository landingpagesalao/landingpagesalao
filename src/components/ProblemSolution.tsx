import React from 'react';
import { AlertCircle, CheckCircle, Clock, Calendar, Phone, Users } from 'lucide-react';

const ProblemSolution = () => {
  const problems = [
    {
      icon: <Phone className="w-8 h-8 text-red-500" />,
      title: "Cansada de perder clientes por telefone ocupado?",
      description: "Seus clientes tentam ligar e não conseguem, acabam indo para a concorrência"
    },
    {
      icon: <Calendar className="w-8 h-8 text-red-500" />,
      title: "Horários sobrepostos causando confusão?",
      description: "Duas clientes no mesmo horário, situações constrangedoras e clientes insatisfeitas"
    },
    {
      icon: <Clock className="w-8 h-8 text-red-500" />,
      title: "Clientes esquecendo dos agendamentos?",
      description: "Horários vagos, agenda desorganizada e perda de faturamento"
    },
    {
      icon: <Users className="w-8 h-8 text-red-500" />,
      title: "Controle manual virando uma bagunça?",
      description: "Papéis perdidos, anotações confusas e dor de cabeça todo dia"
    }
  ];

  const solutions = [
    {
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      title: "Sistema funciona 24 horas por dia",
      description: "Seus clientes podem agendar a qualquer hora, mesmo quando você está dormindo"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      title: "Controle automático de horários",
      description: "Impossível marcar dois clientes no mesmo horário - o sistema não permite"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      title: "Interface simples e intuitiva",
      description: "Suas clientes conseguem agendar em menos de 2 minutos, sem complicação"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      title: "Organização profissional",
      description: "Tudo registrado, organizadoe acessível de qualquer lugar"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Problems Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Você conhece essas situações?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Se você é dona de salão, provavelmente já passou por essas frustrações...
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-red-500">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {problem.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Solution Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6">
            <AlertCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Chegou a solução que você precisava!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            O SalonClick resolve todos esses problemas de uma vez por todas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-500">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {solution.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-12 text-white border border-white/20">
            <h3 className="text-3xl font-bold mb-4">
              Pare de sofrer com agendamentos desorganizados!
            </h3>
            <p className="text-xl mb-8 text-gray-200">
              Teste gratuitamente por 7 dias e veja a diferença
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-full font-bold text-xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
              QUERO TESTAR AGORA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;