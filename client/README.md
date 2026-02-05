# YouTube Video Dashboard

A modern, production-ready React dashboard for browsing YouTube videos with search, pagination, and sorting capabilities.

## 🚀 Quick Start

```bash
# Install dependencies (if not already installed)
pnpm install

# Start development server
pnpm run dev
```

The application will be available at **http://localhost:3000**

## ✨ Features

- **📄 Pagination**: Navigate through videos with smart page controls
- **🔍 Search**: Debounced search by title or description
- **🔄 Sort**: Toggle between newest and oldest videos
- **📱 Responsive**: Optimized for mobile, tablet, and desktop
- **⚡ Fast**: Skeleton loaders and optimized performance
- **♿ Accessible**: ARIA labels and keyboard navigation

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling
- **shadcn/ui** - Component library
- **Axios** - HTTP client
- **Lucide React** - Icons

## 📋 Prerequisites

Your Node.js backend must be running on `http://localhost:5000` and expose:
- `GET /api/videos?page=&limit=&sort=`
- `GET /api/videos/search?q=&page=&limit=`

## 🔧 Configuration

Edit `.env` to change the backend URL:

```env
VITE_API_URL=http://localhost:5000
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui base components
│   ├── VideoCard.jsx    # Individual video card
│   ├── VideoGrid.jsx    # Responsive grid
│   ├── Search.jsx       # Search bar
│   ├── Sort.jsx         # Sort controls
│   ├── Pagination.jsx   # Pagination
│   └── LoadingSkeleton.jsx
├── hooks/
│   ├── useVideos.js     # Main data hook
│   └── useDebounce.js   # Search debouncing
├── services/
│   └── api.js           # API integration
├── lib/
│   └── utils.js         # Utilities
└── App.jsx              # Main app
```

## 🧪 Testing

1. **Search**: Type in the search bar and wait 500ms for results
2. **Sort**: Click the sort button to toggle newest/oldest
3. **Pagination**: Use page numbers or navigation buttons
4. **Responsive**: Resize browser to test different layouts

## 📦 Build for Production

```bash
pnpm run build
pnpm run preview
```

## 🎨 Design Features

- Modern SaaS aesthetic with clean UI
- Smooth hover effects and transitions
- Professional color palette
- Consistent spacing and typography
- Loading states with skeleton screens
- Error and empty states

## 📝 License

MIT

---

Built with ❤️ using React, Tailwind CSS v4, and shadcn/ui
