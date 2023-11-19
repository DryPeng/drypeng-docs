// @modules/header


import React, { useEffect, useState } from 'react'
import Link from 'next/link'
// import { useTheme } from 'next-themes'
import '@FA/css/all.min.css'


export default function Header({ children }: { children: React.ReactNode }) {
  // const [mounted, setMounted] = useState(false)
  // const { theme, setTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  return (
    <header className="flex flex-col fixed w-full z-10 top-0 bg-white dark:bg-black border-b border-gray-100 dark:border-gray-700">
      <div className="flex flex-row items-center justify-between h-14 px-4">
        <div className="flex flex-row items-center justify-start space-x-4">
          <Link href="/">
            <a className="flex items-center text-gray-900 dark:text-gray-100">
              <span className="sr-only">Home</span>
              <img src="/public/dpAll.svg" alt="Logo" className="h-8 w-auto" />
            </a>
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/about">
              <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">About</a>
            </Link>
            <Link href="/blog">
              <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">Blog</a>
            </Link>
            <Link href="/projects">
              <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">Projects</a>
            </Link>
            <Link href="/contact">
              <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">Contact</a>
            </Link>
          </nav>
        </div>
        <div className="flex flex-row items-center justify-end space-x-4">
          {/* <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="bg-gray-200 dark:bg-gray-800 rounded p-3 h-10 w-10"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {mounted && (
              <div className="flex items-center justify-center h-full w-full">
                {theme === 'dark' ? (
                  <i className="fa-light fa-sun h-6 w-6 text-gray-800 dark:text-gray-200" />
                ) : (
                  <i className="fa-light fa-moon h-6 w-6 text-gray-800 dark:text-gray-200" />
                )}
              </div>
            )}
          </button> */}
        </div>
      </div>
      {children}
    </header>
  )
}