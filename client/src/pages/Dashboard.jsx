import { useEffect,useState } from "react";
import { fetchVideos, searchVideos } from "../api/VideoApi";
import VideoCard from "../components/VideoCard";
import SearchBar from "../components/Search";
import SortSelect from "../components/Sort";
import Pagination from "../components/Pagination";

export default function Dashboard() {
  const [videos, setVideos] = useState([]);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("newest");
    console.log(videos);
  useEffect(() => {
    loadVideos();
  }, [page]);

  const loadVideos = async () => {
    const res = await fetchVideos(page, 9);
    setVideos(res.data);
  };

  const handleSearch = async (q) => {
    if (!q) return loadVideos();
    const res = await searchVideos(q);
    setVideos(res.data);
  };

const sortedVideos = Array.isArray(videos)
  ? [...videos].sort((a, b) =>
      sort === "newest"
        ? new Date(b.publishedAt) - new Date(a.publishedAt)
        : new Date(a.publishedAt) - new Date(b.publishedAt)
    )
  : [];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        📺 YouTube Video Dashboard
      </h1>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <SearchBar onSearch={handleSearch} />
        <SortSelect value={sort} onChange={setSort} />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sortedVideos.map((video) => (
          <VideoCard key={video.videoId} video={video} />
        ))}
      </div>

      <Pagination page={page} setPage={setPage} />
    </div>
  );
}