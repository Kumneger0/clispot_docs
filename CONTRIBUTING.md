# Contributing to clispot-docs

Help us keep the documentation accurate and helpful!

## Development Setup

1. **Fork and Clone**:
   - Fork the [clispot_docs](https://github.com/Kumneger0/clispot_docs) repository.
   - Clone your fork locally:
     ```bash
     git clone https://github.com/YOUR_USERNAME/clispot_docs.git
     cd clispot_docs
     ```

2. **Prerequisites**:
   - Node.js and pnpm.

3. **Run Locally**:
   ```bash
   pnpm install
   pnpm run dev
   ```
   The docs will be available at `http://localhost:4321`.

## Adding Content

- Content is written in Markdown/MDX in `src/content/docs/`.
- Sidebar configuration is managed in `astro.config.mjs`.

## Guidelines

- Keep instructions clear and concise.
- Use screenshots where helpful.
- For OS-specific paths, try to provide examples for Linux, macOS, and Windows.
