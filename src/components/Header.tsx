"use client";  // This is needed because we'll use client-side interactivity

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-sm">
      <nav className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo/Name */}
        <div className="font-bold text-xl">
          Luke Worobey
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6">
          <a href="/" className="nav-link">
            Home
          </a>
          <a href="/projects" className="nav-link">
            Projects
          </a>
          <a href="/about" className="nav-link">
            About
          </a>
          <a href="/contact" className="nav-link">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
} 