# Status Izmena - NewLux Event Centar

**Datum:** Januar 2025  
**Status:** 🟢 Gotovo 87% (13/15 - sve bez materijala)

---

## ✅ ZAVRŠENO (13/15)

### 1. ✅ Dimenzije za naslovni video
**Fajl:** `DIMENZIJE_ZA_ANJU.txt`  
**Specifikacije:**
- Desktop: 1920 x 800px (ili 2560 x 800px)
- Mobile: 768 x 800px (ili 1024 x 800px)
- Format: JPEG ili PNG
- Aspect Ratio: 16:9 preporučeno
- Background: #00303d (plava)

### 2. ✅ Header smanjen i krila izbačena
**Fajl:** `style.css`, `js/header.js`  
- Navbar: `py-4` → `py-2` (smanjen padding)
- Logo: smanjen sa 260x190 na 100px auto
- Visina: height: auto

### 3. ✅ Tekst ispod naslovnog videa
**Fajl:** `index.html` (linija 409)  
- Staro: "Najpouzdaniji, elegantni i preporučeni organizatori proslava"
- Novo: **"Najlepše mesto za venčanja, korporativne i privatne proslave"**

### 4. ✅ Fontovi normalni
**Fajl:** `style.css`  
- Zamenjen `Dancing Script` sa `Lato`
- Svi naslovi sada koriste Lato font

### 5. ✅ AOS scroll efekti uklonjeni
**Fajl:** `index.html`, `aboutus.html`, `gallery.html`  
- Uklonjen sve `data-aos` atribute
- Sajt se odmah prikazuje bez animacija

### 6. ✅ 4 ikonice zamenjene
**Fajl:** `index.html`  
1. ✅ `ph:user` → "Od 70 – 300 zvanica" (Kapacitet prostora)
2. ✅ `ph:plant-light` → "8 različitih menija" (Bogata ponuda jelovnika) - OSTALO
3. ✅ `ph:currency-eur` → "Od 35€ – 60€" (Po osobi)
4. ✅ `ph:flower` → "Gratis dekoracija" (Za sve proslave)

### 7. ✅ Boje zamenjene
**Fajl:** `style.css`, `css/style.css`, `index.html`  
- Primary: `#e58043` (narandžasto) → `#00303d` (plavo)
- Background: `bg-darker` → `bg-white` na sekcijama
- Footer: `bg-primary` → `bg-darker` (plav)
- Menu buttons: plava boja
- Override: `.bg-primary` → bela pozadina

### 8. ✅ Footer - telefon klikabilan
**Fajl:** `js/footer.js`  
- 3 broja → 1 broj: `064/112-118-3`
- `<a href="tel:+381641121183">`

### 9. ✅ Footer - plava boja
**Fajl:** `index.html`, `contact.html`, `aboutus.html`, `gallery.html`  
- Footer: `bg-primary` → `bg-darker`
- Boja: `#00303d`

### 10. ✅ Kontakt forma dodata
**Fajl:** `index.html`, `contact.html`  
- Index: forma pre footera
- Contact: forma ispod telefona
- Formsubmit.co integracija
- Email: `Luxeventcentar@gmail.com`

### 11. ✅ Naše usluge → linkovi na galeriju
**Fajl:** `index.html`  
- Sva 4 elementa (Korporativne, Venčanja, Rođendani, Krštenja)
- Wrappani sa `<a href="gallery.html">`

### 12. ✅ Usluge → Ponuda menija
**Fajl:** `js/header.js`, `js/footer.js`  
- Navigacija: "Usluge" → "Ponuda menija"
- Footer: "Usluge" → "Ponuda menija" link

### 13. ✅ Galerija - bela pozadina
**Fajl:** `gallery.html`  
- `bg-darker` → `bg-white`
- AOS efekti uklonjeni

---

## ⏳ ČEKA MATERIJALE (3/15)

### 9. ⏳ Mobilni video
**Fajl:** `index.html` (linija 321-323)  
**Potrebno:** Video fajl za mobile verziju  
**Rezolucija:** 768 x 800px ili manje  
**Format:** MP4 optimizovano

### 12. ⏳ O nama - zameniti sliku
**Fajl:** `aboutus.html`  
**Potrebno:** Nova slika od Anje  
**Mesto:** Zameni `about-img.jpg`

### 14. ⏳ Galerija - dodati nove slike
**Fajl:** `gallery.html`, galerija JS  
**Potrebno:** Sve nove slike  
**Napomena:** Pozadina je već bela, ostaje samo dodati slike

---

## 📝 NAPOMENE

### Tehnicali:
1. ✅ **Fontovi:** Dancing Script zamenjen sa Lato
2. ✅ **AOS:** Uklonjen svi scroll efekti
3. ✅ **Boje:** Primary = plava (#00303d), Background = bela
4. ✅ **Responsive:** Video ima različite verzije za desktop/mobile (trenutno isti fajl)

### Potrebni materijali:
- ✅ Specifikacije za sliku hero (Anja)
- ⏳ Video mobile
- ⏳ Slike galerije
- ⏳ Slika O nama

### Email integracija:
- ✅ `Luxeventcentar@gmail.com`
- ✅ Formsubmit.co implementirano

---

## 🎯 Sledeći koraci:

1. **Čeka:** Priložene materijale (video mobile, slike)
2. ✅ **Završeno:** Svi visual izmene bez materijala
3. **Testiranje:** Proveriti responsive na različitim uređajima

---

**Napravljeno:** Januar 2025  
**Developer:** Auto (Cursor AI)  
**Kontakt:** Luxeventcentar@gmail.com

