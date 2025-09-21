export const formatDuration = (isoDuration: string): string => {
  if (!isoDuration) return "N/A";

  // Parse ISO 8601 duration format (e.g., "PT1H30M" or "PT90M")
  const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);

  if (!match) return isoDuration;

  const hours = parseInt(match[1] || "0", 10);
  const minutes = parseInt(match[2] || "0", 10);
  const seconds = parseInt(match[3] || "0", 10);

  const parts: string[] = [];

  if (hours > 0) {
    parts.push(`${hours}h`);
  }

  if (minutes > 0) {
    parts.push(`${minutes}m`);
  }

  if (seconds > 0 && hours === 0) {
    parts.push(`${seconds}s`);
  }

  return parts.length > 0 ? parts.join(" ") : "N/A";
};

export const calculateMovieCount = (
  totalPages: number,
  perPage: number,
  currentPageItemCount: number
): number => {
  if (totalPages === 1) {
    return currentPageItemCount;
  }
  return totalPages * perPage;
};

export const removeDoubleQuotes = (title: string): string => {
  if (!title) return title;
  // Handle quoted titles like 'The Descent': Beneath the Scenes
  return title.replace(/^'([^']+)':\s*(.*)$/, "$1: $2");
};

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};
