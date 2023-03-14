import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full max-w-6xl mx-auto px-4 py-8 flex justify-between items-center">
      <Link href="/">
        <div className="flex items-center gap-4">
          <figure>
            <Image src="/logo.webp" alt="Logo Manuel Salvador" width={60} height={45} />
          </figure>
          <h1 className="text-3xl font-semibold">ManuBlog</h1>
        </div>
      </Link>
      <div className="flex gap-10 items-center">
        <nav>
          <ul className="flex gap-8 font-semibold">
            <li>
              <Link href="/">Blog</Link>
            </li>
            <li>
              <Link href="/tags">Tags</Link>
            </li>
            <li>
              <Link href="/about-me">Sobre mi</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
