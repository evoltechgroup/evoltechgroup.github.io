import { ChevronLeft, ChevronRight } from "lucide-react";

type PrevNextPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
};

const clampPage = (page: number, totalPages: number) => {
  if (totalPages < 1) return 1;
  return Math.min(Math.max(page, 1), totalPages);
};

const PrevNextPagination = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: PrevNextPaginationProps) => {
  if (totalPages <= 1) return null;

  const safeCurrentPage = clampPage(currentPage, totalPages);

  return (
    <div
      className={`flex items-center justify-center gap-4 mt-6 ${className ?? ""}`.trim()}
    >
      <button
        onClick={() => onPageChange(clampPage(safeCurrentPage - 1, totalPages))}
        disabled={safeCurrentPage === 1}
        className="group flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
        style={{ color: "#1761A0" }}
      >
        <span className="flex items-center justify-center w-7 h-7 rounded-full transition-all duration-200 group-hover:scale-110 group-disabled:scale-100 border-2 border-[#1761A0]">
          <ChevronLeft className="w-4 h-4 text-[#1761A0]" strokeWidth={3} />
        </span>
        Prev
      </button>

      <span
        className="text-xs font-semibold px-3 py-1 rounded-full"
        style={{ backgroundColor: "#E8F4FF", color: "#1761A0" }}
      >
        {safeCurrentPage} of {totalPages}
      </span>

      <button
        onClick={() => onPageChange(clampPage(safeCurrentPage + 1, totalPages))}
        disabled={safeCurrentPage === totalPages}
        className="group flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
        style={{ color: "#1761A0" }}
      >
        Next
        <span className="flex items-center justify-center w-7 h-7 rounded-full transition-all duration-200 group-hover:scale-110 group-disabled:scale-100 border-2 border-[#1761A0]">
          <ChevronRight className="w-4 h-4 text-[#1761A0]" strokeWidth={3} />
        </span>
      </button>
    </div>
  );
};

export default PrevNextPagination;
