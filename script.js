'use strict';
// Filtra os projetos sem recarregar a página e informa o resultado ao leitor de tela.
const filtros = document.querySelectorAll('[data-filter]');
const projetos = document.querySelectorAll('.projeto');
filtros.forEach(botao => botao.addEventListener('click', () => {
  filtros.forEach(item => {
    const ativo = item === botao;
    item.classList.toggle('active', ativo);
    item.setAttribute('aria-pressed', String(ativo));
  });
  let total = 0;
  projetos.forEach(projeto => {
    projeto.hidden = botao.dataset.filter !== 'todos' && projeto.dataset.category !== botao.dataset.filter;
    if (!projeto.hidden) total++;
  });
  document.querySelector('#resultado-filtro').textContent = `${total} ${total === 1 ? 'projeto exibido' : 'projetos exibidos'}.`;
}));
// O armazenamento pode estar bloqueado no navegador; nesse caso, o tema ainda funciona.
const tema = document.querySelector('#tema');
function aplicarTema(valor) {
  const escuro = valor === 'dark';
  document.documentElement.dataset.bsTheme = escuro ? 'dark' : 'light';
  tema.setAttribute('aria-pressed', String(escuro));
  tema.setAttribute('aria-label', escuro ? 'Ativar tema claro' : 'Ativar tema escuro');
  tema.innerHTML = `${escuro ? 'Tema claro' : 'Tema escuro'} <span aria-hidden="true">◐</span>`;
}
try { aplicarTema(localStorage.getItem('portfolio-tema') || 'light'); } catch { aplicarTema('light'); }
tema.addEventListener('click', () => {
  const novo = document.documentElement.dataset.bsTheme === 'dark' ? 'light' : 'dark';
  aplicarTema(novo);
  try { localStorage.setItem('portfolio-tema', novo); } catch { /* Mantém o tema da sessão. */ }
});
const dados = {
  favoritos: { categoria: 'Web · HTML e CSS', titulo: 'Meus sites favoritos', descricao: 'Página acadêmica para organizar cinco sites em um único lugar, utilizando títulos, imagens e links.', aprendizado: 'Estrutura semântica de HTML, organização dos arquivos, links externos e estilização com CSS.' },
  tudoweb: { categoria: 'Python · Programação estruturada', titulo: 'Pesquisa TudoWeb', descricao: 'Programa de terminal para uma pesquisa de satisfação com nome, idade e opinião sobre o atendimento: excelente, bom ou ruim.', aprendizado: 'Repetição com for, leitura de dados, validação de opiniões, estruturas de decisão e contadores para o relatório final.' },
  organiza: { categoria: 'Modelagem · Scrum', titulo: 'Organiza+ com Scrum', descricao: 'Proposta acadêmica de organização do desenvolvimento de um aplicativo de tarefas. O trabalho descreve responsabilidades, backlog e sprints com duração de duas semanas.', aprendizado: 'Priorização de requisitos, planejamento de entregas, eventos do Scrum e adaptação às mudanças. Trata-se de planejamento, não de um aplicativo já implementado.' },
  etec: { categoria: 'Modelagem · UML', titulo: 'Matrícula online ETEC', descricao: 'Modelagem de casos de uso para um sistema de matrícula que envolve Aluno, Professor, Secretaria Acadêmica e um sistema de pagamentos.', aprendizado: 'Identificação de atores, funcionalidades, limite do sistema e relacionamentos, com registro das hipóteses sobre o processamento de taxas.' }
};
const dialogo = document.querySelector('#detalhes');
document.querySelectorAll('[data-project]').forEach(botao => botao.addEventListener('click', () => {
  const projeto = dados[botao.dataset.project];
  ['categoria','titulo','descricao','aprendizado'].forEach(campo => {
    document.querySelector(`#detalhes-${campo}`).textContent = projeto[campo];
  });
  dialogo.showModal();
}));
document.querySelector('#fechar-detalhes').addEventListener('click', () => dialogo.close());
dialogo.addEventListener('click', evento => { if (evento.target === dialogo && (evento.offsetX < 0 || evento.offsetX > dialogo.clientWidth || evento.offsetY < 0 || evento.offsetY > dialogo.clientHeight)) dialogo.close(); });
// Fecha a navegação móvel após selecionar uma seção.
document.querySelectorAll('#menu .nav-link').forEach(link => link.addEventListener('click', () => {
  const menu = document.querySelector('#menu');
  if (window.bootstrap && menu.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(menu).hide();
}));
