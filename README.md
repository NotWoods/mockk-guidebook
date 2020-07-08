# MockK Guidebook

A guide to using the [MockK testing library](https://mockk.io/).

This resource is designed to help you learn how to use MockK, whether you're new to mocking or [transitioning from another framework](./docs/mockito-migrate/README.md). You can skim and skip around different pages. It's a living document, so it will be receiving updates to add more information over time.

Written by <br><a style="color:inherit" href="https://tigeroakes.com"><svg width="135" height="20" viewBox="0 0 88 13" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor">
  <g transform="translate(.5 .5)">
    <path d="M0 0h12v12H0z" fill="none"/>
    <circle cx="3" cy="4" r="1.5" fill="none"/>
    <circle cx="9" cy="4" r="1.5" fill="none"/>
    <path d="M2.5 5.5V9L5 10.5m4.5-4.9V9L7 10.5" fill="none"/>
    <path d="M6 8.6L7.5 7h-3L6 8.6z" stroke="none"/>
    <path d="M86.6 3.97a.53.53 0 01-.15.17.32.32 0 01-.2.05.5.5 0 01-.26-.08l-.33-.2a2.7 2.7 0 00-.44-.2 1.9 1.9 0 00-.6-.08c-.22 0-.4.03-.56.08-.16.05-.3.12-.4.2-.1.1-.18.2-.23.33-.06.13-.08.27-.08.42 0 .2.05.35.16.47.1.13.25.24.42.33.18.1.38.17.6.24l.7.23c.23.08.46.17.7.28.22.1.42.24.6.4.18.17.32.37.42.6.1.24.16.53.16.87 0 .36-.06.7-.18 1.03a2.4 2.4 0 01-1.44 1.4 3.88 3.88 0 01-3.88-.86l.45-.73c.04-.05.08-.1.14-.13a.37.37 0 01.2-.06c.1 0 .2.04.3.12.1.08.24.16.4.26.15.1.32.17.52.25.2.08.44.12.73.12.43 0 .76-.1 1-.3.23-.2.35-.5.35-.88a.82.82 0 00-.16-.52 1.3 1.3 0 00-.42-.34c-.18-.1-.38-.17-.6-.24l-.7-.2a5.9 5.9 0 01-.68-.28 1.87 1.87 0 01-1.03-1.04 2.42 2.42 0 01.54-2.55c.22-.22.5-.4.83-.52a3.8 3.8 0 012.46.03 3 3 0 011.04.63l-.38.7zM35.07 6.55v3.3c-.4.3-.85.52-1.32.66-.47.14-.97.2-1.5.2-.66 0-1.27-.1-1.8-.3a3.77 3.77 0 01-2.26-2.18 4.4 4.4 0 01-.3-1.67c0-.6.1-1.17.3-1.68a3.8 3.8 0 012.17-2.18 5.17 5.17 0 013.48 0 3.44 3.44 0 011.23.76l-.43.7a.4.4 0 01-.27.2c-.1 0-.22 0-.35-.08l-.37-.22a3.33 3.33 0 00-1.58-.37c-.4 0-.77.08-1.1.2-.32.14-.6.33-.83.58-.23.25-.4.55-.53.9-.12.36-.18.75-.18 1.2 0 .46.06.88.2 1.24a2.4 2.4 0 001.44 1.5c.33.14.7.2 1.13.2a3.1 3.1 0 001.5-.35V7.68h-1a.3.3 0 01-.23-.08.27.27 0 01-.08-.2v-.85h2.7zm24.75 0c0 .6-.1 1.16-.3 1.66a3.88 3.88 0 01-2.13 2.2c-.5.2-1.07.3-1.68.3-.62 0-1.18-.1-1.7-.3a3.83 3.83 0 01-2.14-2.2c-.2-.5-.3-1.06-.3-1.65 0-.6.1-1.15.3-1.66a3.9 3.9 0 012.14-2.2c.5-.2 1.07-.3 1.7-.3a4.57 4.57 0 012.16.55 3.72 3.72 0 011.44 1.47 4.8 4.8 0 01.52 2.14zM24.42 3.74h-2.45v6.9h-1.52v-6.9H18V2.5h6.42v1.24zm2.36 6.9h-1.52V2.48h1.52v8.13zm54.37-6.94h-3.62v2.26h2.85v1.16h-2.84v2.3h3.6v1.2h-5.12V2.5h5.13v1.2zm-39.7 0h-3.62v2.26h2.85v1.16h-2.85v2.3h3.62v1.2H36.3V2.5h5.13v1.2zm2.62 6.93h-1.5V2.5h2.48c.55 0 1 .06 1.42.17.4.12.72.28.97.48.26.2.44.46.56.74.12.3.18.6.18.95a2.24 2.24 0 01-1.03 1.96 2.8 2.8 0 01-.76.36 1.5 1.5 0 01.5.47l2.03 3h-1.37c-.26 0-.44-.1-.56-.3l-1.7-2.6a.6.6 0 00-.2-.2.74.74 0 00-.34-.06h-.65v3.17zm25.97 0h-1.5V2.5h1.5v3.4h.36c.14 0 .26-0 .35-.05a.6.6 0 00.24-.2l2.25-2.84c.1-.12.2-.2.3-.25.1-.05.23-.07.38-.07h1.3L72.5 5.87c-.16.2-.33.35-.5.44.12.04.23.1.33.2.1.08.2.18.3.32l2.82 3.8H74.1a.83.83 0 01-.4-.07.63.63 0 01-.23-.22l-2.3-3a.6.6 0 00-.24-.22c-.1-.04-.23-.06-.4-.06h-.48v3.57zm-2.13 0h-1.17a.5.5 0 01-.32-.1.6.6 0 01-.2-.24l-.6-1.66h-3.37l-.6 1.66a.54.54 0 01-.17.24c-.1.07-.2.1-.33.1h-1.18l3.2-8.13h1.55l3.2 8.13zm-9.62-4.06c0-.45-.06-.85-.18-1.2-.12-.36-.3-.66-.52-.9a2.2 2.2 0 00-.8-.57c-.32-.14-.68-.2-1.07-.2-.4 0-.76.06-1.08.2-.3.13-.58.32-.8.56-.23.25-.4.55-.52.9-.12.36-.18.76-.18 1.2 0 .45.06.85.18 1.2a2.24 2.24 0 001.32 1.47c.32.13.68.2 1.08.2s.75-.07 1.07-.2c.3-.13.58-.32.8-.56.23-.25.4-.55.52-.9.12-.36.18-.76.18-1.2zm6.95 1l-1-2.7a6.14 6.14 0 01-.3-.96 10.83 10.83 0 01-.3.97l-1 2.7h2.6zm-20.2-3.9h-.97v2.7h.95c.28 0 .53-.04.74-.1.2-.08.4-.18.53-.3.13-.13.23-.28.3-.45.07-.17.1-.36.1-.57 0-.4-.13-.73-.4-.95-.28-.22-.7-.33-1.25-.33z" stroke="none"/>
  </g>
</svg>
</a>
