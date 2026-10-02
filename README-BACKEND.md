# Centma Care Services — Backend / Forms Ready

This version keeps the approved Polished Homepage V2 design and prepares the site for:

1. Netlify Forms for Service Requests, Training Registration and Contact enquiries.
2. Decap CMS with Netlify Git Gateway for editable website content and photos.

## Netlify Forms

The three forms use:
- `data-netlify="true"`
- unique form names
- named fields
- a honeypot field
- a custom success page at `/success/`

In the Netlify dashboard, **Forms → Form detection** must be enabled. Netlify will scan the forms on the next deploy.

## Decap CMS

The CMS is configured with:

```yaml
backend:
  name: git-gateway
  branch: main
```

After Netlify Identity and Git Gateway are enabled, the editor will be available at:

`/admin/`

The CMS edits `content/site.json` and uploads images to `media/`.

## Important

Do not put passwords, payment-card information or private credentials in this project.

The visual design remains the approved Polished Homepage V2. The CMS changes are intended to affect editable content and media only.

## Success page fix
Forms now submit to the root-level `/success.html`, which avoids directory/pretty-URL 404 issues.
The Contact form is no longer intercepted by JavaScript, so Netlify can capture its submission.
