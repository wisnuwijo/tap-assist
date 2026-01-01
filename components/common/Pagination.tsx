'use client';

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  showingStart: number;
  showingEnd: number;
}

export default function Pagination({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
  showingStart,
  showingEnd,
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const hasPrevious = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return (
    <div className="flex items-center justify-between px-6 py-4 border-t border-[#282e39] bg-[#1e232e]">
      <div className="text-[#9da6b9] text-sm">
        Showing <span className="text-white font-medium">{showingStart}</span> to{' '}
        <span className="text-white font-medium">{showingEnd}</span> of{' '}
        <span className="text-white font-medium">{totalItems}</span> results
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={!hasPrevious}
          className="px-4 py-2 text-sm font-medium text-[#9da6b9] hover:text-white bg-[#282e39] hover:bg-[#3b4354] rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={!hasNext}
          className="px-4 py-2 text-sm font-medium text-[#9da6b9] hover:text-white bg-[#282e39] hover:bg-[#3b4354] rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
}
