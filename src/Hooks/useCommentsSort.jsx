import { useEffect, useMemo, useRef, useState } from "react";

const SORTERS = {
  newest: (a, b) => b.date.localeCompare(a.date),
  oldest: (a, b) => a.date.localeCompare(b.date),
  highest: (a, b) => b.rating - a.rating,
  lowest: (a, b) => a.rating - b.rating,
};

const SPINNER_DELAY = 500;

const useCommentsSort = (comments) => {
  const [sortBy, setSortBy] = useState("newest");
  const [isSorting, setIsSorting] = useState(false);
  const timerRef = useRef(null);

  const sortedComments = useMemo(
    () => [...comments].sort(SORTERS[sortBy]),
    [comments, sortBy],
  );

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const changeSort = (value) => {
    if (value === sortBy || isSorting) return;

    setSortBy(value);
    setIsSorting(true);
    timerRef.current = setTimeout(() => setIsSorting(false), SPINNER_DELAY);
  };

  return { sortedComments, sortBy, isSorting, changeSort };
};

export default useCommentsSort;
