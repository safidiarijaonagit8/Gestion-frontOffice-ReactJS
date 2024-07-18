import React from 'react';
import './Pagination.scss';

function Pagination({ totalPages, currentPage, onPageChange }) {
//const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pageNumbers = [...Array(totalPages).keys()].map(num => num + 1);

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
            <button onClick={() => onPageChange(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;