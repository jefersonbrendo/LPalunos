/**
 * CONFIGURAÇÃO DOS LINKS E CHECKOUTS
 * 
 * Substitua os valores abaixo com os seus links reais da Kiwify, Hotmart, Eduzz, WhatsApp, etc.
 * Os parâmetros de UTM que estiverem na URL da página serão preservados automaticamente!
 */

export const LINKS = {
  // Checkout do Plano Básico (R$ 10) - caso a pessoa decline o upsell no pop-up
  CHECKOUT_10: 'https://pay.lowify.com.br/checkout.php?product_id=CFtsW4',

  // Checkout da Oferta Especial do Pop-up (R$ 15)
  CHECKOUT_15: 'https://pay.lowify.com.br/go.php?offer=e02f6178',

  // Checkout do Plano Completo com 240 exercícios + bônus (R$ 24)
  CHECKOUT_24: 'https://pay.lowify.com.br/go.php?offer=ff641e69',

  // Link do WhatsApp de suporte (ex: https://wa.me/5511999999999?text=...)
  WHATSAPP: 'https://wa.me/5500000000000?text=Ol%C3%A1%21+Tenho+d%C3%BAvidas+sobre+o+C%C3%B3digo+da+Areia',

  // Link do vídeo demonstrativo de 1 min (pode ser YouTube, Vimeo, Loom ou arquivo mp4)
  VIDEO: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
};
