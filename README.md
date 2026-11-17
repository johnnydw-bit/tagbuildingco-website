# TAG Building Co. Ltd website

A one-page static website for tagbuildingcoltd.com. It's plain HTML, CSS and a little JavaScript, with no build step, no database and no cookies.

```
index.html            the whole site (header, hero, services, process, about, contact, footer)
404.html              "page not found" page
assets/css/styles.css all styling (colours are defined at the top under :root)
assets/js/main.js     mobile menu + quote form
assets/img/           logo.svg, favicon.svg
robots.txt, sitemap.xml
```

## Preview locally

```bash
npx serve -l 4321 .
```

Then open http://localhost:4321.

## Content to confirm before going live

Most of the copy was written without input from TAG, so check these items:

- [ ] **Services:** extensions, loft conversions, renovations, kitchens & bathrooms, driveways/patios/groundworks, repairs & maintenance. Remove anything TAG doesn't do and add anything missing. The list appears in the service cards, the hero strip, the form's "Type of work" dropdown and the meta description.
- [ ] **Areas covered:** Farnborough, Farnham, Fleet, Aldershot, Church Crookham, Ash & Tongham, Frimley, Camberley. These were inferred from the 01252 number and the Farnborough registered office.
- [ ] **"How we work" steps:** site visit and written, itemised quote. Make sure this matches how TAG actually works, and say "free" if quotes are free.
- [ ] **About us text:** a neutral draft. Ideally replace it with TAG's own story, such as who runs it, experience, and any trade body memberships or insurance.
- [ ] **Legal footer:** company no. 13102668, registered office 8 Winchester Street, Farnborough GU14 6AW (from Companies House, Nov 2026). UK company websites must show the name, number, place of registration and registered office.
- [ ] **Social links:** the old site had empty Facebook/YouTube placeholders, so none are included. Add real links to the footer if they exist.

## Worth adding

- **Project photos.** These will make the biggest difference to the site. An "Our work" gallery section is ready in `index.html` (commented out). Put photos in `assets/img/work/` and uncomment it.
- **Reviews.** Only add genuine ones, e.g. copied from Google, Checkatrade or Trustpilot with the source named.
- **A social share image.** Add a 1200×630 `assets/img/og-image.jpg` and an `og:image` meta tag, so the site shows a picture when shared on WhatsApp or Facebook.

## The quote form

The form doesn't send anything itself. When submitted, it opens the visitor's own email app with a message to info@tagbuildingcoltd.com already filled in. That works on any host with no setup or running costs, and nothing is stored. The downside is that visitors without an email app set up (common on work PCs) can't use it, though phone and email are shown next to it.

If you want enquiries sent directly from the page instead, replace this with a form service (e.g. Web3Forms or Formspree, both have free tiers) or a small serverless function using Resend.

## Hosting

Any static host works. Upload the folder as it is.

- **Cloudflare Pages (free, commercial use allowed).** Connect the Git repo with no build command and `/` as the output directory. If DNS is moved to Cloudflare, Cloudflare Email Routing can forward info@ to Gmail for free.
- **Vercel.** Import the repo with the framework preset set to "Other" and no build command. Note that the free Hobby plan is for non-commercial use, and a business site should be on Pro.

When switching over, point only the website records (`@` and `www`) at the new host. Leave the MX/SPF email records alone until the email has been moved.
