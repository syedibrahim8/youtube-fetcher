import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
})

export const fetchVideos = async (page = 1, limit = 12, searchQuery = '', sortOrder = 'desc') => {
    try {
        const endpoint = searchQuery ? '/api/videos/search' : '/api/videos'
        const params = {
            page,
            limit,
            ...(searchQuery && { q: searchQuery }),
            sort: sortOrder,
        }

        const response = await api.get(endpoint, { params })
        return {
            success: true,
            data: response.data.videos || response.data.data || [],
            pagination: {
                currentPage: response.data.currentPage || response.data.page || page,
                totalPages: response.data.totalPages || response.data.pages || 1,
                totalVideos: response.data.totalVideos || response.data.total || 0,
                hasNextPage: response.data.hasNextPage || false,
                hasPrevPage: response.data.hasPrevPage || false,
            },
        }
    } catch (error) {
        console.error('API Error:', error)
        return {
            success: false,
            error: error.response?.data?.message || error.message || 'Failed to fetch videos',
            data: [],
            pagination: {
                currentPage: page,
                totalPages: 0,
                totalVideos: 0,
                hasNextPage: false,
                hasPrevPage: false,
            },
        }
    }
}

export default api
