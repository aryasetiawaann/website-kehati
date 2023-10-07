import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

export default function Card({id, title, content, url }) {
  return (
    <>
      {/* Card-Start */}
      <div className="card" id={id}>
        <div className="card-icon">
          <img src="./assets/logo/Group.png" alt="icon" />
        </div>
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <div className="card-content">
          <p>
            {content}
          </p>
        </div>
        <div className="card-link">
          <Link to={url} className="button">
            Laporkan Aksi
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[16px] h-[16px] ms-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </Link>
        </div>
      </div>
      {/* Card-End */}
    </>
  );
}
