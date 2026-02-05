import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
    return twMerge(clsx(inputs))
}

export function formatDate(dateString) {
    const date = new Date(dateString)
    const now = new Date()
    const diffInMs = now - date
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))

    if (diffInDays === 0) {
        return 'Today'
    } else if (diffInDays === 1) {
        return 'Yesterday'
    } else if (diffInDays < 7) {
        return `${diffInDays} days ago`
    } else if (diffInDays < 30) {
        const weeks = Math.floor(diffInDays / 7)
        return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`
    } else if (diffInDays < 365) {
        const months = Math.floor(diffInDays / 30)
        return `${months} ${months === 1 ? 'month' : 'months'} ago`
    } else {
        const years = Math.floor(diffInDays / 365)
        return `${years} ${years === 1 ? 'year' : 'years'} ago`
    }
}

export function truncateText(text, maxLength = 100) {
    if (!text) return ''
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength).trim() + '...'
}
