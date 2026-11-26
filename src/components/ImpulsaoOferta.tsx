import React from 'react';
import { IconeLinha } from './IconeLinha';
import { LINKS } from '../config/links';
import { buildUrlWithParams } from '../utils/utm';
import type { FaqItem } from './Faq';
import capaTreinos from '../assets/images/bonus-aluno-02.webp';
import capaJoelho from '../assets/images/impulsao/bonus-joelho.webp';
import capaMobilidade from '../assets/images/impulsao/bonus-mobilidade.webp';
import capaAterrissagem from '../assets/images/impulsao/bonus-aterrissagem.webp';
import fotoApp from '../assets/images/hero/app-na-areia.webp';

/**
 * Seções da página /impulsao que vêm depois do "como você recebe":
 * para quem é → bônus → oferta única (id="planos") → FAQ de impulsão.
 */

/* ---------- PARA QUEM É ---------- */
const PERFIS = [
  { icone: 'bola' as const, titulo: 'Ataca e para no bloqueio', texto: 'e quer passar a mão por cima da rede.' },
  { icone: 'onda' as const, titulo: 'Joga na areia', texto: 'onde o pé afunda e sair do chão é mais difícil.' },
  { icone: 'quadra' as const, titulo: 'Joga na quadra', texto: 'e quer chegar mais alto no ataque e no bloqueio.' },
  { icone: 'casa' as const, titulo: 'Não tem academia', texto: 'e quer treinar em casa, só com o corpo e uma parede.' },
  { icone: 'peso' as const, titulo: 'Treina na academia', texto: 'e quer um treino de academia feito para pular mais.' },
  { icone: 'regua' as const, titulo: 'É baixo', texto: 'e quer compensar a altura com a impulsão.' },
];

export const ParaQuemImpulsao: React.FC = () => (
  <section className="py-12 sm:py-16 px-4 max-w-3xl mx-auto">
    <h2 className="text-center text-3xl sm:text-4xl font-black text-[#14110B] tracking-tight uppercase text-balance">
      É pra você que… <span className="destaque">quer pular mais</span>
    </h2>

    <div className="mt-8 space-y-3">
      {PERFIS.map((p) => (
        <div
          key={p.titulo}
          className="w-full flex items-center gap-3 rounded-2xl bg-white border border-[#E6DCC4] p-4 text-left shadow-2xs"
        >
          <IconeLinha nome={p.icone} />
          <span className="flex-1 text-sm sm:text-base text-slate-700 font-medium leading-snug">
            <strong className="block font-black uppercase text-[#14110B]">{p.titulo}</strong>
            {p.texto}
          </span>
        </div>
      ))}
    </div>
  </section>
);

/* ---------- BÔNUS ---------- */
interface Bonus {
  nome: string;
  /** Texto mais longo para a lista do card de R$ 24 (quando o nome sozinho não basta). */
  naOferta?: string;
  texto: string;
  valor: number;
  imagem: string;
  w: number;
  h: number;
  destaque?: boolean;
}

