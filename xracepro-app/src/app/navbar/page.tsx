"use client";

import Link from 'next/link';

export default function Home() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <b>Home</b>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <b>About Us</b>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <b>Contact</b>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        nav {
          padding: 10px;
          background-color: transparent;
        }
        ul {
          list-style: none;
          display: flex;
          gap: 20px;
        }
        a {
          text-decoration: none;
          color: #0070f3;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </nav>
  );
}
