import { useState, useEffect, useCallback } from 'react'
import { fetchVideos } from '../services/api'

export function useVideos(initialPage = 1, initialLimit = 12) {
    const [videos, setVideos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [currentPage, setCurrentPage] = useState(initialPage)
    const [totalPages, setTotalPages] = useState(0)
    const [totalVideos, setTotalVideos] = useState(0)
    const [searchQuery, setSearchQuery] = useState('')
    const [sortOrder, setSortOrder] = useState('desc')
    const [limit] = useState(initialLimit)

    const loadVideos = useCallback(async () => {
        setLoading(true)
        setError(null)

        const result = await fetchVideos(currentPage, limit, searchQuery, sortOrder)

        if (result.success) {
            setVideos(result.data)
            setTotalPages(result.pagination.totalPages)
            setTotalVideos(result.pagination.totalVideos)
        } else {
            setError(result.error)
            setVideos([])
        }

        setLoading(false)
    }, [currentPage, limit, searchQuery, sortOrder])

    useEffect(() => {
        loadVideos()
    }, [loadVideos])

    const handleSearch = useCallback((query) => {
        setSearchQuery(query)
        setCurrentPage(1) // Reset to first page on new search
    }, [])

    const handlePageChange = useCallback((page) => {
        setCurrentPage(page)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    const handleSortChange = useCallback((order) => {
        setSortOrder(order)
        setCurrentPage(1) // Reset to first page on sort change
    }, [])

    const refresh = useCallback(() => {
        loadVideos()
    }, [loadVideos])

    return {
        videos,
        loading,
        error,
        currentPage,
        totalPages,
        totalVideos,
        searchQuery,
        sortOrder,
        handleSearch,
        handlePageChange,
        handleSortChange,
        refresh,
    }
}
