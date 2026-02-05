import { Button } from './ui/button'
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react'

export default function SortControls({ sortOrder, onSortChange }) {
  const toggleSort = () => {
    onSortChange(sortOrder === 'desc' ? 'asc' : 'desc')
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-gray-700">Sort by date:</span>
      <Button
        variant="outline"
        size="sm"
        onClick={toggleSort}
        className="gap-2"
        aria-label={`Sort by ${sortOrder === 'desc' ? 'oldest' : 'newest'} first`}
      >
        {sortOrder === 'desc' ? (
          <>
            <ArrowDown className="w-4 h-4" />
            Newest First
          </>
        ) : (
          <>
            <ArrowUp className="w-4 h-4" />
            Oldest First
          </>
        )}
      </Button>
    </div>
  )
}