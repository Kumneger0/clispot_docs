# Clispot Documentation

Official documentation for Clispot, a CLI-based Spotify client. Built with [Starlight](https://starlight.astro.build/) and [Astro](https://astro.build/).

Live at: [clispot.kumneger.dev](https://clispot.kumneger.dev)

## Getting Started

### Prerequisites

- [pnpm](https://pnpm.io/) installed locally.

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Kumneger0/clispot_docs.git
   cd clispot_docs
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Start the development server**:
   ```bash
   pnpm dev
   ```
   The site will be available at `http://localhost:4321`.

## 🧞 Commands

| Command | Action |
| :--- | :--- |
| `pnpm dev` | Starts local dev server at `localhost:4321` |
| `pnpm build` | Build your production site to `./dist/` |
| `pnpm preview` | Preview your build locally, before deploying |

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for more details.

- Content is located in `src/content/docs/`.
- Sidebar configuration is in `astro.config.mjs`.

## 📄 License

This project is licensed under the MIT License.
