# Domain Migration Guide: Moving from vercel.app to a Custom Domain

This project is built to support a custom domain seamlessly via a single configuration source (`src/lib/site.ts`).

---

## 1. Add Custom Domain on Vercel
1. Log in to your [Vercel Dashboard](https://vercel.com).
2. Navigate to your project: **`Shahal-N33`**.
3. Go to **Settings** > **Domains**.
4. Enter your custom domain (e.g. `shahaln.com` and `www.shahaln.com`) and click **Add**.
5. Configure your DNS records at your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.):
   - **A Record**: `@` points to `76.76.21.21`
   - **CNAME Record**: `www` points to `cname.vercel-dns.com`
6. Wait 5–15 minutes for SSL certificates to generate automatically.

---

## 2. Set Up Permanent 301 Redirect on Vercel
To prevent duplicate content and preserve SEO equity from the default `shahaln.vercel.app` URL:
1. In Vercel under **Settings** > **Domains**, locate your domain entries.
2. Select your primary domain (e.g. `shahaln.com`).
3. Under the `shahaln.vercel.app` deployment URL, configure it to **Redirect to `shahaln.com`** with status code **301 (Permanent Redirect)**.
4. If you have both `shahaln.com` and `www.shahaln.com`, set one as the canonical and redirect the other.

---

## 3. Update the Environment Variable
In your Vercel Project settings:
1. Go to **Settings** > **Environment Variables**.
2. Add or update:
   - **Key**: `NEXT_PUBLIC_SITE_URL`
   - **Value**: `https://yourcustomdomain.com` (no trailing slash)
   - **Environments**: Production, Preview, Development.
3. Redeploy your latest commit for the changes to take effect across all canonical links, sitemaps, OpenGraph tags, and structured schemas.
