# Centma Care Services — Backend-Ready V2

This package keeps the Polished Homepage V2 design and prepares the site for two practical backend features:

1. **Working website forms** using Netlify Forms for Service Requests, Training Registration and General Contact enquiries.
2. **Editable website content and photos** using Decap CMS. The editor writes to `content/site.json` and uploads images to `media/`.

## What works now in the files
- Service Request form has named fields and Netlify form attributes.
- Training Registration form has named fields and Netlify form attributes.
- Contact form has named fields and Netlify form attributes.
- A simple thank-you page is included.
- Homepage hero/about/image areas are connected to `content/site.json`.
- `admin/` contains the CMS editor and configuration.

## What is still required before the public backend is live
The website must be deployed to a hosting provider such as Netlify and connected to a GitHub repository. The CMS configuration then needs the real GitHub repository name and live site URL in `admin/config.yml`.

### Netlify setup
1. Create a GitHub repository and upload this website folder.
2. Create a free Netlify site from that repository.
3. In Netlify, enable the repository deployment.
4. After the first deploy, Netlify will detect the forms. Form submissions will appear in the Netlify dashboard; email notifications can be configured there.
5. Replace `YOUR-GITHUB-USERNAME/YOUR-REPOSITORY` and `YOUR-SITE.netlify.app` in `admin/config.yml`.
6. Configure the GitHub OAuth/authentication method required by Decap CMS for the repository.
7. Visit `/admin/` on the live website to edit content and upload photos.

## Important
Do not put passwords, payment-card information or private credentials in this project. The CMS login should be handled by GitHub/Netlify authentication.

## Editing model
The website reads selected editable values from `content/site.json`. This means content can be changed in the CMS without manually editing the HTML files. More fields can be moved into the CMS as the site grows.
