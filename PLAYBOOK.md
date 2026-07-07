# Playbook — Site Institucional Automotivo

Guia completo do processo usado na Lapa Customs, replicável para qualquer cliente.

---

## Fase 1 — Briefing do cliente

Colete antes de codar:

| Item | Exemplo |
|------|---------|
| Nome da empresa | Lapa Customs |
| Serviços principais | PPF, películas, envelopamento… |
| Serviços de estética/detailing | Lista do flyer/material |
| WhatsApp | +55 83 99135-3860 |
| Instagram | @lapa_customs |
| Endereço completo | Rua, bairro, cidade, UF |
| Domínio desejado | www.lapacustoms.com.br |
| Logo | PNG fundo transparente |
| Fotos dos trabalhos | Substituir Unsplash depois |
| Cor da marca | Hex do vermelho/laranja |

---

## Fase 2 — Configurar o template

### 2.1 Copiar projeto

```bash
cp -r site-base-automotivo nome-do-cliente
cd nome-do-cliente
npm install
```

### 2.2 Editar `business.config.js`

Preencha **todas** as seções. Rode `npm run sync` para validar.

### 2.3 Logo

1. Salve em `src/assets/logo.png` (transparente)
2. Copie para `public/logo.png` (compartilhamento social)
3. Se o fundo for preto, remova transparência (ferramenta externa ou script Python)

### 2.4 Cores

Edite `theme` em `business.config.js` **e** `src/index.css` (`--color-accent`, etc.)

### 2.5 Imagens

Substitua URLs do Unsplash em `services.main` e `hero.image` por fotos reais do cliente.

### 2.6 Testar local

```bash
npm run dev
```

Checklist visual:
- [ ] Logo no header (sem quadrado preto)
- [ ] WhatsApp abre número correto
- [ ] Instagram no rodapé
- [ ] Mapa na seção Sobre
- [ ] Mobile (menu hamburger, botões, textos)
- [ ] Todos os CTAs funcionam

---

## Fase 3 — SEO on-page

O template já inclui. Confira após `npm run sync`:

| Item | Onde |
|------|------|
| Title + description | `index.html` (gerado) |
| H1 com nome da marca | Hero |
| Headings H2/H3 | Seções |
| Alt em imagens | Automático com `config.name` |
| Canonical | `index.html` |
| Schema.org JSON-LD | `StructuredData.jsx` |
| NAP (nome, endereço, telefone) | Footer |
| robots.txt + sitemap.xml | `public/` (gerado) |
| Open Graph | `index.html` |

### Checklist SEO manual

- [ ] Title ≤ 60 caracteres, com cidade/nicho
- [ ] Description com serviços + localização
- [ ] H1 contém nome da empresa
- [ ] Telefone visível no HTML (rodapé)
- [ ] `VITE_SITE_URL` = domínio final com www

### Pós-lançamento

1. [Google Search Console](https://search.google.com/search-console)
2. Google Business Profile (mesmo NAP do site)
3. Atualizar Instagram com link do site

---

## Fase 4 — GitHub

```bash
git init
git checkout -b nome-do-cliente
git add .
git commit -m "Site institucional — Nome do Cliente"
git remote add origin https://github.com/SEU_USER/REPO.git
git push -u origin nome-do-cliente
```

**Dica:** pode fazer merge na `main` depois ou manter branch por cliente.

---

## Fase 5 — Deploy Vercel

### 5.1 Criar projeto

1. [vercel.com/new](https://vercel.com/new) → importar repositório
2. Framework: **Vite**
3. Build: `npm run build` | Output: `dist`
4. Production Branch: branch do cliente

### 5.2 Variável de ambiente

| Name | Value | Environment |
|------|--------|-------------|
| `VITE_SITE_URL` | `https://www.dominio.com.br` | **Production** |

### 5.3 Deploy e teste

Abra a URL `.vercel.app` e valide tudo antes de conectar domínio.

---

## Fase 6 — Domínio (Registro.br + Linktree)

### Cenário: domínio hoje no Linktree

| URL | Destino |
|-----|---------|
| `www.dominio.com.br` | Site (Vercel) |
| `dominio.com.br` | Redireciona → www |
| `link.dominio.com.br` | Linktree |

### Ordem segura

```
1. Linktree → migrar para link.dominio.com.br
2. Registro.br → CNAME link → Linktree
3. Testar link.dominio.com.br
4. Vercel → Settings → Domains → adicionar www + apex
5. Registro.br:
   - CNAME www → cname.vercel-dns.com
   - A @ → 76.76.21.21
6. Remover DNS antigo do www (Linktree)
7. Aguardar propagação (1–4h)
8. Testar https://www.dominio.com.br
```

### Registro.br — registros DNS

| Tipo | Nome | Valor |
|------|------|--------|
| CNAME | `www` | `cname.vercel-dns.com` |
| A | `@` | `76.76.21.21` |
| CNAME | `link` | *(destino do Linktree)* |

---

## Fase 7 — Entrega

- [ ] Site no domínio com HTTPS
- [ ] Linktree no subdomínio `link.`
- [ ] WhatsApp testado no celular
- [ ] Instagram atualizado
- [ ] Google Search Console configurado
- [ ] Cliente instruído sobre troca de fotos futuras (`business.config.js`)

---

## Manutenção futura

| Mudança | Onde editar |
|---------|-------------|
| Textos, serviços, contato | `business.config.js` |
| Cores | `business.config.js` + `src/index.css` |
| Logo | `src/assets/logo.png` + `public/logo.png` |
| Novo deploy | `git push` → Vercel automático |

Após editar config: `npm run sync` antes do commit (ou deixar o prebuild fazer no deploy).

---

## Estrutura de seções (referência)

```
Header (logo + nav + CTA)
├── Hero (H1, badge local, CTAs)
├── Serviços (cards principais + estética/detailing)
├── Sobre (texto + diferenciais + mapa)
├── Contato (banner + WhatsApp)
├── Footer (NAP + Instagram + links)
└── Botão WhatsApp flutuante
```

---

## Troubleshooting

| Problema | Solução |
|----------|---------|
| SEO com URL errada | Configurar `VITE_SITE_URL` + Redeploy |
| Logo com fundo preto | PNG transparente |
| Deploy branch errada | Settings → Environments → Production → Branch |
| www ainda no Linktree | DNS antigo; aguardar propagação |
| Sitemap URL errada | `npm run sync` com `VITE_SITE_URL` correto |
