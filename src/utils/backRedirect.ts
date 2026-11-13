/**
 * Back redirect: quando a pessoa aperta "voltar" na landing, ela vai para a roleta de desconto
 * (/roleta) em vez de sair do site. Acontece uma vez por sessão do navegador.
 *
 * Como funciona: a página cria uma entrada extra no histórico. O "voltar" consome essa entrada
 * (disparando popstate) e aí redirecionamos para a roleta, levando os parâmetros de UTM.
 *
 * O Chrome ignora entradas de histórico criadas sem nenhuma interação da pessoa com a página.
 * Por isso, além de criar a entrada ao carregar, criamos de novo no primeiro toque ou tecla.
 */
const CHAVE_FEITO = 'cda-back-redirect-feito';

function jaFeito(): boolean {
  try { return sessionStorage.getItem(CHAVE_FEITO) === '1'; } catch { return false; }
}
function marcarFeito(): void {
  try { sessionStorage.setItem(CHAVE_FEITO, '1'); } catch { /* sem armazenamento: segue sem lembrar */ }
}

export function iniciarBackRedirect(): void {
  if (typeof window === 'undefined' || !window.history?.pushState) return;
  if (jaFeito()) return;

  const destino = `/roleta${window.location.search}`;
  const criarEntrada = () => {
    try { window.history.pushState({ cdaBack: true }, '', window.location.href); } catch { /* ignora */ }
  };

  criarEntrada();

  let criouComInteracao = false;
  const aoInteragir = () => {
    if (criouComInteracao) return;
    criouComInteracao = true;
    criarEntrada();
    window.removeEventListener('pointerdown', aoInteragir);
    window.removeEventListener('keydown', aoInteragir);
  };
  window.addEventListener('pointerdown', aoInteragir, { passive: true });
  window.addEventListener('keydown', aoInteragir);

  window.addEventListener('popstate', () => {
    if (jaFeito()) return;
    marcarFeito();
    window.location.replace(destino);
  });
}
