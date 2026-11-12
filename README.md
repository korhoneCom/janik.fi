# janik.fi

JaniK — Verkkotunnukset, Sähköpostit ja Nettisivut yrityksellesi.
Mobiiliystävällinen yhden sivun sivusto.

## Tiedostot

| Tiedosto | Sisältö |
|---|---|
| `index.html` | Etusivu: sankkari, palvelut, hinnasto, eteneminen, yhteystiedot |
| `styles.css` | Kaikki tyylit (värit ja fontit muuttujissa tiedoston alussa) |
| `script.js` | Mobiilivalikko, domainpäätteiden hinnasto, lomakkeen ilmoitus |
| `favicon.svg` | Selavicon |
| `CNAME` | `janik.fi` |

## Palvelut ja hinnat

| Palvelu | Hinta |
|---|---|
| FI-domain | 14 € / vuosi (+ alv 25,5 %) |
| Sähköpostilaatikko | 12 € / vuosi (+ alv) |
| Kotisivut (Google Sites), 1. vuosi | 15 € (+ alv) |
| Kotisivut, seuraavat vuodet | 12 € / vuosi (+ alv) |
| Lisäsivut | 5 € / sivu (+ alv) |
| **AI-sivut** | **49 € (+ alv)** |
| **Sivun muutokset** | **19 € / muutos (+ alv)** |
| Domainin siirto | 2 € kertamaksu (+ alv) |
| DNS-hallinta | sisältyy |

## Värit

| Muuttuja | Oletus | Mihin |
|---|---|---|
| `--accent` | `#1C5A74` | Pääväri (merensininen) |
| `--hi` | `#C2702A` | Huomioväri (amber) |
| `--paper` | `#F5F6F4` | Taustapohja |
| `--font-head` | Archivo | Otsikot |
| `--font-body` | Public Sans | Leipäteksti |

## Yhteydenottolomake

Lomake on valmiitosava mutta ei lähetä minnekään — se näyttää viestin
ja pyytää yhteydenottoa. Todelliseen käyttöön se kytketään Formspreeen,
Netlify Formsiin tai omaan endpointtiin.

## Julkaisu

GitHub Pages: `Settings → Pages → Source: Deploy from a branch → main / (root)`.
CNAME-tiedosto + DNS-tietue `janik.fi → korhonecom.github.io`.
