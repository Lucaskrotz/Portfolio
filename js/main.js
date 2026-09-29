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
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    layers: '<path d="M12 2 2 7l10 5 10-5z"/><path d="m2 12 10 5 10-5"/><path d="m2 17 10 5 10-5"/>',
    refresh: '<path d="M21 12a9 9 0 0 1-15.5 6.2L3 16M3 12a9 9 0 0 1 15.5-6.2L21 8M21 3v5h-5M3 21v-5h5"/>',
    building: '<path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16M15 9h4a1 1 0 0 1 1 1v11M3 21h18M8 8h3M8 12h3M8 16h3"/>',
    chart: '<path d="M3 3v18h18M7 15l4-4 3 3 5-6"/>',
    wallet: '<rect x="2" y="6" width="20" height="13" rx="2"/><path d="M2 10h20M6 15h4"/>',
    code: '<path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 4l-4 16"/>',
    wrench: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z"/>',
    whatsapp: '<path d="M21 12a8 8 0 0 1-11.8 7L3 21l2-6A8 8 0 1 1 21 12z"/>',
    email: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.1-1.3-.3-2.5-1-3.5.3-1.2.3-2.4 0-3.5 0 0-1 0-3 1.5a13 13 0 0 0-8 0C6 2 5 2 5 2c-.3 1.2-.3 2.4 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.4.5-.7 1-.9 1.7-.2.6-.2 1.2-.1 1.8v4M9 18c-4.5 2-5-2-7-2"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>',
    instagram: '<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
  };
  const icon = (name) => `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ''}</svg>`;

  // Textos simples (nome, cargo, frase)
  document.querySelectorAll('[data-bind]').forEach((el) => {
    const v = D.profile[el.dataset.bind];
    if (v) el.textContent = v;
  });
  $('year').textContent = new Date().getFullYear();

  // Sobre
  $('avatar').innerHTML = D.profile.photo
    ? `<img src="${esc(D.profile.photo)}" alt="Foto de ${esc(D.profile.name)}" width="320" height="320" loading="lazy">`
    : `<span aria-hidden="true">${esc(D.profile.initials)}</span>`;
  $('about-text').innerHTML = D.about.paragraphs.map((p) => `<p>${esc(p)}</p>`).join('');
  $('about-focus').innerHTML = D.about.focus.map((f) => `<li>${esc(f)}</li>`).join('');

  // Habilidades
  $('skills').innerHTML = D.skills.map((s) => `
    <li class="skill">${icon(s.icon)}<h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></li>`).join('');

  // Tecnologias
  $('tech').innerHTML = D.technologies.map((g) => `
    <div class="tech-row">
      <h3>${esc(g.group)}</h3>
      <ul>${g.items.map(([name, ic]) => `<li class="chip">${ic
        ? `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${esc(ic)}.svg" alt="" width="20" height="20" loading="lazy" class="${ic.startsWith('github') ? 'invert' : ''}">`
        : '<span class="chip-dot" aria-hidden="true"></span>'}${esc(name)}</li>`).join('')}</ul>
    </div>`).join('');

  // Projetos
  $('projects').innerHTML = D.projects.map((p) => `
    <li class="project">
      <div class="project-cover">
        ${p.image
          ? `<img src="${esc(p.image)}" alt="Capa do projeto ${esc(p.name)}" loading="lazy" width="640" height="400">`
          : `<span class="cover-fallback" aria-hidden="true">${esc(p.category)}</span>`}
        ${p.placeholder ? '<span class="badge">Exemplo</span>' : ''}
      </div>
      <div class="project-body">
        <p class="project-cat">${esc(p.category)}</p>
        <h3>${esc(p.name)}</h3>
        <p>${esc(p.description)}</p>
        <ul class="tags">${p.tech.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
        <a class="project-link" href="${esc(p.url)}"${p.url && p.url !== '#' ? ' target="_blank" rel="noopener"' : ''}>Ver projeto<span class="sr-only"> ${esc(p.name)}</span></a>
      </div>
    </li>`).join('');

  // Experiência
  $('experience').innerHTML = D.experience.map((e) => `
    <li class="tl-item">
      <p class="tl-period">${esc(e.period)}</p>
      <h3>${esc(e.role)}</h3>
      <p class="tl-company">${esc(e.company)}</p>
      <p>${esc(e.description)}</p>
    </li>`).join('');

  // Serviços
  $('services').innerHTML = D.services.map((s) => `<li>${icon(s.icon)}<span>${esc(s.title)}</span></li>`).join('');

  // Diferenciais
  $('differentials').innerHTML = D.differentials.map((d) => `<div><dt>${esc(d.title)}</dt><dd>${esc(d.text)}</dd></div>`).join('');

  // Contato + rodapé
  const links = ['whatsapp', 'email', 'github', 'linkedin', 'instagram']
    .map((k) => ({ k, ...D.contact[k] }))
    .filter((l) => l.url);
  const names = { whatsapp: 'WhatsApp', email: 'E-mail', github: 'GitHub', linkedin: 'LinkedIn', instagram: 'Instagram' };
  const ext = (l) => (l.url.startsWith('http') ? ' target="_blank" rel="noopener"' : '');
  $('contact-links').innerHTML = links.map((l) => `
    <li><a href="${esc(l.url)}"${ext(l)}>${icon(l.k)}<span><strong>${names[l.k]}</strong>${esc(l.label)}</span></a></li>`).join('');
  $('footer-social').innerHTML = links.map((l) => `
    <li><a href="${esc(l.url)}"${ext(l)} aria-label="${names[l.k]}">${icon(l.k)}</a></li>`).join('');

  // Formulário
  const form = $('contact-form');
  const status = $('form-status');
  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      status.textContent = 'Preencha todos os campos com um e-mail válido.';
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
    }
  });

  // Menu mobile
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

  // Console do hero
  const out = $('console');
  const line = ([method, path, code, meta]) => {
    const li = document.createElement('li');
    const cls = /^(2|OK)/.test(code) ? 'ok' : 'warn';
    li.innerHTML = `<span class="c-m">${esc(method)}</span><span class="c-p">${esc(path)}</span><span class="c-${cls}">${esc(code)}</span><span class="c-t">${esc(meta)}</span>`;
    return li;
  };
  const lines = D.heroConsole;
  const MAX = 7;
  if (reduceMotion) {
    lines.slice(0, MAX).forEach((l) => out.append(line(l)));
  } else {
    let i = 0;
    const tick = () => {
      out.append(line(lines[i++ % lines.length]));
      if (out.children.length > MAX) out.firstElementChild.remove();
    };
    for (let k = 0; k < 4; k++) tick();
    setInterval(() => document.hidden || tick(), 1800);
  }

  // Fade-in das seções
  const sections = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    sections.forEach((s) => s.classList.add('is-visible'));
  } else {
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
    }), { rootMargin: '0px 0px -10% 0px' });
    sections.forEach((s) => io.observe(s));
  }
})();
