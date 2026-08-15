# Kagheni Jenner — Portfolio Client

A responsive portfolio website for Kagheni Jenner, built with Next.js and React. It presents projects, skills, certificates, a résumé, contact options, and live GitHub activity cards.

## Features

- Responsive home, about, projects, certificates, résumé, and contact pages
- Next.js App Router with static pages and a server-side contact endpoint
- Contact email delivery through Resend
- PDF résumé viewer and download support
- Live GitHub statistics, streak, language, summary, trophy, and profile-view cards
- Vercel Analytics and Speed Insights
- Sass styling, animations, and reusable responsive components
- Search-engine and social-sharing metadata

## Technology

- Next.js 16
- React 18
- Sass/SCSS
- Resend
- React PDF Viewer and PDF.js
- Vercel Analytics and Speed Insights

## Local development

Requirements:

- A current Node.js LTS release
- npm or Bun

Clone the repository and enter the client directory:

```bash
git clone https://github.com/kaghenijenner/kaghenijenner.git
cd kaghenijenner/client
```

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To create and serve a production build:

```bash
npm run build
npm run start
```

The repository also includes `bun.lock`, so the equivalent Bun commands may be used.

## Environment variables

Create `client/.env.local` to enable the contact form:

```dotenv
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=Portfolio <portfolio@your-verified-domain.example>
NOTIFICATION_EMAIL=your-address@example.com
GITHUB_TOKEN=your_github_personal_access_token
```

The sending address must use a domain verified in Resend. The GitHub token is used only by the server-side contribution-calendar endpoint; add the `read:user` scope if private contribution counts should be included. Do not commit `.env.local` or expose either token in browser code.

## Project structure

```text
client/
├── public/                    # Static images, résumé, robots.txt, and project media
├── src/
│   ├── app/                   # Next.js routes, layout, metadata, and contact API
│   │   ├── api/contact/       # POST endpoint backed by Resend
│   │   ├── about/
│   │   ├── certificates/
│   │   ├── contact/
│   │   ├── projects/
│   │   └── resume/
│   ├── assets/                # Imported images and certificate media
│   ├── components/            # Header, skills, projects, and GitHub cards
│   ├── hooks/                 # Shared React hooks
│   ├── styles/                # Page and component SCSS
│   └── views/                 # Page-level React views
├── next.config.mjs
├── package.json
├── tsconfig.json
└── vercel.json
```

## GitHub cards

The GitHub section uses the following maintained sources:

- [GitHub Profile Summary Cards](https://github.com/vn7n24fzkq/github-profile-summary-cards) for stats, languages, and profile details
- [GitHub Readme Streak Stats](https://github.com/DenverCoder1/github-readme-streak-stats) through a working Vercel deployment
- [GitHub Profile Trophy](https://github.com/ryo-ma/github-profile-trophy) through its listed RyglCloud mirror
- [Komarev Profile Views Counter](https://github.com/antonkomarev/github-profile-views-counter)

The cards use dark themes, and the streak card uses the `Africa/Kampala` timezone.

## Deployment

The project includes `vercel.json` and is configured for Vercel. Set the Resend variables and `GITHUB_TOKEN` in the Vercel project settings before deploying.

For another Node.js-compatible platform, install dependencies, run `npm run build`, and launch the app with `npm run start`. Next.js production output is written to `.next`, not `dist`.

## Contact

- Email: jennermaximbusiness@gmail.com or jennersi1remaxim@gmail.com
- GitHub: [@kaghenijenner](https://github.com/kaghenijenner)
- LinkedIn: [Jenner Maxim](https://www.linkedin.com/in/jenner-maxim-b11051251)
- X: [@maximjenner](https://x.com/maximjenner)
- Instagram: [@jennermaxim](https://www.instagram.com/jennermaxim)
