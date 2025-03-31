"use client";
import {
    toggleTheme,
    selectCurrentTheme,
  } from "@/slices/theme/themeSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export const ThemeSelector = () => {
    const dispatch = useAppDispatch();
    const theme = useAppSelector(selectCurrentTheme);
    return (
      <div>
        <span aria-label="Current theme">
          {theme}
        </span>
        <select
          value={theme}
          onChange={(e) => dispatch(toggleTheme(e.target.value))}
          className="bg-white dark:bg-gray-800 text-black dark:text-white p-2 rounded border border-gray-300 dark:border-gray-600"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
    );
};