const BONUS: Bonus[] = [
  {
    nome: 'Reabilitação de Joelho',
    texto: 'Exercícios para fortalecer a musculatura em volta do joelho (coxa, glúteo e panturrilha), com o passo a passo de cada movimento. Pensado para quem sente o joelho depois do racha ou está voltando a saltar aos poucos. Você começa pelos mais leves e só avança quando o joelho estiver bem. Não substitui médico ou fisioterapeuta: se tem lesão ou dor forte, passe por eles antes.',
    valor: 97,
    imagem: capaJoelho,
    w: 300,
    h: 402,
    destaque: true,
  },
  {
    nome: 'Guia de Aterrissagem Segura',
    texto: 'Como cair depois de cada salto do jeito certo, com a animação do movimento, sem descarregar o peso todo no joelho e no tornozelo.',
    valor: 27,
    imagem: capaAterrissagem,
    w: 300,
    h: 402,
  },
  {
    nome: 'App completo de vôlei',
    naOferta: 'App completo de vôlei: saque, recepção, levantamento, ataque e defesa, para evoluir o resto do seu jogo junto com a impulsão',
    texto: 'Além da impulsão, treinos de saque, recepção, levantamento, ataque, bloqueio e defesa, na areia, na quadra e em casa. Pular mais e chegar certo na bola.',
    valor: 97,
    imagem: fotoApp,
    w: 800,
    h: 800,
  },
  {
    nome: 'Treinos Prontos para Seguir',
    texto: 'Treinos prontos de saque, recepção, levantamento e defesa, do iniciante ao avançado, para os dias em que você quer evoluir o resto do jogo além da impulsão.',
    valor: 47,
    imagem: capaTreinos,
    w: 300,
    h: 402,
  },
  {
    nome: 'Alongamento e Mobilidade',
    texto: '28 exercícios para soltar tornozelo, quadril e ombro, separados para antes e depois do treino. Tornozelo e quadril travados atrapalham a passada e fazem o joelho absorver mais impacto na aterrissagem. Com 5 minutos antes do racha, você entra na quadra com o corpo solto.',
    valor: 27,
    imagem: capaMobilidade,
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
      <h2 className="text-center text-3xl sm:text-4xl font-black text-[#14110B] tracking-tight uppercase text-balance">
        Bônus que você recebe gratuitamente
      </h2>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {BONUS.map((b) =>
          b.destaque ? (
            <div
              key={b.nome}
              className="sm:col-span-2 rounded-2xl bg-[#14110B] text-white p-4 sm:p-6 shadow-xl ring-2 ring-white/20 flex gap-4 sm:gap-6 items-start sm:items-center"
            >
              <img
                src={b.imagem}
                width={b.w}
                height={b.h}
                alt={b.nome}
                loading="lazy"
                decoding="async"
                className="w-24 sm:w-32 shrink-0 rounded-xl object-cover aspect-[3/4] shadow-lg ring-2 ring-[#FFC60B]"
              />
              <div className="min-w-0 flex-1">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FFC60B] text-[#14110B] text-[11px] font-black uppercase tracking-wider">
                  🔥 Bônus Principal
                </span>
                <h3 className="mt-1.5 text-lg sm:text-xl font-black text-white leading-snug">{b.nome}</h3>
                <p className="mt-1.5 text-xs sm:text-sm text-[#DDD5C4] font-medium leading-relaxed">{b.texto}</p>
                <div className="mt-3 pt-2.5 border-t border-white/10 flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
                  <span className="text-xs font-semibold text-[#CFC6B2]">
                    De{' '}
                    <span className="text-base font-black text-white/80 line-through decoration-[#E23D2E] decoration-2">
                      R$ {b.valor}
                    </span>
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500 text-[#14110B] text-xs font-black uppercase tracking-wide shadow-sm">
                    HOJE GRÁTIS
                  </span>
                </div>
              </div>
            </div>
          ) : (
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
              <div className="min-w-0 flex-1 flex flex-col justify-between self-stretch">
                <div>
                  <h3 className="font-black text-[#14110B] leading-snug">{b.nome}</h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">{b.texto}</p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-100 flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="text-xs font-semibold text-slate-500">
                    De{' '}
                    <span className="text-sm font-black text-slate-600 line-through decoration-[#E23D2E] decoration-2">
                      R$ {b.valor}
                    </span>
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-emerald-600 text-white text-[11px] font-black uppercase tracking-wide shadow-2xs">
                    HOJE GRÁTIS
                  </span>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      {/* Barra de ancoragem do valor total dos bônus */}
      <div className="mt-6 rounded-2xl bg-[#14110B] text-white px-5 py-4 sm:px-6 sm:py-5 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div>
          <span className="block text-[11px] font-black uppercase tracking-wider text-[#FFC60B]">
            Valor total dos {BONUS.length} bônus
          </span>
          <p className="mt-0.5 text-sm sm:text-base text-[#DDD5C4] font-medium">
            Separados, esses bônus custariam{' '}
            <strong className="text-white text-lg sm:text-xl font-black line-through decoration-[#E23D2E] decoration-2">
              R$ {TOTAL_BONUS}
            </strong>
          </p>
        </div>
        <span className="shrink-0 inline-flex items-center px-4 py-2 rounded-xl bg-emerald-500 text-[#14110B] text-xs sm:text-sm font-black uppercase tracking-wide shadow-md">
          🎁 TUDO GRÁTIS HOJE
        </span>
      </div>
    </div>
  </section>
);

/* ---------- PLANOS: BÁSICO (PDF) E COMPLETO ---------- */
const NO_ACESSO = [
  '21 dias de treino na sequência certa',
  'Vídeo de cada movimento, do iniciante ao avançado',
  'Treinos em casa, só com o corpo e uma parede',
  'Treinos na academia, montados para pular mais',
  'Treino pronto de passada para ataque e bloqueio',
];

const BASICO_TEM = [
  'Exercícios de impulsão em PDF, com imagem',
  'Separados por nível',
  'Acesso vitalício + garantia de 7 dias',
];

const BASICO_NAO_TEM = [
  'Animação do movimento',
  'Treino pronto e Desafio Impulsão 21 Dias',
  'App completo e bônus',
];

export const OfertaImpulsao: React.FC<{ onOpenUpsell: () => void }> = ({ onOpenUpsell }) => {
  const checkout = buildUrlWithParams(LINKS.CHECKOUT_24);

  return (
    <section id="planos" className="py-14 sm:py-20 px-4 max-w-5xl mx-auto scroll-mt-12">
      <h2 className="text-center text-3xl sm:text-5xl font-black text-[#14110B] tracking-tight uppercase text-balance">
        Escolha <span className="destaque">seu acesso</span>
      </h2>
      <p className="mt-2 text-center text-sm sm:text-base text-slate-600 font-medium">Pagamento único • Acesso imediato</p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch max-w-4xl mx-auto">
        {/* ===== BÁSICO ===== */}
        <div className="order-2 md:order-1 rounded-3xl bg-white border border-[#E6DCC4] p-6 sm:p-8 flex flex-col justify-between shadow-sm">
          <div>
            <span className="inline-block mb-2 text-xs font-black uppercase tracking-wide px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
              📄 VERSÃO PDF
            </span>
            <h3 className="text-2xl font-black text-[#14110B] mt-1">IMPULSÃO EM PDF</h3>
            <div className="mt-4 pb-4 border-b border-slate-200">
              <span className="text-xs text-slate-400 line-through block font-medium">De R$ 47</span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-xs font-bold text-slate-600">por</span>
                <span className="text-3xl sm:text-4xl font-black text-[#14110B]">R$ 10</span>
                <span className="text-[11px] text-slate-500 font-medium">à vista</span>
              </div>
            </div>
            <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-left">
              {BASICO_TEM.map((t) => (
                <li key={t} className="flex items-start gap-2 text-slate-800 font-medium">
                  <span className="shrink-0">✅</span>
                  <span>{t}</span>
                </li>
              ))}
              {BASICO_NAO_TEM.map((t) => (
                <li key={t} className="flex items-start gap-2 text-slate-400 line-through">
                  <span className="shrink-0">❌</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 pt-4 border-t border-slate-200">
            <button
              onClick={onOpenUpsell}
              className="w-full py-4 px-6 rounded-2xl bg-[#14110B] hover:bg-[#2A251A] text-white font-bold text-sm sm:text-base tracking-wide transition-all active:scale-[0.98] cursor-pointer shadow-md"
            >
              COMEÇAR COM O PDF
            </button>
            <div className="mt-3 text-center">
              <span className="text-xs font-bold text-[#B87500] bg-[#FEF3C7] px-3 py-1 rounded-full border border-[#FDE68A] inline-block">
                +R$ 14 e leve o app, o treino pronto e o Desafio
              </span>
            </div>
          </div>
        </div>

        {/* ===== COMPLETO ===== */}
        <div className="order-1 md:order-2 relative rounded-3xl bg-white border-3 border-[#FFC60B] p-6 sm:p-8 flex flex-col justify-between shadow-[0_10px_35px_rgba(255,198,11,0.22)] md:-translate-y-2">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
            <span className="bg-gradient-to-r from-[#FFC60B] via-[#F5A300] to-[#FFC60B] text-slate-950 text-xs sm:text-sm font-black uppercase px-4 py-1 rounded-full shadow-md whitespace-nowrap">
              ⭐ MAIS ESCOLHIDO
            </span>
          </div>
          <div>
            <span className="inline-block mt-2 text-xs font-black uppercase tracking-wide px-3 py-1 rounded-full bg-[#FFF3C4] text-[#14110B] border border-[#FFC60B]">
              📲 VERSÃO APP
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#14110B] mt-1">MÉTODO CÓDIGO DA AREIA</h3>
            <div className="mt-4 pb-4 border-b border-amber-200">
              <span className="text-xs text-slate-400 line-through block font-medium">De R$ 97</span>
              <div className="flex items-baseline gap-1.5 mt-0.5 flex-wrap">
                <span className="text-xs font-bold text-[#14110B]">por apenas</span>
                <span className="text-4xl sm:text-5xl font-black text-[#E23D2E]">R$ 24</span>
                <span className="text-xs font-bold text-[#14110B] bg-[#FFF3C4] px-2 py-0.5 rounded-md">no Pix ou Cartão</span>
              </div>
            </div>
            <ul className="mt-5 space-y-2.5 text-sm sm:text-base text-left">
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
                    {b.naOferta ?? b.nome} <span className="text-slate-400 line-through font-medium">(R$ {b.valor})</span>
                  </span>
                </li>
              ))}
              <li className="flex items-start gap-2 font-black text-[#14110B]">
                <span className="shrink-0">⚡</span>
                <span>Acesso vitalício + garantia de 7 dias</span>
              </li>
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-200">
            <a
              href={checkout}
              className="block w-full text-center py-4 sm:py-5 px-6 rounded-2xl bg-gradient-to-r from-[#FFC60B] via-[#FFD43B] to-[#FFC60B] text-[#14110B] font-extrabold text-base sm:text-lg tracking-wide shadow-xl hover:brightness-105 active:scale-[0.98] transition-all animate-pulse-cta uppercase border-b-4 border-[#C99A00]"
            >
              QUERO TREINAR MINHA IMPULSÃO
            </a>
            <div className="mt-2.5 text-center text-xs font-black text-emerald-800 bg-emerald-50 py-1 px-3 rounded-full border border-emerald-200">
              Bônus de R$ {TOTAL_BONUS} inclusos
            </div>
            <div className="mt-3 text-center text-xs text-slate-500 font-medium space-y-1">
              <p>🔒 Compra segura • 🛡️ Privacidade</p>
              <p>Acesso enviado por e-mail e WhatsApp após a compra</p>
            </div>
          </div>
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
    answer: 'Não precisa. Os exercícios de impulsão usam o peso do corpo, e o treino pronto de impulsão para ataque e bloqueio dá para fazer em casa, só com uma parede. E se você treina na academia, o app tem treinos de academia feitos para a impulsão.',
  },
  {
    question: 'Quanto tempo leva cada treino?',
    answer: 'O treino pronto de impulsão para ataque e bloqueio leva cerca de 20 minutos. É só abrir no app e apertar começar.',
  },
  {
    question: 'Serve para vôlei de praia e de quadra?',
    answer: 'Serve. O treino de impulsão vale para os dois, e o treino pronto é de ataque e bloqueio. No app completo, que vem de bônus, ainda tem treinos na areia, na quadra e em casa.',
  },
  {
    question: 'Sou iniciante. Consigo fazer?',
    answer: 'Consegue. Os exercícios de impulsão são separados em iniciante, intermediário e avançado, e cada um tem a animação do movimento para você copiar.',
  },
  {
    question: 'Sou baixinho. Vale a pena?',
    answer: 'Vale. Quem não tem altura depende ainda mais da impulsão para chegar na bola, e é isso que esses treinos trabalham.',
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
