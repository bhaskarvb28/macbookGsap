import React from 'react'
import { navLinks } from '../constants';

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="Apple logo" />

        <ul>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.label}>{link.label}</a>
            </li>
          ))}

          {/*[
            { label: "Store" },
            { label: "Mac" },
            { label: "iPhone" },
            { label: "Watch" },
            { label: "Vision" },
            { label: "AirPods" },
          ].map(({label}) => (
                    <li key={label}>
                        <a href={label}>{label}</a>
                    </li>
                )) */}
        </ul>

        <div className="flex-center gap3">
          <button>
            <img src="/search.svg" alt="Search" />
          </button>

          <button>
            <img src="/cart.svg" alt="Cart" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar