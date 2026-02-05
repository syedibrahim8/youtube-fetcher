import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { formatDate, truncateText } from '../lib/utils'
import { Calendar, User } from 'lucide-react'

export default function VideoCard({ video }) {
  const thumbnail = video.thumbnails?.high?.url || video.thumbnails?.medium?.url || video.thumbnails?.default?.url
  const videoUrl = `https://www.youtube.com/watch?v=${video.videoId}`

  return (
    <Card className="group overflow-hidden h-full flex flex-col hover:scale-[1.02] transition-transform duration-200">
      <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col">
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden bg-gray-100">
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={video.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
              <span className="text-gray-400 text-4xl">🎥</span>
            </div>
          )}
        </div>

        {/* Content */}
        <CardHeader className="flex-1">
          <CardTitle className="text-lg line-clamp-2 group-hover:text-blue-600 transition-colors">
            {video.title}
          </CardTitle>
          <CardDescription className="line-clamp-2 mt-2">
            {truncateText(video.description, 120)}
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="flex flex-col gap-2">
            {/* Channel */}
            {video.channelTitle && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <User className="w-4 h-4" />
                <span className="truncate">{video.channelTitle}</span>
              </div>
            )}

            {/* Published Date */}
            {video.publishedAt && (
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(video.publishedAt)}</span>
              </div>
            )}
          </div>
        </CardContent>
      </a>
    </Card>
  )
}