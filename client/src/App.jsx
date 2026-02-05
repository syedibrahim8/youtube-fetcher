import { useVideos } from './hooks/useVideos'
import SearchBar from './components/Search'
import SortControls from './components/Sort'
import VideoGrid from './components/VideoGrid'
import Pagination from './components/Pagination'
import LoadingSkeleton from './components/LoadingSkeleton'
import { Youtube, RefreshCw } from 'lucide-react'
import { Button } from './components/ui/button'

function App() {
  const {
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
  } = useVideos(1, 12)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                <Youtube className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">YouTube Dashboard</h1>
                <p className="text-sm text-gray-600">
                  {totalVideos > 0 ? `${totalVideos.toLocaleString()} videos` : 'Browse videos'}
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={refresh}
              disabled={loading}
              className="gap-2"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
          </div>

          {/* Search and Sort Controls */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <SearchBar onSearch={handleSearch} initialValue={searchQuery} />
            <SortControls sortOrder={sortOrder} onSortChange={handleSortChange} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <LoadingSkeleton count={12} />
        ) : (
          <>
            <VideoGrid videos={videos} loading={loading} error={error} />

            {/* Pagination */}
            {!error && videos.length > 0 && (
              <div className="mt-12 mb-8">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-600">
            Built with React, Tailwind CSS v4, and shadcn/ui
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App