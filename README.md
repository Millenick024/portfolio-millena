# Portfólio pessoal de Millena Silva

**Aluna:** Millena Silva  
**Curso:** Técnico em Desenvolvimento de Sistemas

## Descrição

Portfólio acadêmico para apresentar meu perfil, minha formação e projetos desenvolvidos durante os estudos. O site possui as seções Perfil, Projetos, Formação e Contato, com menu de navegação por âncoras, carousel de destaques, rodapé e layout responsivo.

## Site e repositório

- Site: https://millenick024.github.io/portfolio-millena/
- Repositório: https://github.com/Millenick024/portfolio-millena

## Tecnologias utilizadas

- HTML5 para estrutura semântica e navegação.
- CSS3 para identidade visual, animações e ajustes responsivos.
- Bootstrap 5.3.8, carregado via CDN, para grid, navbar, botões, cards e utilitários Flexbox.
- JavaScript para filtro, tema e detalhes dos projetos.
- Git e GitHub para versionamento; GitHub Pages como destino de hospedagem.

## Estrutura dos arquivos

- `index.html`: página principal, seções e janela de detalhes.
- `estilo.css`: paleta, temas, ilustrações, transições e responsividade.
- `script.js`: interações da interface.
- `README.md`: documentação do projeto.

As ilustrações dos projetos foram criadas com HTML e CSS, portanto não exigem arquivos de imagem externos. Representam as atividades, não capturas dos sistemas em produção.

## Funcionamento

Abra `index.html` no navegador, com acesso à internet para carregar o Bootstrap. O menu leva às seções da página. Em telas pequenas, a navegação é recolhida pelo componente Collapse do Bootstrap. Os projetos aparecem em duas colunas em telas médias ou maiores e em uma coluna nas menores. Cada botão “Conhecer o projeto” abre um diálogo com descrição e aprendizados. O contato direciona ao perfil público do GitHub; não há envio de mensagens nem coleta de dados.

## Recurso novo principal

### Filtro interativo de projetos

Os botões Todos, Web, Python e Modelagem permitem selecionar a categoria exibida sem recarregar a página. Essa interação torna mais fácil encontrar os projetos por área.

**Implementação:** cada botão possui `data-filter` e cada card possui `data-category`. No `script.js`, `querySelectorAll()` seleciona esses elementos. Um evento de clique compara as categorias e altera a propriedade `hidden` dos cards. O botão selecionado recebe a classe `active` e `aria-pressed="true"`. Um elemento com `role="status"` anuncia a quantidade de projetos exibidos aos leitores de tela. O CSS `[hidden]` retira os cards filtrados do layout.

## Recursos adicionais

- **Carousel de destaques:** três slides apresentam perfil, projetos e formação. Utiliza `.carousel`, `.carousel-inner` e `.carousel-item` do Bootstrap, com botões `data-bs-slide="prev"` e `data-bs-slide="next"`. Não há avanço automático, permitindo que cada pessoa controle a leitura.
- **Tema claro e escuro:** o JavaScript alterna `data-bs-theme` e as variáveis CSS definem as cores. A preferência fica no `localStorage`; `try/catch` mantém a troca funcional se o armazenamento estiver bloqueado.
- **Detalhes dos projetos:** o elemento nativo `dialog` abre com `showModal()` e fecha pelo botão ou pela tecla Escape.
- **Animação nos cards:** `transform` e `transition` criam uma elevação ao passar o mouse. A regra `prefers-reduced-motion` desativa movimentos para visitantes que solicitaram essa preferência.
- **Nova seção Formação:** apresenta os cursos e seus respectivos estados.


## Verificação

Foram verificados no navegador: abertura da página, carregamento do Bootstrap, filtro Python exibindo um único projeto, abertura e fechamento dos detalhes manutenção do tema após recarregar abertura do menu em uma área de 390 pixels de largura e navegação manual do carousel. O site é hospedado no GitHub Pages.

## Referências

- Bootstrap: https://getbootstrap.com/docs/5.3/getting-started/introduction/
- GitHub Pages: https://docs.github.com/en/pages/quickstart
