import { Skeleton } from './ui/skeleton'
import { Card, CardContent, CardHeader } from './ui/card'

export default function LoadingSkeleton({ count = 12 }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: count }).map((_, index) => (
                <Card key={index} className="overflow-hidden">
                    {/* Thumbnail skeleton */}
                    <Skeleton className="aspect-video w-full" />

                    {/* Content skeleton */}
                    <CardHeader>
                        <Skeleton className="h-6 w-full mb-2" />
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-4 w-full mt-2" />
                        <Skeleton className="h-4 w-5/6" />
                    </CardHeader>

                    <CardContent className="pt-0">
                        <Skeleton className="h-4 w-2/3 mb-2" />
                        <Skeleton className="h-4 w-1/2" />
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
