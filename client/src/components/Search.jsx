import { useState } from 'react'
import { Input } from './ui/input'
import { Search, X } from 'lucide-react'
import { useDebounce } from '../hooks/useDebounce'
import { useEffect } from 'react'

export default function SearchBar({ onSearch, initialValue = '' }) {
  const [searchInput, setSearchInput] = useState(initialValue)
  const debouncedSearch = useDebounce(searchInput, 500)

  useEffect(() => {
    onSearch(debouncedSearch)
  }, [debouncedSearch, onSearch])

  const handleClear = () => {
    setSearchInput('')
  }

  return (
    <div className="relative w-full max-w-2xl">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <Input
          type="text"
          placeholder="Search videos by title or description..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="pl-10 pr-10 h-12 text-base"
          aria-label="Search videos"
        />
        {searchInput && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Clear search"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
      {searchInput && (
        <p className="text-sm text-gray-500 mt-2">
          Searching for: <span className="font-medium text-gray-700">{searchInput}</span>
        </p>
      )}
    </div>
  )
}