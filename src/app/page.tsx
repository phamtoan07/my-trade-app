"use client";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";
import {
  initializeDefaultTheme,
  selectCurrentTheme
} from "@/slices/theme/themeSlice";
import { ThemeSelector } from "@/styles/layout/ThemeSelector";

export default function Home() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme);

  useEffect(() => {
    dispatch(initializeDefaultTheme());
  }, []);
  
  let currTheme = useAppSelector(selectCurrentTheme);
  console.log(theme);
  console.log(currTheme);

  return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <nav className="p-4">
          <ThemeSelector />
        </nav>
        {/* Rest of your application */}
      </div>
  );
}
