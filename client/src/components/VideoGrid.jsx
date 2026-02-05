import VideoCard from './VideoCard'
import { AlertCircle, Search as SearchIcon } from 'lucide-react'

export default function VideoGrid({ videos, loading, error }) {
    if (error) {
        return (
            <div className="flex flex-col items-center justify-center py-16 px-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md w-full">
                    <div className="flex items-start gap-3">
                        <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                            <h3 className="font-semibold text-red-900 mb-1">Error Loading Videos</h3>
                            <p className="text-sm text-red-700">{error}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if (!loading && videos.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-16 px-4">
                <div className="text-center max-w-md">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <SearchIcon className="w-10 h-10 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No Videos Found</h3>
                    <p className="text-gray-600">
                        Try adjusting your search query or filters to find what you're looking for.
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {videos.map((video) => (
                <VideoCard key={video.videoId || video._id} video={video} />
            ))}
        </div>
    )
}
