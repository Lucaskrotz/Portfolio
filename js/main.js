(() => {
  const D = window.PORTFOLIO;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const ICONS = {
    server: '<rect x="3" y="4" width="18" height="7" rx="1.5"/><rect x="3" y="13" width="18" height="7" rx="1.5"/><path d="M7 7.5h.01M7 16.5h.01"/>',
    layout: '<rect x="3" y="4" width="18" height="16" rx="1.5"/><path d="M3 9h18M9 9v11"/>',
    plug: '<path d="M9 3v5M15 3v5M6 8h12v3a6 6 0 0 1-12 0zM12 17v4"/>',
    database: '<ellipse cx="12" cy="5.5" rx="8" ry="2.5"/><path d="M4 5.5v13c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5v-13M4 12c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5"/>',
    box: '<path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="m3 8 9 5 9-5M12 13v8"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    layers: '<path d="M12 2 2 7l10 5 10-5z"/><path d="m2 12 10 5 10-5"/><path d="m2 17 10 5 10-5"/>',
    refresh: '<path d="M21 12a9 9 0 0 1-15.5 6.2L3 16M3 12a9 9 0 0 1 15.5-6.2L21 8M21 3v5h-5M3 21v-5h5"/>',
    building: '<path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16M15 9h4a1 1 0 0 1 1 1v11M3 21h18M8 8h3M8 12h3M8 16h3"/>',
    chart: '<path d="M3 3v18h18M7 15l4-4 3 3 5-6"/>',
    wallet: '<rect x="2" y="6" width="20" height="13" rx="2"/><path d="M2 10h20M6 15h4"/>',
    code: '<path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 4l-4 16"/>',
    wrench: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z"/>',
    history: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5M12 7v5l3 2"/>',
    puzzle: '<path d="M10 3h4v3a2 2 0 1 0 4 0V3h3v7h-3a2 2 0 1 0 0 4h3v7h-7v-3a2 2 0 1 0-4 0v3H3v-7h3a2 2 0 1 0 0-4H3V3z"/>',
    trend: '<path d="m3 17 6-6 4 4 8-8M15 7h6v6"/>',
    check: '<path d="m5 12 5 5 9-10"/>',
    external: '<path d="M14 4h6v6M20 4 10 14M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
    whatsapp: '<path d="M21 12a8 8 0 0 1-11.8 7L3 21l2-6A8 8 0 1 1 21 12z"/>',
    email: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.1-1.3-.3-2.5-1-3.5.3-1.2.3-2.4 0-3.5 0 0-1 0-3 1.5a13 13 0 0 0-8 0C6 2 5 2 5 2c-.3 1.2-.3 2.4 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.4.5-.7 1-.9 1.7-.2.6-.2 1.2-.1 1.8v4M9 18c-4.5 2-5-2-7-2"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>',
    instagram: '<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
  };
  const icon = (name, cls = 'icon') => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ''}</svg>`;
  const devicon = (path) => `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${esc(path)}.svg" alt="" width="18" height="18" loading="lazy" decoding="async">`;
  const list = (arr, fn) => arr.map(fn).join('');

  /* ---------- Textos simples ---------- */
  document.querySelectorAll('[data-bind]').forEach((el) => {
    const v = D.profile[el.dataset.bind];
    if (v) el.textContent = v;
  });
  $('year').textContent = new Date().getFullYear();

  /* ---------- Hero ---------- */
  const [first, ...rest] = D.profile.name.split(' ');
  $('hero-name').innerHTML = `<span>${esc(first)}</span> <span>${esc(rest.join(' '))}</span>`;
  const initials = `<span class="photo-fallback" aria-hidden="true">${esc(D.profile.initials)}</span>`;
  $('photo').innerHTML = D.profile.photo
    ? `<img src="${esc(D.profile.photo)}" alt="Foto de ${esc(D.profile.name)}" width="800" height="800" fetchpriority="high">`
    : initials;
  // Se o arquivo da foto não existir, volta para as iniciais
  $('photo').querySelector('img')?.addEventListener('error', () => { $('photo').innerHTML = initials; });

  const NAMES = { whatsapp: 'WhatsApp', email: 'E-mail', github: 'GitHub', linkedin: 'LinkedIn', instagram: 'Instagram' };
  const links = Object.keys(NAMES).map((k) => ({ k, ...D.contact[k] })).filter((l) => l.url);
  const ext = (url) => (/^https?:/.test(url) ? ' target="_blank" rel="noopener"' : '');
  const iconLinks = (arr) => list(arr, (l) => `<li><a href="${esc(l.url)}"${ext(l.url)} aria-label="${NAMES[l.k]}">${icon(l.k)}</a></li>`);
  $('hero-social').innerHTML = iconLinks(links.filter((l) => ['github', 'linkedin', 'email'].includes(l.k)));
  $('footer-social').innerHTML = iconLinks(links);

  /* ---------- Sobre ---------- */
  $('about-text').innerHTML = list(D.about.paragraphs, (p) => `<p>${esc(p)}</p>`);
  $('about-areas').innerHTML = list(D.about.areas, (a) => `<li>${icon('check')}<span>${esc(a)}</span></li>`);
  $('experience').innerHTML = list(D.experience, (e) => `
    <li class="tl-item">
      <p class="tl-period">${esc(e.period)}</p>
      <h3>${esc(e.role)} <span>· ${esc(e.company)}</span></h3>
      <p>${esc(e.description)}</p>
    </li>`);

  /* ---------- Stack (bento) ---------- */
  $('stack-grid').innerHTML = list(D.stack, (g, i) => `
    <article class="bento-card glow reveal${g.span ? ` is-${g.span}` : ''}" style="--i:${i}">
      <header>
        <span class="bento-icon">${icon(g.icon)}</span>
        <h3>${esc(g.group)}</h3>
        <span class="count">${g.items.length}</span>
      </header>
      <ul class="tech-list">
        ${list(g.items, ([name, ic]) => `<li class="tech">${ic ? devicon(ic) : '<span class="tech-dot" aria-hidden="true"></span>'}${esc(name)}</li>`)}
      </ul>
    </article>`);

  /* ---------- Sistemas ---------- */
  $('systems').innerHTML = list(D.systems, (s, i) => `
    <div class="module glow reveal" style="--i:${i}">
      <h3>${icon(s.icon)}${esc(s.group)}</h3>
      <ul>${list(s.items, (it) => `<li>${esc(it)}</li>`)}</ul>
    </div>`);

  /* ---------- Projetos ---------- */
  const bars = (n, cls = '') => list(Array.from({ length: n }), () => `<i class="${cls}"></i>`);
  const PREVIEWS = {
    table: () => `<div class="m-side">${bars(5)}</div><div class="m-main"><div class="m-toolbar"><i></i><i class="m-btn"></i></div><div class="m-table">${bars(6)}</div></div>`,
    dashboard: () => `<div class="m-main"><div class="m-kpis">${bars(3)}</div><div class="m-chart">${list([40, 65, 50, 80, 58, 92, 70], (h) => `<i style="height:${h}%"></i>`)}</div></div>`,
    kanban: () => `<div class="m-main m-kanban">${list([3, 2, 4], (n) => `<div class="m-col">${bars(n)}</div>`)}</div>`,
    api: () => `<div class="m-main m-code">${list([60, 35, 70, 50, 42, 66, 30], (w, i) => `<i style="width:${w}%;margin-left:${i && i < 6 ? 12 : 0}%"></i>`)}</div>`,
    finance: () => `<div class="m-main"><div class="m-kpis">${bars(2)}</div><div class="m-rows">${list(['ok', 'wait', 'ok', 'late', 'ok'], (s) => `<div class="m-row"><i></i><b class="${s}"></b></div>`)}</div></div>`,
  };
  const preview = (p) => p.image
    ? `<img src="${esc(p.image)}" alt="Tela do projeto ${esc(p.name)}" width="1280" height="720" loading="lazy" decoding="async">`
    : `<div class="mock" aria-hidden="true"><div class="mock-bar"><span></span><span></span><span></span></div><div class="mock-body">${(PREVIEWS[p.preview] || PREVIEWS.table)()}</div></div>`;

  $('projects').innerHTML = list(D.projects, (p, i) => `
    <li class="project glow reveal" style="--i:${i % 3}" data-cats="${esc(p.categories.join('|'))}">
      <div class="project-cover">
        ${preview(p)}
        ${p.placeholder ? '<span class="badge">Exemplo</span>' : ''}
      </div>
      <div class="project-body">
        <ul class="project-cats">${list(p.categories, (c) => `<li>${esc(c)}</li>`)}</ul>
        <h3>${esc(p.name)}</h3>
        <p>${esc(p.description)}</p>
        <ul class="features">${list(p.features, (f) => `<li>${icon('check')}${esc(f)}</li>`)}</ul>
        <ul class="tags" aria-label="Tecnologias">${list(p.tech, (t) => `<li>${esc(t)}</li>`)}</ul>
        ${p.url ? `<a class="btn btn-small" href="${esc(p.url)}"${ext(p.url)}>Ver projeto<span class="sr-only"> ${esc(p.name)}</span>${icon('external')}</a>` : ''}
      </div>
    </li>`);

  const cards = [...document.querySelectorAll('.project')];
  const count = (cat) => cards.filter((c) => cat === 'Todos' || c.dataset.cats.split('|').includes(cat)).length;
  const filters = ['Todos', ...D.projectFilters];
  $('filters').innerHTML = list(filters, (f, i) => `
    <button type="button" class="filter" aria-pressed="${i === 0}" data-filter="${esc(f)}"${count(f) ? '' : ' disabled'}>
      ${esc(f)}<span class="filter-count">${count(f)}</span>
    </button>`);
  $('filters').addEventListener('click', (e) => {
    const btn = e.target.closest('.filter');
    if (!btn || btn.disabled) return;
    const cat = btn.dataset.filter;
    $('filters').querySelectorAll('.filter').forEach((b) => b.setAttribute('aria-pressed', b === btn));
    let shown = 0;
    cards.forEach((c) => {
      const match = cat === 'Todos' || c.dataset.cats.split('|').includes(cat);
      c.hidden = !match;
      if (match) { shown++; c.classList.remove('is-entering'); void c.offsetWidth; c.classList.add('is-entering'); }
    });
    $('projects-empty').hidden = shown > 0;
  });

  /* ---------- Processo e diferenciais ---------- */
  $('process').innerHTML = list(D.process, (s, i) => `
    <li class="step reveal" style="--i:${i}">
      <span class="step-n" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
      <h3>${esc(s.title)}</h3>
      <p>${esc(s.text)}</p>
    </li>`);
  $('differentials').innerHTML = list(D.differentials, (d, i) => `
    <li class="diff glow reveal" style="--i:${i % 3}">
      <span class="diff-icon">${icon(d.icon)}</span>
      <h3>${esc(d.title)}</h3>
      <p>${esc(d.text)}</p>
    </li>`);

  /* ---------- Contato ---------- */
  $('contact-links').innerHTML = list(links, (l) => `
    <li><a href="${esc(l.url)}"${ext(l.url)}>
      <span class="cl-icon">${icon(l.k)}</span>
      <span class="cl-text"><strong>${NAMES[l.k]}</strong>${esc(l.label)}</span>
    </a></li>`);

  const form = $('contact-form');
  const status = $('form-status');
  const fields = [['f-nome', 'e-nome'], ['f-email', 'e-email'], ['f-assunto', 'e-assunto'], ['f-msg', 'e-msg']];
  const validate = (input, errId) => {
    const ok = input.checkValidity() && input.value.trim() !== '';
    input.setAttribute('aria-invalid', !ok);
    input.setAttribute('aria-describedby', errId);
    $(errId).classList.toggle('is-visible', !ok);
    return ok;
  };
  fields.forEach(([id, err]) => $(id).addEventListener('blur', (e) => e.target.value && validate(e.target, err)));
  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const bad = fields.filter(([id, err]) => !validate($(id), err));
    if (bad.length) {
      $(bad[0][0]).focus();
      status.textContent = 'Corrija os campos destacados.';
      return;
    }
    const data = Object.fromEntries(new FormData(form));
    if (!D.contact.formEndpoint) {
      const to = (D.contact.email.url || '').replace('mailto:', '');
      const body = `${data.mensagem}\n\n${data.nome} <${data.email}>`;
      location.href = `mailto:${to}?subject=${encodeURIComponent(data.assunto)}&body=${encodeURIComponent(body)}`;
      status.textContent = 'Abrindo seu app de e-mail com a mensagem pronta.';
      return;
    }
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    status.textContent = 'Enviando…';
    try {
      const res = await fetch(D.contact.formEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(res.status);
      form.reset();
      status.textContent = 'Mensagem enviada. Respondo em breve.';
    } catch {
      status.textContent = 'Não foi possível enviar agora. Tente de novo ou use um dos contatos ao lado.';
    } finally {
      btn.disabled = false;
    }
  });

  /* ---------- Header, menu mobile e scrollspy ---------- */
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const nav = $('menu');
  const setMenu = (open) => {
    toggle.setAttribute('aria-expanded', open);
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    document.body.classList.toggle('menu-open', open);
  };
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', (e) => e.target.closest('a') && setMenu(false));
  addEventListener('keydown', (e) => e.key === 'Escape' && setMenu(false));
  addEventListener('scroll', () => header.classList.toggle('is-scrolled', scrollY > 8), { passive: true });

  const navLinks = [...nav.querySelectorAll('a')];
  const spy = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (!e.isIntersecting) return;
    navLinks.forEach((a) => a.toggleAttribute('aria-current', a.hash === `#${e.target.id}`));
  }), { rootMargin: '-45% 0px -50% 0px' });
  document.querySelectorAll('main section[id]').forEach((s) => spy.observe(s));

  /* ---------- Brilho que segue o cursor nos cards ---------- */
  if (matchMedia('(hover: hover)').matches) {
    document.addEventListener('pointermove', (e) => {
      const card = e.target.closest('.glow');
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    }, { passive: true });
  }

  /* ---------- Log do hero ---------- */
  const out = $('console');
  const line = ([method, path, code]) => {
    const li = document.createElement('li');
    li.innerHTML = `<span class="c-m">${esc(method)}</span><span class="c-p">${esc(path)}</span><span class="c-ok">${esc(code)}</span>`;
    return li;
  };
  const MAX = 3;
  if (reduceMotion) {
    D.heroConsole.slice(0, MAX).forEach((l) => out.append(line(l)));
  } else {
    let i = 0;
    const tick = () => {
      out.append(line(D.heroConsole[i++ % D.heroConsole.length]));
      if (out.children.length > MAX) out.firstElementChild.remove();
    };
    for (let k = 0; k < MAX; k++) tick();
    setInterval(() => document.hidden || tick(), 2200);
  }

  /* ---------- Entrada suave dos elementos ---------- */
  const reveals = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    reveals.forEach((s) => s.classList.add('is-visible'));
  } else {
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
    }), { rootMargin: '0px 0px -8% 0px' });
    reveals.forEach((s) => io.observe(s));
  }
})();
