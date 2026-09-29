/**
 * ============================================================
 *  CONTEÚDO DO PORTFÓLIO — edite apenas este arquivo.
 *  Itens marcados com [PLACEHOLDER] devem ser substituídos.
 *  Obs.: nome/título/descrição para SEO também ficam no <head>
 *  do index.html (buscadores leem de lá).
 * ============================================================
 */
window.PORTFOLIO = {
  profile: {
    name: 'Lucas Krötz',
    role: 'Desenvolvedor de Software',
    tagline: 'Transformo ideias e processos em sistemas eficientes, escaláveis e sob medida.',
    // Caminho da sua foto (ex.: 'assets/img/foto.webp'). Vazio = mostra as iniciais.
    photo: '',
    initials: 'LK',
  },

  // Linhas exibidas no console do Hero (ilustrativas, não são dados reais)
  heroConsole: [
    ['GET', '/api/v1/clientes', '200', '38ms'],
    ['POST', '/webhooks/pagamento', '200', 'recebido'],
    ['JOB', 'GerarBoleto', 'OK', '120ms'],
    ['JOB', 'EmitirNotaFiscal', 'OK', '310ms'],
    ['GET', '/dashboard/financeiro', '200', '54ms'],
    ['TENANT', 'empresa-b › migrate', 'OK', '1.2s'],
    ['POST', '/api/v1/chamados', '201', '41ms'],
    ['JOB', 'ConciliarPagamentos', 'OK', '870ms'],
    ['GET', '/relatorios/vendas.pdf', '200', '220ms'],
  ],

  about: {
    paragraphs: [
      'Sou desenvolvedor de software na Valhalla-Desenvolvimentos, onde trabalho principalmente com sistemas web e aplicações empresariais.',
      'Meu dia a dia envolve construir ERPs, módulos financeiros, emissão de notas fiscais e boletos, integrações com APIs e gateways de pagamento, dashboards, relatórios, controle de clientes e sistemas de chamados.',
      'Prefiro soluções práticas: código organizado, arquitetura que aguenta crescer e sistemas que resolvem o processo real de quem usa.',
    ],
    focus: [
      'Desenvolvimento de sistemas',
      'Soluções empresariais',
      'Automação de processos',
      'Integrações entre sistemas',
      'Desenvolvimento de APIs',
      'Sistemas multi-tenant',
    ],
  },

  skills: [
    { icon: 'server', title: 'Desenvolvimento Backend', text: 'Regras de negócio, filas e serviços com PHP e Laravel.' },
    { icon: 'layout', title: 'Desenvolvimento Frontend', text: 'Interfaces com Blade, Bootstrap, jQuery e AJAX.' },
    { icon: 'plug', title: 'APIs e Integrações', text: 'APIs REST, webhooks e gateways de pagamento.' },
    { icon: 'database', title: 'Banco de Dados', text: 'Modelagem e consultas em MySQL.' },
    { icon: 'grid', title: 'Sistemas ERP', text: 'Financeiro, notas fiscais, boletos, clientes e relatórios.' },
    { icon: 'layers', title: 'Sistemas Multi-Tenant', text: 'Várias empresas na mesma aplicação, com dados isolados.' },
    { icon: 'refresh', title: 'Automação', text: 'Rotinas que tiram tarefas manuais do caminho.' },
    { icon: 'building', title: 'Sistemas Empresariais', text: 'Chamados, dashboards e controles internos.' },
  ],

  // icon: nome do ícone no Devicon (https://devicon.dev). Vazio = sem ícone.
  technologies: [
    { group: 'Backend', items: [['PHP', 'php/php-original'], ['Laravel', 'laravel/laravel-original']] },
    { group: 'Frontend', items: [['HTML', 'html5/html5-original'], ['CSS', 'css3/css3-original'], ['JavaScript', 'javascript/javascript-original'], ['Blade', 'laravel/laravel-original'], ['Bootstrap', 'bootstrap/bootstrap-original'], ['jQuery', 'jquery/jquery-original']] },
    { group: 'Banco de dados', items: [['MySQL', 'mysql/mysql-original']] },
    { group: 'Infraestrutura', items: [['Docker', 'docker/docker-original'], ['Linux', 'linux/linux-original'], ['Nginx', 'nginx/nginx-original']] },
    { group: 'Integrações', items: [['APIs REST', ''], ['Webhooks', ''], ['Gateways de pagamento', '']] },
    { group: 'Outros', items: [['Git', 'git/git-original'], ['GitHub', 'github/github-original'], ['Multi-tenant', '']] },
  ],

  // [PLACEHOLDER] Projetos de exemplo — substitua pelos seus.
  // placeholder: true mostra o selo "Exemplo". image vazio = capa gerada.
  projects: [
    { placeholder: true, category: 'Sistema ERP', name: 'Nome do projeto ERP', description: '[PLACEHOLDER] Descreva o problema, o que o sistema faz e o resultado.', tech: ['Laravel', 'MySQL', 'Bootstrap'], image: '', url: '#' },
    { placeholder: true, category: 'Sistema Financeiro', name: 'Nome do projeto financeiro', description: '[PLACEHOLDER] Ex.: contas a pagar/receber, boletos e conciliação.', tech: ['Laravel', 'APIs REST', 'MySQL'], image: '', url: '#' },
    { placeholder: true, category: 'Plataforma Multi-Tenant', name: 'Nome da plataforma', description: '[PLACEHOLDER] Ex.: várias empresas usando a mesma aplicação.', tech: ['Laravel', 'Docker', 'MySQL'], image: '', url: '#' },
    { placeholder: true, category: 'Dashboard Empresarial', name: 'Nome do dashboard', description: '[PLACEHOLDER] Ex.: indicadores e relatórios para gestão.', tech: ['JavaScript', 'Laravel', 'MySQL'], image: '', url: '#' },
    { placeholder: true, category: 'Integração de APIs', name: 'Nome da integração', description: '[PLACEHOLDER] Ex.: gateway de pagamento via API e webhooks.', tech: ['PHP', 'Webhooks', 'APIs REST'], image: '', url: '#' },
    { placeholder: true, category: 'Atendimento / Chamados', name: 'Nome do sistema de chamados', description: '[PLACEHOLDER] Ex.: abertura, acompanhamento e histórico de chamados.', tech: ['Laravel', 'jQuery', 'AJAX'], image: '', url: '#' },
  ],

  experience: [
    {
      company: 'Valhalla-Desenvolvimentos',
      role: 'Desenvolvedor de Software',
      period: '[PLACEHOLDER] ex.: 2023 — atual',
      description: 'Desenvolvimento de sistemas web e aplicações empresariais: ERP, módulos financeiros, emissão de notas fiscais e boletos, integrações com APIs e gateways de pagamento, dashboards, relatórios e sistemas multi-tenant.',
    },
    // Copie o bloco acima para adicionar mais experiências.
  ],

  services: [
    { icon: 'layout', title: 'Sistemas Web' },
    { icon: 'grid', title: 'Sistemas ERP' },
    { icon: 'code', title: 'APIs' },
    { icon: 'plug', title: 'Integrações' },
    { icon: 'refresh', title: 'Automação de processos' },
    { icon: 'chart', title: 'Dashboards' },
    { icon: 'wallet', title: 'Sistemas financeiros' },
    { icon: 'wrench', title: 'Sistemas personalizados' },
    { icon: 'layers', title: 'Sistemas multi-tenant' },
  ],

  differentials: [
    { title: 'Sob medida', text: 'O sistema segue o seu processo, não o contrário.' },
    { title: 'Código organizado', text: 'Fácil de ler, manter e passar adiante.' },
    { title: 'Integrações com APIs', text: 'Pagamentos, notas fiscais e outros sistemas conectados.' },
    { title: 'Arquitetura escalável', text: 'Preparado para crescer em usuários e em empresas.' },
    { title: 'Automação de processos', text: 'Menos tarefa manual, menos erro.' },
    { title: 'Foco em segurança', text: 'Validação, controle de acesso e dados isolados por empresa.' },
    { title: 'Responsividade', text: 'Funciona no computador, no tablet e no celular.' },
    { title: 'Manutenção e evolução', text: 'Acompanhamento depois da entrega.' },
  ],

  contact: {
    // [PLACEHOLDER] Substitua pelos seus dados. Link vazio = item não aparece.
    whatsapp: { label: '+55 (00) 00000-0000', url: 'https://wa.me/5500000000000' },
    email: { label: 'seuemail@exemplo.com', url: 'mailto:seuemail@exemplo.com' },
    github: { label: 'github.com/seu-usuario', url: 'https://github.com/seu-usuario' },
    linkedin: { label: 'linkedin.com/in/seu-usuario', url: 'https://www.linkedin.com/in/seu-usuario' },
    instagram: { label: '', url: '' },
    // Endpoint do formulário (ex.: Formspree). Vazio = abre o app de e-mail com a mensagem pronta.
    formEndpoint: '',
  },
};
