/**
 * ============================================================
 *  CONTEÚDO DO PORTFÓLIO — edite apenas este arquivo.
 *  Obs.: nome/título/descrição para SEO também ficam no <head>
 *  do index.html (buscadores leem de lá).
 * ============================================================
 */
window.PORTFOLIO = {
  profile: {
    name: 'Lucas Krötz',
    role: 'Desenvolvedor de Sistemas',
    headline: 'Desenvolvo sistemas web, APIs, integrações e automações para empresas.',
    summary: 'ERPs, módulos financeiros, emissão de NFSe e boletos, plataformas multi-tenant e integrações com serviços externos, em PHP e Laravel.',
    // Caminho da sua foto (quadrada, ~800×800). Se o arquivo não existir, mostra as iniciais.
    photo: 'assets/img/lucas-krotz.jpg',
    initials: 'LK',
  },

  // Linhas do log no card do Hero (ilustrativas, não são dados reais)
  heroConsole: [
    ['POST', '/webhooks/pagamento', '200'],
    ['JOB', 'EmitirNFSe', 'OK'],
    ['JOB', 'GerarBoleto', 'OK'],
    ['GET', '/api/v1/clientes', '200'],
    ['TENANT', 'empresa-b › migrate', 'OK'],
    ['POST', '/api/v1/chamados', '201'],
    ['JOB', 'ConciliarPagamentos', 'OK'],
  ],

  about: {
    paragraphs: [
      'Sou desenvolvedor na Valhalla-Desenvolvimentos, onde construo e mantenho sistemas web e aplicações empresariais.',
      'Trabalho do banco de dados à interface: modelo os dados, escrevo as regras de negócio, exponho APIs, integro serviços externos e automatizo rotinas que antes eram manuais. Também assumo sistemas existentes para corrigir, evoluir e adicionar funcionalidades complexas.',
    ],
    areas: [
      'Desenvolvimento de sistemas',
      'Aplicações web',
      'Sistemas empresariais e ERP',
      'APIs e integrações',
      'Bancos de dados',
      'Automação de processos',
      'Funcionalidades complexas',
      'Integração com serviços externos',
      'Manutenção e evolução de sistemas',
      'Soluções multi-tenant',
    ],
  },

  experience: [
    {
      company: 'Valhalla-Desenvolvimentos',
      role: 'Desenvolvedor de Software',
      period: 'Atual',
      description: 'Sistemas web e aplicações empresariais: ERP, módulos financeiros, NFSe, boletos, integrações com APIs e gateways de pagamento, dashboards, relatórios e plataformas multi-tenant.',
    },
    // Copie o bloco acima para adicionar mais experiências.
  ],

  // Stack & Skills. icon = caminho no Devicon (https://devicon.dev); vazio = marcador simples.
  // span: 'full' ocupa a linha inteira no desktop.
  // Grade de 2 colunas: mantenha um número par de cards antes do 'full'.
  stack: [
    {
      group: 'Backend', icon: 'server',
      items: [['PHP', 'php/php-original'], ['Laravel', 'laravel/laravel-original'], ['Python', 'python/python-original'], ['Go', 'go/go-original'], ['Node.js', 'nodejs/nodejs-original'], ['Eloquent', ''], ['APIs REST', ''], ['Autenticação', ''], ['Multi-tenancy', '']],
    },
    {
      group: 'Banco de dados', icon: 'database',
      items: [['MySQL', 'mysql/mysql-original'], ['PostgreSQL', 'postgresql/postgresql-original'], ['SQL', ''], ['Modelagem de dados', ''], ['Queries complexas', ''], ['Migrations', ''], ['Relacionamentos', '']],
    },
    {
      group: 'Infraestrutura', icon: 'box',
      items: [['Docker', 'docker/docker-original'], ['Laravel Sail', 'laravel/laravel-original'], ['Linux', 'linux/linux-original'], ['Ubuntu', 'ubuntu/ubuntu-original'], ['Nginx', 'nginx/nginx-original'], ['Git', 'git/git-original']],
    },
    {
      group: 'Frontend', icon: 'layout',
      items: [['HTML', 'html5/html5-original'], ['CSS', 'css3/css3-original'], ['JavaScript', 'javascript/javascript-original'], ['TypeScript', 'typescript/typescript-original'], ['React', 'react/react-original'], ['jQuery', 'jquery/jquery-original'], ['Bootstrap', 'bootstrap/bootstrap-original'], ['Blade', 'laravel/laravel-original'], ['AJAX', ''], ['DataTables', ''], ['Select2', ''], ['Chart.js', 'chartjs/chartjs-original']],
    },
    {
      group: 'Integrações', icon: 'plug', span: 'full',
      items: [['APIs REST', ''], ['Webhooks', ''], ['Gateways de pagamento', ''], ['Emissão de boletos', ''], ['NFSe', ''], ['WhatsApp', ''], ['Google OAuth', 'google/google-original'], ['Serviços financeiros', '']],
    },
  ],

  // Experiência técnica: módulos de sistema que já desenvolvo
  systems: [
    { group: 'Gestão', icon: 'grid', items: ['Sistemas ERP', 'Gestão de clientes', 'Gestão de produtos', 'Kanban', 'Chamados'] },
    { group: 'Financeiro', icon: 'wallet', items: ['Contas a pagar e receber', 'Boletos', 'Integrações bancárias', 'NFSe', 'Sistemas financeiros'] },
    { group: 'Plataforma', icon: 'layers', items: ['Multi-tenancy', 'Usuários e permissões', 'APIs', 'Webhooks'] },
    { group: 'Dados e automação', icon: 'chart', items: ['Relatórios', 'Dashboards', 'Automações'] },
  ],

  // Categorias disponíveis no filtro de projetos
  projectFilters: ['ERP', 'Web', 'Backend', 'APIs', 'Integrações', 'Automação', 'Dashboards'],

  // Projetos (conteúdo de exemplo — troque pelos seus quando quiser).
  // image: capa em assets/img/projetos/. Sem image, é gerado um mockup conforme
  // preview: 'table' | 'dashboard' | 'kanban' | 'api' | 'finance'.
  // placeholder: true mostra o selo "Exemplo". url vazio = sem botão "Ver projeto".
  projects: [
    {
      name: 'Gestor ERP', categories: ['ERP', 'Web', 'Backend'], preview: 'table',
      description: 'ERP web para centralizar clientes, produtos, pedidos e relatórios de pequenas e médias empresas.',
      features: ['Cadastro de clientes e produtos com busca e filtros', 'Pedidos com histórico e status', 'Perfis de usuário com permissões por módulo'],
      tech: ['Laravel', 'MySQL', 'Bootstrap', 'DataTables'], image: 'assets/img/projetos/erp.png', url: 'https://lucaskrotz.github.io/Sistemas-de-Gest-o/erp/',
    },
    {
      name: 'Financeiro Integrado', categories: ['ERP', 'Integrações', 'Backend'], preview: 'finance',
      description: 'Módulo de contas a pagar e receber com emissão de boletos e NFS-e integrada ao ERP.',
      features: ['Geração e baixa automática de boletos', 'Emissão de NFS-e a partir do recebimento', 'Painel de vencidos e previsão de caixa'],
      tech: ['Laravel', 'MySQL', 'APIs REST', 'Webhooks'], image: 'assets/img/projetos/financeiro.png', url: 'https://lucaskrotz.github.io/Sistemas-de-Gest-o/financeiro/',
    },
    {
      name: 'Plataforma Multi-Tenant', categories: ['Web', 'Backend'], preview: 'table',
      description: 'Aplicação SaaS em que várias empresas usam o mesmo sistema, cada uma com seus dados isolados.',
      features: ['Banco de dados isolado por empresa', 'Planos, usuários e permissões por tenant', 'Criação de novas empresas automatizada'],
      tech: ['Laravel', 'Docker', 'MySQL', 'Nginx'], image: 'assets/img/projetos/multitenant.png', url: 'https://lucaskrotz.github.io/Sistemas-de-Gest-o/multitenant/',
    },
    {
      name: 'Painel de Indicadores', categories: ['Dashboards', 'Web'], preview: 'dashboard',
      description: 'Dashboard gerencial com faturamento, ticket médio, inadimplência e chamados em um só lugar.',
      features: ['Gráficos interativos por período', 'Indicadores atualizados a partir do ERP', 'Exportação de relatórios'],
      tech: ['Chart.js', 'Laravel', 'MySQL', 'AJAX'], image: 'assets/img/projetos/indicadores.png', url: 'https://lucaskrotz.github.io/Sistemas-de-Gest-o/indicadores/',
    },
    {
      name: 'Hub de Pagamentos', categories: ['APIs', 'Integrações', 'Automação'], preview: 'api',
      description: 'Camada de integração com gateway de pagamento que recebe webhooks e dispara as ações do sistema.',
      features: ['Recebimento e validação de webhooks', 'Baixa de títulos e emissão de NFS-e automáticas', 'Notificações de cobrança via WhatsApp'],
      tech: ['PHP', 'Laravel', 'Webhooks', 'APIs REST'], image: 'assets/img/projetos/pagamentos.png', url: 'https://lucaskrotz.github.io/Sistemas-de-Gest-o/pagamentos/',
    },
    {
      name: 'Central de Chamados', categories: ['Web', 'Automação'], preview: 'kanban',
      description: 'Sistema de atendimento com quadro Kanban, prioridades e acompanhamento de SLA.',
      features: ['Quadro Kanban com arrastar e soltar', 'Prioridade e SLA por chamado', 'Histórico completo de cada atendimento'],
      tech: ['Laravel', 'jQuery', 'AJAX', 'Select2'], image: 'assets/img/projetos/chamados.png', url: 'https://lucaskrotz.github.io/Sistemas-de-Gest-o/chamados/',
    },
  ],

  process: [
    { title: 'Entendimento do problema', text: 'Converso com quem usa o processo hoje e levanto regras, exceções e gargalos.' },
    { title: 'Planejamento da solução', text: 'Defino módulos, modelagem de dados, integrações necessárias e prioridades.' },
    { title: 'Desenvolvimento', text: 'Entregas em partes, com código organizado e revisável.' },
    { title: 'Integrações e testes', text: 'Conecto os serviços externos e valido os fluxos com dados reais.' },
    { title: 'Implantação', text: 'Publicação em ambiente com Docker e Linux, com migração de dados quando necessário.' },
    { title: 'Evolução e manutenção', text: 'Correções, melhorias e novas funcionalidades conforme o negócio muda.' },
  ],

  differentials: [
    { icon: 'wrench', title: 'Sistemas sob medida', text: 'O sistema segue o processo da empresa, não o contrário.' },
    { icon: 'building', title: 'Experiência com sistemas empresariais', text: 'ERP, financeiro, NFSe, boletos e chamados no dia a dia.' },
    { icon: 'plug', title: 'Integração entre serviços', text: 'Bancos, gateways, WhatsApp, Google e outras APIs conectadas.' },
    { icon: 'code', title: 'Desenvolvimento de APIs', text: 'APIs REST e webhooks para outros sistemas consumirem.' },
    { icon: 'refresh', title: 'Automação de processos', text: 'Rotinas que eliminam trabalho manual e erros de digitação.' },
    { icon: 'layers', title: 'Estrutura multi-tenant', text: 'Várias empresas na mesma aplicação, com dados isolados.' },
    { icon: 'history', title: 'Sistemas existentes', text: 'Assumo, corrijo e evoluo código que já está em produção.' },
    { icon: 'puzzle', title: 'Problemas complexos', text: 'Regras de negócio difíceis viram fluxos claros.' },
    { icon: 'trend', title: 'Escalabilidade e organização', text: 'Código organizado, pronto para crescer.' },
  ],

  contact: {
    // Link vazio = item não aparece.
    whatsapp: { label: '(55) 99627-8335', url: 'https://wa.me/5555996278335' },
    email: { label: 'lkrotz23@gmail.com', url: 'mailto:lkrotz23@gmail.com' },
    github: { label: 'github.com/Lucaskrotz', url: 'https://github.com/Lucaskrotz' },
    // Preencha com seu perfil (ex.: 'https://www.linkedin.com/in/seu-usuario') para o LinkedIn aparecer.
    linkedin: { label: '', url: '' },
    instagram: { label: '', url: '' },
    // Endpoint do formulário (ex.: Formspree). Vazio = abre o app de e-mail com a mensagem pronta.
    formEndpoint: '',
  },
};
