# Planet Fitness Senigallia — Sito web

Sito vetrina ricostruito da zero per **Planet Fitness Senigallia** (Via Canaletto 60, Senigallia · AN).
Tema scuro "orbitale", colore brand arancione, completamente responsive e ottimizzato per mobile.

> _"…ma non chiamateci semplicemente palestra."_

## Stack

Sito **statico** — nessuna build necessaria.

```
index.html            pagina unica (single page)
assets/css/style.css  stile (tema orbitale, dark, mobile-first)
assets/js/main.js      nav, menu mobile, reveal, contatori
assets/img/            logo, emblema eXtreme Lab, icone
```

## Anteprima locale

Apri `index.html` nel browser, oppure:

```bash
npx serve .
```

## Deploy su Vercel

Nessuna configurazione richiesta: è un sito statico.

1. Vercel → **Add New… → Project**
2. Importa il repo `planet-fitness-senigallia`
3. Framework Preset: **Other** · Build Command: _(vuoto)_ · Output Directory: `./`
4. **Deploy**

## Da completare

- [ ] Sostituire/aggiungere le **foto reali** (sala pesi, eXtreme Lab, danza aerea/pole, spettacoli a teatro): hero e sezioni *I Mondi* / *Officina della Danza*.

## Contatti palestra

Via Canaletto, 60 — 60019 Senigallia (AN) · Tel 071 660 9665 · Cell 331 376 3317 · tony.r@libero.it
eXtreme Lab s.s.d.r.l. · P.IVA 02796170427
