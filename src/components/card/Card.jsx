import React from "react";
import { Link } from "react-router-dom";
import "./card.css";
import { IoIosArrowForward } from "react-icons/io";

export default function Card({ id, title, content, url, icon}) {
  return (
    <>
      {/* Card-Start */}
      <div className="card" id={id}>
      <div className="card-icon">
        {icon}
      </div>
      <div className="card-title">
        <h3>{title}</h3>
      </div>
      <div className="card-content">
        <p>{content}</p>
      </div>
      <div className="card-link">
        <div className="card-button">
          <p>Laporkan Aksi</p>
          <IoIosArrowForward /> {/* Menampilkan ikon panah ke depan */}
        </div>
      </div>
    </div>
      {/* Card-End */}
    </>
  );
}
