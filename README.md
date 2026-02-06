# YouTube Video Fetcher

A full-stack application that fetches the latest videos from YouTube based on a search query, stores them in a database, and provides a paginated API with a modern React dashboard.

## Features

- **Background Fetching**: Automatically fetches latest videos from YouTube every 15 seconds.
- **Search & Sort**: Search videos by title/description and sort by date.
- **Pagination**: Efficient server-side pagination.
- **Modern UI**: Built with React, Tailwind CSS v4, and Shadcn UI.
- **Responsive Design**: fully responsive grid layout.

## Tech Stack

- **Server**: Node.js, Express, MongoDB (Mongoose)
- **Client**: React, Vite, Tailwind CSS
- **Background Jobs**: node-cron
- **YouTube API**: Google Data API v3

## Prerequisites

- Node.js (v18+ recommended)
- pnpm (or npm/yarn)
- MongoDB Connection URI
- YouTube Data API Key(s)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd youtube-fetcher
   ```

2. **Install Server Dependencies**
   ```bash
   cd server
   pnpm install
   ```

3. **Install Client Dependencies**
   ```bash
   cd ../client
   pnpm install
   ```

## Configuration

### Server Configuration
Create a `.env` file in the `server` directory:

```env
# server/.env
PORT=5000
MONGO_URI=your_mongodb_connection_string
YOUTUBE_API_KEYS=key1,key2,key3
SEARCH_QUERY=cricket
FETCH_INTERVAL=*/10 * * * * *
```

### Client Configuration
Create a `.env` file in the `client` directory:

```env
# client/.env
VITE_API_URL=http://localhost:5000
```

## Running the Application

### Option 1: Development Mode (Recommended for editing)
Run client and server separately with hot-reloading.

**Note:** You may need to enable CORS in `server/src/app.js` if you encounter network errors:
```javascript
import cors from 'cors';
app.use(cors());
```

1. **Start Server**
   ```bash
   cd server
   pnpm start
   ```

2. **Start Client** (in a new terminal)
   ```bash
   cd client
   pnpm dev
   ```
   Access the app at `http://localhost:3000` (or the port shown in terminal).

### Option 2: Production Mode (Integrated)
Build the client and serve it through the Node.js server.

1. **Build Client**
   ```bash
   cd client
   pnpm build
   ```

2. **Deploy to Server**
   Copy the build output to the server's source directory:
   ```bash
   # From project root
   mkdir -p server/src/dist
   cp -r client/dist/* server/src/dist/
   ```

3. **Start Server**
   ```bash
   cd server
   pnpm start
   ```
   Access the app at `http://localhost:5000`.

## API Documentation

### Get Videos
Returns a paginated list of videos.

- **URL**: `/api/videos`
- **Method**: `GET`
- **Query Params**:
    - `page` (default: 1)
    - `limit` (default: 20)
- **Example**: `curl "http://localhost:5555/api/videos?page=1&limit=10"`

### Search Videos
Search videos by title or description.

- **URL**: `/api/videos/search`
- **Method**: `GET`
- **Query Params**:
    - `q` (required): Search term
    - `page` (default: 1)
    - `limit` (default: 20)
- **Example**: `curl "http://localhost:5555/api/videos/search?q=cricket"`

## Testing

To verify the server is working correctly without the frontend:

1. **Check Logs**: Ensure "Database connected" and "Video fetcher started" appear in server console.
2. **Test API**:
   ```bash
   curl http://localhost:5000/api/videos
   ```
   You should receive a JSON response with a `data` array containing video objects.

## 🌐 Live Demo

You can see the project working live here:

👉 **https://youtube.ibbu.in**

This demo showcases:
- Automatic background fetching of YouTube videos
- Search and pagination in real-time
- Fully responsive React dashboard
