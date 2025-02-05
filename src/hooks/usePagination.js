import { useState } from "react";

export function usePagination(initialPage = 0) {
  const [page, setPage] = useState(initialPage);

  return { page, setPage };
}
