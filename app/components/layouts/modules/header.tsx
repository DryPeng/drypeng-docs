// @modules/header.tsx


import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useHotkeys } from 'react-hotkeys-hook';

const Header = () => {
  // Use state hooks to store the theme and the search input
  const [theme, setTheme] = useState('light');
  const [search, setSearch] = useState('');

  // Define a function to toggle the theme
  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  // Define a function to handle the search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  

  // Define a function to handle the search submit
  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Do something with the search input, such as routing to a search page
  };

  // Use hotkeys hook to bind the ctrl+k shortcut to focus the search input
  useHotkeys('ctrl+k', () => {
    // Find the search input element by its id and focus it
    document.getElementById('search-input')!.focus();
  });

  // Return the JSX code for the header
  return (
    <header className={`header ${theme}`}>
      <div className="container">
        <div className="logo">
          {/* Use Image component to display the logo image */}
          <Image src="/favicon,ico" alt="DryPeng-Logo" width={100} height={50} />
        </div>
        <div className="menu">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="search">
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              id="search-input"
              value={search}
              onChange={handleSearchChange}
              placeholder="Search..."
            />
            <button type="submit">Go</button>
          </form>
        </div>
        <div className="theme">
          {/* Use a button element to create a theme toggle */}
          <button onClick={toggleTheme}>{theme === 'light' ? '🌙' : '☀️'}</button>
        </div>
      </div>
    </header>
  );
};

export default Header;