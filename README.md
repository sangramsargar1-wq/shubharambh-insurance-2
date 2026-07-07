# Shubharambh Insurance — Website Source

Full static website source, ready for GitHub and Cloudflare Pages.

## Folder Structure
```
shubharambh-insurance/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   ├── logo.svg
│   └── favicon.svg
└── README.md
```

## Local madhe test karnyasathi
Fakt `index.html` double-click karun browser madhe open kara — koni build step lagat nahi, sagle plain HTML/CSS/JS ahe.

## GitHub var upload karnyachi steps
1. GitHub var navin repo banva (e.g. `shubharambh-insurance-website`), ya ya existing repo vaparaycha asel tar to open kara.
2. **Add file → Upload files** var click kara.
3. `index.html`, `css/`, `js/`, `assets/` — sagle files/folders as-is upload kara (folder structure tashich rahil).
4. "Commit changes" var click kara.

## Cloudflare Pages var deploy karnyachi steps
1. [Cloudflare Pages](https://pages.cloudflare.com) var login kara.
2. **Create a project → Connect to Git** — vaparlela GitHub repo select kara.
3. Build settings:
   - **Framework preset:** None
   - **Build command:** (khali blank thewa)
   - **Build output directory:** `/`
4. "Save and Deploy" var click kara. 1-2 minitat live URL milel (e.g. `shubharambh-insurance.pages.dev`).
5. Navín naav (custom domain) jodaycha asel tar Pages project cha **Custom domains** tab madhe jaun add kara.

## Customize karaycha asel tar
- **WhatsApp/phone number:** `js/main.js` madhe `whatsappNumber` variable ani `index.html` madhe `tel:+917820853508` links shodha, navin number taka.
- **Colors:** `css/style.css` cha suruvatila `:root` madhe sagle colors variables sarkha define kelele ahet (`--navy`, `--gold`, `--teal`, etc.) — te badlun tumcha brand color set karu shakta.
- **Content:** `index.html` madhe sagla text directly edit karu shakta, koni template engine nahi.

## Notes
- Ha pure static site ahe — no backend, no database, so free tier var GitHub Pages ani Cloudflare Pages dogh yevar chalto.
- Lead form submit zalyavar WhatsApp open hoto pre-filled message sobat — server side kahi save hot nahi (hava asel tar navta form backend/service add karava lagel).
