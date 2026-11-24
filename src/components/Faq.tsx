import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FaqItem {
  question: string;
  answer: string;
}

/** Perguntas de impulsão, mostradas logo depois de "Como recebo o acesso?" na página /impulsao. */
export const FAQ_IMPULSAO: FaqItem[] = [
  {
    question: 'Quantos centímetros eu vou subir?',
    answer: 'Depende de onde você começa e de quanto treina, por isso a gente não promete um número. O Desafio Impulsão 21 Dias começa e termina com você marcando o seu alcance na parede, para ver a sua diferença na sua própria medida.',
  },
  {
    question: 'Preciso de academia ou de peso?',
    answer: 'Não. Os exercícios de salto usam o peso do corpo, e o treino pronto de impulsão para ataque e bloqueio dá para fazer em casa, só com uma parede.',
  },
  {
    question: 'Quanto tempo leva cada treino?',
    answer: 'O treino pronto de impulsão para ataque e bloqueio leva cerca de 20 minutos. É só abrir no app e apertar começar.',
  },
  {
    question: 'Tenho mais de 35 anos ou já senti dor no joelho. Posso fazer?',
    answer: 'Salto é exercício de impacto. Se você tem mais de 35 anos, sente dor no joelho ou no tornozelo ou está parado há muito tempo, fale com um médico antes de começar. No app, os saltos são separados por nível, para você começar pelos mais leves.',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    question: 'Como recebo o acesso?',
    answer: 'Assim que o pagamento é confirmado, o acesso chega no seu e-mail e no seu WhatsApp. É só abrir no celular e começar.',
  },
  {
    question: 'Serve para vôlei de praia e também para vôlei de quadra?',
    answer: 'Funciona para ambos! Tanto para quem joga vôlei de praia quanto para quem joga vôlei de quadra. Os treinos trabalham todos os fundamentos (saque, recepção, levantamento, ataque, bloqueio e defesa), controle de bola, impulsão e agilidade para você evoluir na areia e na quadra.',
  },
  {
    question: 'Sou iniciante, nunca treinei. Serve para mim?',
    answer: 'Serve. Os treinos vão do iniciante ao avançado, cada um tem uma versão mais fácil, e o Plano de 21 Dias começa do primeiro toque na bola.',
  },
  {
    question: 'Já jogo há um tempo. Vou aprender algo novo?',
    answer: 'Vai. São +420 treinos, 240 deles na areia em 15 categorias, com nível avançado e versão mais difícil de cada exercício, para você sair do mesmo treino de sempre.',
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
    question: 'Sou baixinho. Vale a pena?',
    answer: 'Vale. No vôlei de quadra e de praia, recepção, defesa e leitura de jogo pesam muito, e o app tem treinos de cada um desses fundamentos, do iniciante ao avançado.',
  },
  {
    question: 'Tenho vergonha de quinar a bola na frente da galera. Isso me ajuda?',
    answer: 'Ajuda. Você pode treinar sozinho, em casa ou na parede, com os 195 treinos sem quadra, e voltar para o jogo com muito mais repetição nos fundamentos.',
  },
  {
    question: 'Funciona em qualquer celular?',
    answer: 'Sim, funciona em Android e iPhone. E depois de aberto uma vez, funciona até sem internet na quadra ou na areia.',
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

export const Faq: React.FC<{ extras?: FaqItem[] }> = ({ extras }) => {
  const itens = extras ? [FAQ_DATA[0], ...extras, ...FAQ_DATA.slice(1)] : FAQ_DATA;
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };


  return (
    <section className="py-12 sm:py-16 px-4 max-w-3xl mx-auto">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-[#14110B] tracking-tight uppercase">
          PERGUNTAS FREQUENTES
        </h2>
      </div>

      {/* Accordion List */}
      <div className="mt-8 space-y-3">
        {itens.map((item, idx) => {
          const isOpen = openIndices.includes(idx);
          return (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-[#E6DCC4] overflow-hidden transition-all duration-200 shadow-2xs"
            >
              <button
                onClick={() => toggleIndex(idx)}
                className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left font-bold text-sm sm:text-base text-[#14110B] hover:text-[#000000] transition-colors cursor-pointer"
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#FFC60B]' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 bg-[#F6F0E1] font-medium">
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
