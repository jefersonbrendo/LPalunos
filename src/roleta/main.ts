import '@fontsource-variable/inter/wght.css';
import './roleta.css';
import { LINKS } from '../config/links';
import { buildUrlWithParams } from '../utils/utm';

/**
 * Roleta de desconto do back redirect.
 * A roleta sempre para em R$ 10 OFF: o Completo sai de R$ 24 por R$ 14 (checkout próprio).
 * O desconto fica reservado por 10 minutos, contados de verdade para cada pessoa
 * (guardado no navegador). Quando o tempo acaba, o botão volta para o checkout normal de R$ 24.
 */

const FATIAS = [
  { rotulo: ['R$ 10', 'OFF'], cor: '#E23D2E', texto: '#fff', premio: true },
  { rotulo: ['TENTE', 'DE NOVO'], cor: '#14110B', texto: '#FFC60B' },
  { rotulo: ['R$ 3', 'OFF'], cor: '#FFC60B', texto: '#14110B' },
  { rotulo: ['R$ 5', 'OFF'], cor: '#F6F0E1', texto: '#14110B' },
  { rotulo: ['R$ 10', 'OFF'], cor: '#E23D2E', texto: '#fff', premio: true },
  { rotulo: ['TENTE', 'DE NOVO'], cor: '#14110B', texto: '#FFC60B' },
  { rotulo: ['R$ 3', 'OFF'], cor: '#FFC60B', texto: '#14110B' },
  { rotulo: ['R$ 5', 'OFF'], cor: '#F6F0E1', texto: '#14110B' },
];
const PREMIO = 0; // índice da fatia em que a roleta para
const DURACAO_GIRO_MS = 5200;
const MINUTOS_RESERVA = 10;
const CHAVE = 'cda-roleta-desconto-ate';

const ITENS = [
  'App com +420 treinos de vôlei de praia',
  '240 treinos na areia e 195 para fazer em casa',
  'Do iniciante ao avançado, com animação do movimento',
  'Os 5 bônus inclusos',
  'Acesso vitalício',
];

function ler(): number | null {
  try {
    const v = Number(localStorage.getItem(CHAVE));
    return Number.isFinite(v) && v > 0 ? v : null;
  } catch { return null; }
}
function gravar(ate: number): void {
  try { localStorage.setItem(CHAVE, String(ate)); } catch { /* sem armazenamento: o tempo vale só nesta aba */ }
}

function svgRoleta(): string {
  const n = FATIAS.length;
  const ang = 360 / n;
  const r = 150;
  const c = 160;
  const pt = (a: number, raio = r) => {
    const rad = ((a - 90) * Math.PI) / 180;
    return [c + raio * Math.cos(rad), c + raio * Math.sin(rad)];
  };
  const fatias = FATIAS.map((f, i) => {
    const a0 = i * ang - ang / 2;
    const a1 = a0 + ang;
    const [x0, y0] = pt(a0);
    const [x1, y1] = pt(a1);
    const meio = i * ang;
    const [tx, ty] = pt(meio, r * 0.64);
    const grande = f.rotulo[0].startsWith('R$');
    return `<path d="M${c},${c} L${x0},${y0} A${r},${r} 0 0 1 ${x1},${y1} Z" fill="${f.cor}" stroke="#14110B" stroke-width="2.5"/>
      <g transform="translate(${tx} ${ty}) rotate(${meio})" fill="${f.texto}" text-anchor="middle" font-weight="900">
        <text y="${grande ? -1 : -3}" font-size="${grande ? 21 : 13}">${f.rotulo[0]}</text>
        <text y="${grande ? 16 : 12}" font-size="${grande ? 12 : 12}">${f.rotulo[1]}</text>
      </g>`;
  }).join('');
  const luzes = Array.from({ length: 16 }, (_, i) => {
    const [x, y] = pt(i * 22.5, r + 6);
    return `<circle cx="${x}" cy="${y}" r="3" fill="${i % 2 ? '#14110B' : '#FFF8DC'}"/>`;
  }).join('');
  return `<svg viewBox="0 0 320 320" aria-hidden="true">
    <circle cx="${c}" cy="${c}" r="${r + 9}" fill="#F5A300"/>
    <circle cx="${c}" cy="${c}" r="${r + 3}" fill="#14110B"/>
    <g class="roda">${fatias}</g>${luzes}
  </svg>`;
}

function formatar(ms: number): string {
  const s = Math.max(0, Math.ceil(ms / 1000));
  return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
}

