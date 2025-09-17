# Project Monitoring App

A comprehensive React-based app for tracking project progress, tasks, deadlines, and analytics. Built with TypeScript, Material-UI, Redux, and Recharts.

## Features
- **Dashboard**: Health indicators, progress bars, Gantt charts (placeholders).
- **Project/Task Management**: CRUD for projects and tasks with mock data.
- **Notifications**: Basic alert system (expandable to real-time).
- **Reporting**: Simple exports (PDF/CSV via libraries).
- Responsive design with dark mode toggle.

## Quick Start
1. Clone the repo: `git clone https://github.com/yourusername/project-monitoring-app.git`
2. Install: `npm install`
3. Run dev server: `npm start`
4. Build for production: `npm run build`
5. Deploy: `npm run deploy` (requires `gh-pages` installed globally: `npm i -g gh-pages`)

## Tech Stack
- Frontend: React 18+ TS, Redux Toolkit, Material-UI, Recharts
- See [development guide](docs/development-guide.md) for full specs.

## Deployment
- Hosted on GitHub Pages: https://yourusername.github.io/project-monitoring-app
- CI/CD via GitHub Actions (see `.github/workflows/deploy.yml`).

## Contributing
Follow the [phases](docs/development-guide.md) for expansions. Run tests: `npm test`.

## License
MIT
