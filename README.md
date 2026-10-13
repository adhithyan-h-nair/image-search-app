# 📸 PexelSearch

A clean, responsive image search application built with **React 19**, **Tailwind CSS v4**, and **Vite**, powered by the **Pexels API**.

Whether you're looking for desktop wallpapers, design inspiration, or free stock photos for your next project, PexelSearch delivers a fast, curated browsing experience with an adaptive masonry gallery and sleek dark aesthetics.

---

## ✨ Features

- **Instant Photo Search** — Look up high-resolution royalty-free photos by any keyword.
- **Trending Topic Tags** — Jump straight into curated themes like *Nature*, *Architecture*, *Minimalist*, *Travel*, and *Urban*.
- **Responsive Masonry Gallery** — Dynamically adjusts columns from 1 column on mobile up to 4 columns on desktop displays.
- **Zero Layout Shifts** — Image placeholders adapt to each photo's dominant background tint while images load.
- **Photographer Attribution** — Hover cards celebrate the original photographers with direct links to view and download photos on Pexels.
- **Pagination (Load More)** — Seamlessly load more photos page-by-page.
- **Mobile Friendly** — Designed from the ground up for touchscreens, tablets, and desktop monitors.

---

## 🛠️ Built With

- **[React 19](https://react.dev/)** — Modern React with functional components and hooks
- **[Vite 8](https://vite.dev/)** — Lightning-fast development server and production builds
- **[Tailwind CSS v4](https://tailwindcss.com/)** — Clean utility-first styling with dark theme support
- **[Axios](https://axios-http.com/)** — Promise-based HTTP client for API requests
- **[Pexels API](https://www.pexels.com/api/)** — Millions of free, high-resolution stock photos

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

Make sure you have:
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- A free API key from [Pexels API](https://www.pexels.com/api/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/adhithyan-h-nair/image-search-app.git
   cd image-search-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up your environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_PEXELS_API_KEY=your_pexels_api_key_here
   ```
   *(You can obtain a free API key instantly by creating an account on [pexels.com/api](https://www.pexels.com/api/)).*

4. **Start the local dev server**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` (or the port displayed in your terminal) in your browser.

---

## 📁 Project Structure

```text
image-search-app/
├── public/              # Static public assets
├── src/
│   ├── assets/          # Project assets
│   ├── components/
│   │   ├── Gallery.jsx  # Masonry photo grid with hover cards & attribution
│   │   └── Search.jsx   # Search input bar with quick clear & submit button
│   ├── App.jsx          # Main application logic, state, and responsive shell
│   ├── index.css        # Tailwind imports and base typography settings
│   └── main.jsx         # Application entry point
├── .env                 # Environment variables (API keys)
├── package.json         # Dependencies and scripts
└── vite.config.js       # Vite build configuration with Tailwind plugin
```

---

## 📜 Available Scripts

- `npm run dev` — Starts the local Vite development server
- `npm run build` — Compiles the app for production in the `dist` folder
- `npm run lint` — Runs `oxlint` to check for linting issues
- `npm run preview` — Locally preview the production build

---

## 🤝 Attribution

All photos are generously provided by photographers through the [Pexels API](https://www.pexels.com/api/) under the [Pexels License](https://www.pexels.com/license/) (free for personal and commercial use).
