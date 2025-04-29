import React, { useState, useEffect, useCallback } from "react";
import { usePosts } from "../../context/PostsContext.utils";
import Button from "../Button/Button";
import styles from "./FilterPanel.module.scss";

interface FilterPanelProps {
  onFilterChange: (filters: { author: string; keywords: string[] }) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ onFilterChange }) => {
  const { authors } = usePosts();
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const debounce = <T extends (...args: unknown[]) => void>(
    func: T,
    delay: number
  ): ((...args: Parameters<T>) => void) => {
    let timeoutId: NodeJS.Timeout;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  const handleFilterChange = useCallback(() => {
    const keywords = searchInput
      .trim()
      .replace(/\s+/g, " ")
      .split(",")
      .map((word) => word.trim())
      .filter((word) => word.length > 0);
    onFilterChange({ author: selectedAuthor, keywords });
  }, [selectedAuthor, searchInput, onFilterChange]);

  useEffect(() => {
    handleFilterChange();
  }, [selectedAuthor, handleFilterChange]);

  const debouncedFilterChange = useCallback(() => {
    const debounceFn = debounce(() => {
      handleFilterChange();
    }, 500);
    debounceFn();
  }, [handleFilterChange]);

  useEffect(() => {
    debouncedFilterChange();
  }, [searchInput, debouncedFilterChange]);

  return (
    <div className={styles.filterPanel}>
      <input
        type="text"
        className={styles.filterPanel__input}
        placeholder="Поиск"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <div className={styles.filterPanel__dropdown}>
        <Button
          label={selectedAuthor || "Выберите автора"}
          withIcon="dropdown"
          variant="regular"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        />
        {isDropdownOpen && (
          <div className={styles.filterPanel__dropdownMenu}>
            <Button
              label="Все авторы"
              variant="minimal"
              onClick={() => {
                setSelectedAuthor("");
                setIsDropdownOpen(false);
              }}
            />
            {authors.map((author) => (
              <Button
                key={author}
                label={author}
                variant="minimal"
                onClick={() => {
                  setSelectedAuthor(author);
                  setIsDropdownOpen(false);
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterPanel;
