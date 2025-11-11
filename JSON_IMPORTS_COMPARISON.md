# JSON Imports Comparison: Old Site vs New Site

## JSON Files Available (Both Sites)
✅ Both sites have the same JSON files in `/data/`:
- `blog-posts.json`
- `cities.json`
- `faq.json`
- `portfolio.json`
- `service-in-city.json`
- `services.json`
- `things-to-do.json`

## Old Site (Mikes-Garage-Doors) JSON Imports

### Pages/Components Importing JSON:
1. **`app/services/page.tsx`**
   - ✅ `@/data/services.json`

2. **`app/portfolio/page.tsx`**
   - ✅ `@/data/portfolio.json`

3. **`app/faq/page.tsx`**
   - ✅ `@/data/faq.json`

4. **`app/blog/page.tsx`**
   - ✅ `@/data/blog-posts.json`

5. **`app/[slug]/page.tsx`** (Dynamic routes)
   - ✅ `@/data/blog-posts.json`
   - ✅ `@/data/cities.json`
   - ✅ `@/data/things-to-do.json`
   - ✅ `@/data/services.json`

6. **Components:**
   - `components/sections/blog-section.tsx` → `@/data/blog-posts.json`
   - `components/sections/service-areas-thin-section.tsx` → `@/data/cities.json`
   - `components/layout/header/longnavbar/navbar.tsx` → `@/data/services.json`
   - `components/layout/header/longnavbar/navigation-menu-component.tsx` → `@/data/services.json`
   - `templates/services/service-page.tsx` → `@/data/services.json`
   - `templates/portfolio/portfolio-page.tsx` → `@/data/portfolio.json`
   - `templates/faq/faq-page.tsx` → `@/data/faq.json` + `@/data/services.json`
   - `templates/cities/city-page.tsx` → `@/data/cities.json`

## New Site (SherlocksAstroNew) JSON Imports

### Pages/Components Importing JSON:
1. **`src/pages/services.astro`**
   - ✅ `@/data/services.json` (MATCHES)

2. **`src/components/sections/blog-section.astro`**
   - ✅ `@/data/blog-posts.json` (MATCHES)

3. **`src/components/sections/service-areas-thin-section.astro`**
   - ✅ `@/data/cities.json` (MATCHES)

4. **`src/components/layout/header/Navbar.astro`**
   - ✅ `@/data/services.json` (MATCHES)

5. **`src/components/layout/header/NavigationMenuDemo.astro`**
   - ✅ Uses services from Navbar (via props) (MATCHES)

## Missing Pages in New Site (That Import JSON)

### ❌ Pages Not Yet Created:
1. **Portfolio Page** (`/portfolio`)
   - Should import: `@/data/portfolio.json`
   - Old site: `app/portfolio/page.tsx`

2. **FAQ Page** (`/faq`)
   - Should import: `@/data/faq.json` + `@/data/services.json`
   - Old site: `app/faq/page.tsx`

3. **Blog Page** (`/blog`)
   - Should import: `@/data/blog-posts.json`
   - Old site: `app/blog/page.tsx`

4. **Dynamic Routes** (`/[slug]`)
   - Should import: `@/data/blog-posts.json`, `@/data/cities.json`, `@/data/things-to-do.json`, `@/data/services.json`
   - Old site: `app/[slug]/page.tsx`

5. **Service Pages** (`/[service-slug]`)
   - Should import: `@/data/services.json`
   - Old site: `templates/services/service-page.tsx`

6. **City Pages** (`/[city-slug]`)
   - Should import: `@/data/cities.json`
   - Old site: `templates/cities/city-page.tsx`

## Summary

### ✅ Currently Matching:
- All existing pages/components use the same JSON imports as the old site
- Import paths are identical (`@/data/...`)
- Same JSON files exist in both projects

### ⚠️ Missing:
- Portfolio page (needs `portfolio.json`)
- FAQ page (needs `faq.json` + `services.json`)
- Blog listing page (needs `blog-posts.json`)
- Dynamic route pages (needs multiple JSONs)
- Individual service pages (needs `services.json`)
- Individual city pages (needs `cities.json`)

### 📝 Notes:
- All JSON files are synced between both projects (via `generate_rules.py`)
- Auto-generated JSONs: `faq.json`, `portfolio.json`, `blog-posts.json` (via Python script)
- Manually maintained: `services.json`, `cities.json` (need manual sync)

