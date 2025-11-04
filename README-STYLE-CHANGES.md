# Style upgrade for sebastienstuder.com

This bundle improves typography, spacing, and the Books grid.

## What’s included
- `app/layout.jsx`: adds Inter + Playfair via `next/font` and wires `globals.css`
- `app/globals.css`: adds small utility classes (`h-display`, `container`, `prose-base`, `card`, `cover-frame`)
- `tailwind.config.js`: enables `@tailwindcss/typography` and `@tailwindcss/line-clamp`

## After uploading these files
1. Commit the files to your repo (replace existing ones).
2. Add the two Tailwind plugins so Netlify can build them:
   ```json
   {
     "devDependencies": {
       "@tailwindcss/typography": "^0.5.10",
       "@tailwindcss/line-clamp": "^0.4.4"
     }
   }
   ```
   Or run locally: `npm i -D @tailwindcss/typography @tailwindcss/line-clamp`
3. Trigger a new deploy on Netlify (Clear cache + deploy).

## Where to use the new classes
- Add `h-display` to big headings (site title, section titles).
- Wrap sections with a `container` (e.g., `<section className="container py-16">`).
- Apply `prose-base` to long paragraphs.
- For book covers: wrap images in `cover-frame` and apply `cover-img` to `<img>`.
