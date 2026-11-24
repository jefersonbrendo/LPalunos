import React from 'react';
import { LINKS } from '../config/links';
import { buildUrlWithParams, scrollToPlanos } from '../utils/utm';
import type { FaqItem } from './Faq';
import capaDesafio from '../assets/images/bonus-aluno-04.webp';
import capaTreinos from '../assets/images/bonus-aluno-02.webp';
import capaTracker from '../assets/images/bonus-aluno-05.webp';
import fotoApp from '../assets/images/hero/app-na-areia.webp';

/**
 * Seções da página /impulsao que vêm depois do "como você recebe":
 * para quem é → bônus → oferta única (id="planos") → FAQ de impulsão.
 */

/* ---------- PARA QUEM É ---------- */
const PERFIS = [
  { emoji: '🏐', titulo: 'Ataca e para no bloqueio', texto: 'e quer passar a mão por cima da rede.' },
  { emoji: '🏖️', titulo: 'Joga na areia', texto: 'onde o pé afunda e sair do chão custa mais.' },
  { emoji: '🏟️', titulo: 'Joga na quadra', texto: 'e quer chegar mais alto no ataque e no bloqueio.' },
  { emoji: '🏠', titulo: 'Não tem academia', texto: 'e quer treinar em casa, só com o corpo e uma parede.' },
  { emoji: '📏', titulo: 'É baixinho', texto: 'e quer compensar a altura com o salto.' },
];

export const ParaQuemImpulsao: React.FC = () => (
  <section className="py-12 sm:py-16 px-4 max-w-3xl mx-auto">
    <h2 className="text-center text-3xl sm:text-4xl font-black text-[#14110B] tracking-tight uppercase text-balance">
      É pra você que… <span className="destaque">quer pular mais</span>
    </h2>

    <div className="mt-8 space-y-3">
      {PERFIS.map((p) => (
        <button
          key={p.titulo}
          onClick={scrollToPlanos}
          className="w-full flex items-center gap-3 rounded-2xl bg-white border border-[#E6DCC4] p-4 text-left shadow-2xs hover:border-[#FFC60B] transition-colors cursor-pointer"
        >
          <span className="text-2xl leading-none shrink-0" aria-hidden="true">{p.emoji}</span>
          <span className="flex-1 text-sm sm:text-base text-slate-700 font-medium leading-snug">
            <strong className="block font-black uppercase text-[#14110B]">{p.titulo}</strong>
            {p.texto}
          </span>
          <span className="shrink-0 text-xs font-black text-[#E23D2E]">VER OFERTA →</span>
        </button>
      ))}
    </div>
  </section>
);

/* ---------- BÔNUS ---------- */
interface Bonus {
  nome: string;
  texto: string;
  valor: number;
  imagem: string;
  w: number;
  h: number;
}

const BONUS: Bonus[] = [
  {
    nome: 'Desafio Impulsão 21 Dias',
    texto: 'Um treino por dia de perna explosiva e passada certa, na sequência. Você marca o alcance na parede no começo e mede de novo no fim.',
    valor: 47,
    imagem: capaDesafio,
    w: 300,
    h: 402,
  },
  {
    nome: 'App completo de vôlei',
    texto: 'Além do salto, treinos de saque, recepção, levantamento, ataque, bloqueio e defesa, na areia, na quadra e em casa. Pular mais e chegar certo na bola.',
    valor: 97,
    imagem: fotoApp,
    w: 800,
    h: 800,
  },
  {
    nome: 'Treinos Prontos para Seguir',
    texto: 'Abra o treino do dia e siga, do iniciante ao avançado, sem precisar montar nada.',
    valor: 47,
    imagem: capaTreinos,
    w: 300,
    h: 402,
  },
  {
    nome: 'Tracker de Evolução',
    texto: 'Marque seus dias de treino no app e veja a sequência crescer.',
    valor: 27,
    imagem: capaTracker,
    w: 300,
    h: 402,
  },
];

const TOTAL_BONUS = BONUS.reduce((s, b) => s + b.valor, 0);

