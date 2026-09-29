# Portfólio — Lucas Krötz

Site estático: HTML, CSS e JavaScript puros, sem build e sem dependências.

```
index.html        estrutura + SEO (title, meta, Open Graph)
css/styles.css    visual (cores no topo, em :root)
js/data.js        TODO o conteúdo editável
js/main.js        monta as seções a partir do data.js
assets/           favicon, imagens
```

## Editar conteúdo

Quase tudo fica em `js/data.js`: nome, foto, textos, stack, módulos de sistema, projetos (e filtros), experiência, processo, diferenciais e contatos.
Procure por `[PLACEHOLDER]` e substitua.

- **Foto:** salve como `assets/img/lucas-krotz.jpg` (quadrada, ~800×800). Se o arquivo não existir, aparecem as iniciais.
- **Projetos:** troque os exemplos, use `placeholder: false`, escolha as `categories` (usadas no filtro) e aponte `image` para a capa (1280×720, `.webp`). Sem `image`, é gerado um mockup conforme `preview` (`table`, `dashboard`, `kanban`, `api`, `finance`). `url` vazio esconde o botão "Ver projeto".
- **Contatos:** um link vazio esconde o item.
- **Formulário:** com `formEndpoint` vazio, ele abre o app de e-mail do visitante. Para enviar direto, crie um form no [Formspree](https://formspree.io) (ou similar) e cole a URL.

No `index.html`, atualize também o `<title>`, a `description`, a `canonical` e as tags `og:*` com o domínio final, e crie `assets/img/og-image.png` (1200×630).

## Rodar localmente

```bash
python3 -m http.server 8000
# abra http://localhost:8000
```

## Publicar

É só enviar a pasta para qualquer hospedagem estática (GitHub Pages, Netlify, Vercel, Cloudflare Pages) ou servir pelo Nginx.