function montar(): void {
  const raiz = document.getElementById('roleta')!;
  raiz.innerHTML = `
    <div class="faixa">🏐 Antes de ir, gire a roleta</div>
    <main class="pagina">
      <h1>SEU TREINO PODE SAIR <span class="destaque">MAIS BARATO</span></h1>
      <p class="sub">Um giro só, para quem chegou até aqui. Toque em GIRAR e veja quanto você ganha de desconto no Código da Areia Completo.</p>
      <div class="roleta">
        <span class="ponteiro" aria-hidden="true"></span>
        ${svgRoleta()}
        <button class="centro" type="button" aria-label="Girar a roleta">GIRAR</button>
      </div>
      <button class="dica" type="button">GIRAR A ROLETA</button>
    </main>
    <div class="fundo" hidden></div>
    <section class="resultado" hidden aria-live="polite">
      <div class="topo-resultado">
        <p class="parabens">SEU DESCONTO SAIU</p>
        <p class="off"><span class="destaque">R$ 10 OFF</span></p>
        <p class="produto">no Código da Areia Completo</p>
      </div>
      <div class="corpo-resultado">
        <p class="precos"><s>R$ 24</s> <strong>R$ 14</strong> <span>pagamento único</span></p>
        <ul class="itens">${ITENS.map((t) => `<li>${t}</li>`).join('')}</ul>
        <p class="tempo">⏱️ Desconto guardado para você por <strong class="relogio">10:00</strong></p>
        <a class="cta" href="#">QUERO POR R$ 14</a>
        <p class="seguro">🔒 Pagamento seguro · Garantia de 7 dias · Acesso na hora no WhatsApp</p>
      </div>
    </section>`;

  const roda = raiz.querySelector<SVGGElement>('.roda')!;
  const botoes = raiz.querySelectorAll<HTMLButtonElement>('.dica, .centro');
  const resultado = raiz.querySelector<HTMLElement>('.resultado')!;
  const fundo = raiz.querySelector<HTMLElement>('.fundo')!;
  const relogio = raiz.querySelector<HTMLElement>('.relogio')!;
  const tempo = raiz.querySelector<HTMLElement>('.tempo')!;
  const cta = raiz.querySelector<HTMLAnchorElement>('.cta')!;
  const linkDesconto = buildUrlWithParams(LINKS.CHECKOUT_14_ROLETA);
  const linkNormal = buildUrlWithParams(LINKS.CHECKOUT_24);
  cta.href = linkDesconto;

  let girou = false;
  let intervalo = 0;

  const mostrarResultado = (ate: number) => {
    fundo.hidden = false;
    resultado.hidden = false;
    requestAnimationFrame(() => resultado.classList.add('aberto'));
    const tique = () => {
      const falta = ate - Date.now();
      if (falta <= 0) {
        window.clearInterval(intervalo);
        tempo.textContent = 'O tempo do desconto acabou. O Completo voltou para R$ 24.';
        resultado.classList.add('expirou');
        const precos = resultado.querySelector<HTMLElement>('.precos');
        if (precos) precos.innerHTML = '<strong>R$ 24</strong> <span>pagamento único</span>';

        cta.textContent = 'QUERO O COMPLETO POR R$ 24';
        cta.href = linkNormal;
        return;
      }
      relogio.textContent = formatar(falta);
    };
    tique();
    intervalo = window.setInterval(tique, 1000);
  };

  // Quem já girou antes vê o resultado direto, com o tempo que sobrou.
  const salvo = ler();
  if (salvo) {
    girou = true;
    const anguloFinal = 360 * 6 - PREMIO * (360 / FATIAS.length);
    roda.style.transform = `rotate(${anguloFinal}deg)`;
    mostrarResultado(salvo);
    return;
  }

  const girar = () => {
    if (girou) return;
    girou = true;
    botoes.forEach((b) => (b.disabled = true));
    const reduzir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const anguloFinal = 360 * 6 - PREMIO * (360 / FATIAS.length);
    roda.style.transition = `transform ${reduzir ? 600 : DURACAO_GIRO_MS}ms cubic-bezier(.15,.85,.2,1)`;
    roda.style.transform = `rotate(${anguloFinal}deg)`;
    window.setTimeout(() => {
      const ate = Date.now() + MINUTOS_RESERVA * 60_000;
      gravar(ate);
      mostrarResultado(ate);
    }, (reduzir ? 600 : DURACAO_GIRO_MS) + 350);
  };
  botoes.forEach((b) => b.addEventListener('click', girar));
}

montar();
