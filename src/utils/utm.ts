/**
 * Função utilitária para preservar os parâmetros de rastreamento (UTMs, SRC, SCK, etc.)
 * passados na URL do anúncio quando o usuário clica para ir ao checkout ou WhatsApp.
 */
export function buildUrlWithParams(baseUrl: string): string {
  if (typeof window === 'undefined' || !baseUrl) return baseUrl;

  try {
    const currentParams = new URLSearchParams(window.location.search);
    if (!currentParams.toString()) {
      return baseUrl;
    }

    // Tratar se a URL base já possui parâmetros ou âncoras
    const parsedUrl = new URL(baseUrl, window.location.origin);
    currentParams.forEach((value, key) => {
      // Adiciona o parâmetro se não existir ou sobrescreve conforme padrão de tráfego
      parsedUrl.searchParams.set(key, value);
    });

    // Se for URL relativa ou absoluta externa
    if (baseUrl.startsWith('http://') || baseUrl.startsWith('https://')) {
      return parsedUrl.toString();
    }
    return `${parsedUrl.pathname}${parsedUrl.search}${parsedUrl.hash}`;
  } catch {
    // Fallback caso a URL seja inválida ou um link customizado
    const separator = baseUrl.includes('?') ? '&' : '?';
    const query = window.location.search.replace(/^\?/, '');
    return query ? `${baseUrl}${separator}${query}` : baseUrl;
  }
}

/**
 * Função de rolagem suave para a seção #planos
 */
export function scrollToPlanos(e?: React.MouseEvent) {
  if (e) {
    e.preventDefault();
  }
  const element = document.getElementById('planos');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    window.location.hash = 'planos';
  }
}
