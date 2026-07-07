# Site Base Automotivo

Template reutilizável para sites institucionais one-page de empresas automotivas (customização, películas, PPF, detailing, acessórios).

Stack: **React + Vite + Tailwind CSS 4 + Lucide Icons + SEO + Vercel**

---

## Novo projeto em 15 minutos

### 1. Copiar o template

```bash
cp -r site-base-automotivo meu-cliente-site
cd meu-cliente-site
npm install
```

### 2. Editar configuração do cliente

Abra **`business.config.js`** e preencha:

- Nome, domínio, WhatsApp, Instagram
- Endereço e mapa
- Textos do hero, sobre, serviços
- SEO (title, description)
- Cores em `theme` + `src/index.css`

### 3. Substituir assets

| Arquivo | Ação |
|---------|------|
| `src/assets/logo.png` | Logo do cliente (fundo transparente) |
| `public/logo.png` | Cópia da logo (Open Graph / compartilhamento) |
| `public/favicon.svg` | Ícone do navegador (opcional) |
| Imagens nos serviços | URLs ou fotos reais em `business.config.js` |

### 4. Rodar localmente

```bash
npm run dev
```

O comando `sync` roda automaticamente e gera:
- `index.html` (meta tags SEO)
- `robots.txt` + `sitemap.xml`
- `vercel.json` (redirect apex → www)

### 5. Deploy

Veja o guia completo em **[PLAYBOOK.md](./PLAYBOOK.md)**

---

## Estrutura

```
site-base-automotivo/
├── business.config.js    ← ÚNICO arquivo principal do cliente
├── index.template.html   ← Template SEO (não editar manualmente)
├── PLAYBOOK.md           ← Processo completo (criação → SEO → Vercel → DNS)
├── scripts/
│   └── sync-config.js    ← Gera SEO + vercel.json
└── src/
    ├── components/       ← Componentes genéricos (não editar por cliente)
    ├── lib/config.js     ← Helpers (WhatsApp, maps, URL)
    └── assets/logo.png   ← Logo do cliente
```

---

## Variável de ambiente (Vercel)

| Nome | Valor | Ambiente |
|------|--------|----------|
| `VITE_SITE_URL` | `https://www.dominio.com.br` | **Production** |

---

## O que já vem pronto

- [x] One-page responsivo (mobile-first)
- [x] Hero, Serviços (cards + detailing), Sobre, Contato, Footer
- [x] WhatsApp flutuante + CTAs
- [x] Mapa Google embutido
- [x] Schema.org LocalBusiness (AutoRepair)
- [x] Open Graph + Twitter Cards
- [x] Canonical, robots.txt, sitemap.xml
- [x] Redirect domínio raiz → www (vercel.json)
- [x] Tema dark + cor de destaque configurável

---

## Ícones disponíveis (serviços detailing)

Use nomes do [Lucide](https://lucide.dev/icons): `Car`, `Sparkles`, `Diamond`, `Zap`, `Lightbulb`, `SprayCan`, `Wind`, `Armchair`, `Gem`, `Circle`, `LayoutDashboard`, etc.