export const BonusImpulsao: React.FC = () => (
  <section className="relative py-14 sm:py-20 px-4 bg-[#FFC60B] overflow-hidden">
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none"
      style={{ background: 'repeating-linear-gradient(-45deg, transparent 0 22px, rgba(255,255,255,.14) 22px 44px)' }}
    />
    <div className="relative max-w-3xl mx-auto">
      <span className="block text-center text-xs font-black uppercase tracking-wider text-[#14110B]">⭐ Bônus</span>
      <h2 className="mt-1 text-center text-3xl sm:text-4xl font-black text-[#14110B] tracking-tight uppercase text-balance">
        Junto com os treinos de salto, você leva
      </h2>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {BONUS.map((b) => (
          <div key={b.nome} className="rounded-2xl bg-white p-4 shadow-lg flex gap-4 items-start">
            <img
              src={b.imagem}
              width={b.w}
              height={b.h}
              alt={b.nome}
              loading="lazy"
              decoding="async"
              className="w-24 shrink-0 rounded-xl object-cover aspect-[3/4]"
            />
            <div className="min-w-0">
              <h3 className="font-black text-[#14110B] leading-snug">{b.nome}</h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">{b.texto}</p>
              <p className="mt-2 text-xs font-black">
                <span className="text-slate-400 line-through mr-2">R$ {b.valor}</span>
                <span className="text-emerald-700">HOJE GRÁTIS</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- OFERTA ÚNICA ---------- */
const NO_ACESSO = [
  'Exercícios de salto com a animação de cada movimento',
  'Treino pronto de impulsão para ataque e bloqueio',
  'Do iniciante ao avançado, em casa e sem academia',
];

export const OfertaImpulsao: React.FC = () => {
  const checkout = buildUrlWithParams(LINKS.CHECKOUT_24);

  return (
    <section id="planos" className="py-14 sm:py-20 px-4 max-w-xl mx-auto scroll-mt-12">
      <h2 className="text-center text-3xl sm:text-5xl font-black text-[#14110B] tracking-tight uppercase text-balance">
        Comece <span className="destaque">hoje</span>
      </h2>
      <p className="mt-2 text-center text-sm sm:text-base text-slate-600 font-medium">Pagamento único • Acesso imediato</p>

      <div className="mt-8 rounded-3xl bg-white border-2 border-[#FFC60B] p-6 sm:p-8 shadow-xl">
        <ul className="space-y-2.5 text-sm sm:text-base">
          {NO_ACESSO.map((t) => (
            <li key={t} className="flex items-start gap-2 font-bold text-slate-950">
              <span className="shrink-0">✅</span>
              <span>{t}</span>
            </li>
          ))}
          {BONUS.map((b) => (
            <li key={b.nome} className="flex items-start gap-2 font-bold text-[#B87500]">
              <span className="shrink-0">🎁</span>
              <span>
                {b.nome} <span className="text-slate-400 line-through font-medium">(R$ {b.valor})</span>
              </span>
            </li>
          ))}
          <li className="flex items-start gap-2 font-black text-[#14110B]">
            <span className="shrink-0">⚡</span>
            <span>Acesso vitalício + garantia de 7 dias</span>
          </li>
        </ul>

        <div className="mt-6 pt-5 border-t border-slate-200 text-center">
          <p className="text-sm text-slate-500 font-medium">
            Só os bônus valem <span className="line-through">R$ {TOTAL_BONUS}</span>
          </p>
          <p className="mt-1 text-xs font-bold text-[#14110B]">hoje, tudo por apenas</p>
          <p className="text-5xl sm:text-6xl font-black text-[#E23D2E] leading-none mt-1">R$ 24</p>
          <p className="mt-1 text-xs text-slate-600 font-medium">à vista, pagamento único</p>
        </div>

        <a
          href={checkout}
          className="mt-6 block w-full text-center py-4 sm:py-5 px-6 rounded-2xl bg-gradient-to-r from-[#FFC60B] via-[#FFD43B] to-[#FFC60B] text-[#14110B] font-extrabold text-base sm:text-lg tracking-wide shadow-xl hover:brightness-105 active:scale-[0.98] transition-all animate-pulse-cta uppercase border-b-4 border-[#C99A00]"
        >
          QUERO TREINAR MINHA IMPULSÃO
        </a>

        <div className="mt-3 text-center text-xs text-slate-500 font-medium space-y-1">
          <p>🔒 Compra segura • 🛡️ Privacidade</p>
          <p>Acesso enviado por e-mail e WhatsApp após a compra</p>
        </div>
      </div>
    </section>
  );
};

/* ---------- FAQ ---------- */
export const FAQ_IMPULSAO: FaqItem[] = [
  {
    question: 'Como recebo o acesso?',
    answer: 'Assim que o pagamento é confirmado, o acesso chega no seu e-mail e no seu WhatsApp. É só abrir no celular e começar.',
  },
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
    question: 'Serve para vôlei de praia e de quadra?',
    answer: 'Serve. O treino de salto vale para os dois, e o treino pronto é de ataque e bloqueio. No app completo, que vem de bônus, ainda tem treinos na areia, na quadra e em casa.',
  },
  {
    question: 'Sou iniciante. Consigo fazer?',
    answer: 'Consegue. Os saltos são separados em iniciante, intermediário e avançado, e cada um tem a animação do movimento para você copiar.',
  },
  {
    question: 'Sou baixinho. Vale a pena?',
    answer: 'Vale. Quem não tem altura depende ainda mais do salto para chegar na bola, e é isso que esses treinos trabalham.',
  },
  {
    question: 'Tenho mais de 35 anos ou já senti dor no joelho. Posso fazer?',
    answer: 'Salto é exercício de impacto. Se você tem mais de 35 anos, sente dor no joelho ou no tornozelo ou está parado há muito tempo, fale com um médico antes de começar. No app, os saltos são separados por nível, para você começar pelos mais leves.',
  },
  {
    question: 'Funciona em qualquer celular?',
    answer: 'Sim, funciona em Android e iPhone. E depois de aberto uma vez, funciona até sem internet.',
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
