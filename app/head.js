'use client';
import { useState, useEffect } from 'react';

export default function Head() {
  const [mode, setMode] = useState();
  const colorSheme = '';
  useEffect(() => {
    // Check the current color scheme on page load
    const colorScheme = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
      ? 'dark'
      : 'light';
    setMode(colorScheme);

    // Add an event listener for changes to the color scheme
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', event => {
        const colorScheme = event.matches ? 'dark' : 'light';
        setMode(colorScheme);
      });
  }, []);
  return (
    <>
      <title>Tablefy</title>
      <meta
        content="width=device-width, initial-scale=1"
        name="viewport"
      />
      <link
        rel="icon"
        href={
          mode === 'light' ? `/favicon.ico` : `/favicon-light.ico`
        }
      />
    </>
  );
}
