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
          padding: 20px !important;
          background-color: transparent;
          padding: 2rem;
          position: relative;
        }
        ul {
          list-style: none;
          display: flex;
          gap: 20px;
        }
        b {
          text-decoration: none;
          color: white;
        }
        b:hover {
          text-decoration: underline;
        }
      `}</style>
    </nav>
  );
}
