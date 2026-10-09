# Contexto de continuidade - Caixas Sao Bento

## Projeto

- Diretorio local: `C:\Users\wanderson-asus\Documents\Projetos\caixa dagua`
- Repositorio GitHub: `https://github.com/wandersonweb/caixadagua.git`
- Branch usado: `main`
- Stack: Astro static site.

## Estado do Git

- Ultimo push feito para `origin/main`.
- Commits enviados:
  - `3e41662` - `Improve site visual design`
  - `8d8ed1f` - `Update home images and WhatsApp contact`
- Antes de novos commits, confirmar que o `cwd` e o remoto sao os acima para nao misturar com outros projetos.

## Alteracoes feitas nesta conversa

- Atualizadas as imagens da secao da home `Guias e Conteudos Recentes`.
- Adicionado suporte a imagem desktop e mobile no componente `BlogCard`.
- Removida a secao antiga `Nossos Servicos Especializados` da home.
- Movida a secao `Guias e Conteudos Recentes` para o lugar da secao antiga.
- Removida a secao duplicada de guias que ficava mais abaixo na home.
- Atualizada a imagem principal do painel hero da home para:
  - `/images/blog/1200x675/Consertar-Caixa-Fibra.webp`
- Adicionadas imagens laterais nas paginas/artigos de servico pelo `ServiceLayout`, usando as versoes menores `768x432`.
- Atualizado o telefone/WhatsApp central do site:
  - Telefone exibido: `(31) 99646-5722`
  - Numero bruto: `5531996465722`
  - Link principal: `https://api.whatsapp.com/send/?phone=5531996465722&text=Oi%2C+preciso+de+um+or%C3%A7amento+para+reforma+de+caixa+d%27%C3%A1gua%21&type=phone_number&app_absent=0`

## Arquivos principais alterados

- `src/pages/index.astro`
- `src/components/ui/BlogCard.astro`
- `src/layouts/ServiceLayout.astro`
- `src/data/company.ts`
- `public/images/blog/1200x675/*`
- `public/images/blog/768x432/*`

## Imagens adicionadas

Desktop:
- `public/images/blog/1200x675/Consertar-Caixa-Fibra.webp`
- `public/images/blog/1200x675/Limpeza-de-Caixa-dagua.webp`
- `public/images/blog/1200x675/Reforma-de-Caixa-dagua-de-Concreto.webp`
- `public/images/blog/1200x675/Manutencao-de-Caixa-dagua.webp`
- `public/images/blog/1200x675/Reforma-de-Caixas-dagua.webp`
- `public/images/blog/1200x675/Impermeabilizacao-de-Caixa-dagua.webp`

Mobile:
- `public/images/blog/768x432/Consertar-Caixa-Fibra-M.webp`
- `public/images/blog/768x432/Limpeza-de-Caixa-dagua-M.webp`
- `public/images/blog/768x432/Reforma-de-Caixa-dagua-de-Concreto-M.webp`
- `public/images/blog/768x432/Manutencao-de-Caixa-dagua-M.webp`
- `public/images/blog/768x432/Reforma-de-Caixas-dagua-M.webp`
- `public/images/blog/768x432/Impermeabilizacao-de-Caixa-dagua-M.webp`

## Verificacoes feitas

- `npm run build` passou com sucesso depois das alteracoes.
- `git status --short --branch` ficou limpo depois do push.

## Preferencias e decisoes

- O usuario prefere layout mais visual na home, com cards de imagem.
- O usuario quis evitar conteudo duplicado entre servicos e guias.
- Para imagens dentro dos artigos/paginas, foi escolhida a versao menor `768x432` para ficar mais elegante na lateral e nao ocupar espaco demais.
- Para a home, os cards usam `1200x675` no desktop e `768x432` no mobile.

