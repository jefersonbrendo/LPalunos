import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    question: 'Como recebo o acesso?',
    answer: 'Assim que o pagamento é confirmado, o acesso chega no seu e-mail e no seu WhatsApp. É só abrir no celular e começar.',
  },
  {
    question: 'É de vôlei de praia mesmo ou é treino de quadra adaptado?',
    answer: 'É de vôlei de praia. Os 240 treinos foram feitos para a areia: jogo em dupla, deslocamento na areia fofa, saque e recepção com vento e side-out do jogo de praia. Não é treino de quadra adaptado.',
  },
  {
    question: 'Sou iniciante, nunca treinei. Serve para mim?',
    answer: 'Serve. Os treinos vão do iniciante ao avançado, cada um tem uma versão mais fácil, e o Plano de 30 Dias começa do primeiro toque na bola.',
  },
  {
    question: 'Já jogo há um tempo. Vou aprender algo novo?',
    answer: 'Vai. São 240 treinos na areia em 15 categorias, com nível avançado e versão mais difícil de cada exercício, para você sair do mesmo treino de sempre.',
  },
  {
    question: 'Preciso de alguém para treinar comigo?',
    answer: 'Não. Cada exercício mostra para quantas pessoas serve, e tem treino para fazer sozinho, em dupla ou com a galera.',
  },
  {
    question: 'Não tenho quadra perto. Consigo treinar?',
    answer: 'Consegue. São 195 treinos para fazer em casa, com bola na parede, impulsão, força e agilidade, sem precisar de quadra.',
  },
  {
    question: 'Preciso de muito equipamento?',
    answer: 'Não. Em casa, mais da metade dos treinos usa só o corpo, e os outros pedem uma bola ou uma parede. Na areia, os treinos usam bola e, em boa parte, cones para marcar o espaço, que você pode trocar por chinelos ou garrafas.',
  },
  {
    question: 'Serve para quem dá aula ou para ajudar meu filho?',
    answer: 'Serve. O app é usado por quem joga e por quem ensina: cada exercício mostra o passo a passo, o erro mais comum e os pontos de atenção, o que facilita explicar para outra pessoa.',
  },
  {
    question: 'Funciona em qualquer celular?',
    answer: 'Sim, funciona em Android e iPhone. E depois de aberto uma vez, funciona até sem internet na areia.',
  },
  {
    question: 'É pagamento único?',
    answer: 'Sim. Você paga uma vez e o acesso é vitalício, sem mensalidade.',
  },
  {
    question: 'Como funciona a garantia?',
    answer: 'Você tem 7 dias para testar. Se não gostar, é só chamar o suporte e devolvemos todo o valor.',
  },
];

export const Faq: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };


  return (
    <section className="py-12 sm:py-16 px-4 max-w-3xl mx-auto">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-[#0E4B75] tracking-tight uppercase">
          PERGUNTAS FREQUENTES
        </h2>
      </div>

      {/* Accordion List */}
      <div className="mt-8 space-y-3">
        {FAQ_DATA.map((item, idx) => {
          const isOpen = openIndices.includes(idx);
          return (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-[#E2DBC9] overflow-hidden transition-all duration-200 shadow-2xs"
            >
              <button
                onClick={() => toggleIndex(idx)}
                className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left font-bold text-sm sm:text-base text-[#0E4B75] hover:text-[#062842] transition-colors cursor-pointer"
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#FF9F1C]' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 bg-[#FAF7F0] font-medium">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
