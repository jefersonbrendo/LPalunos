import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    question: 'Como recebo o acesso?',
    answer: 'Assim que o pagamento é confirmado, o acesso chega no seu e-mail [e no seu WhatsApp]. É só abrir no celular e começar.',
  },
  {
    question: 'É de areia mesmo ou é treino de quadra adaptado?',
    answer: 'É de areia. Os exercícios foram pensados para a areia, para turma pequena e para o espaço que você tem na praia ou na arena.',
  },
  {
    question: 'Serve para turma de 2, 4 ou 6 alunos?',
    answer: 'Serve. O código de cada exercício mostra para quantos alunos ele funciona, e você filtra pelo tamanho da turma do dia.',
  },
  {
    question: 'Preciso de muito equipamento?',
    answer: 'Não. [A maioria dos exercícios usa só bola, rede e cones ou fita de marcação.]',
  },
  {
    question: 'Já dou aula há anos. Serve para mim?',
    answer: 'Serve. O app não vem te ensinar vôlei. Ele economiza o tempo de montar a aula e traz variações para a sua turma não enjoar.',
  },
  {
    question: 'Funciona em qualquer celular?',
    answer: '[Sim, funciona em Android e iPhone.]',
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
