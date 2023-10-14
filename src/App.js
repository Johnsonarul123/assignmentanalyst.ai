// 

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Card from './Card';
import ReactPaginate from 'react-paginate';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 3; // Adjust the number of items per page as needed

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/data');
        setData(response.data.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching data. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const pageCount = Math.ceil(data?.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentPageData = data?.slice(offset, offset + itemsPerPage);

  return (
    <div className="App">
      <header className="App-header border-solid border-2 border-slate-300 p-5">
        {loading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
        {currentPageData && (
          <div>
            <ul>
              {currentPageData.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </ul>
            <ReactPaginate
            className='flex p-4 text-xl  font-bold justify-center gap-7'
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName="pagination"
              previousLabel="<"
              nextLabel=">"
              activeClassName="active"
            />
          </div>
        )}
      </header>
    </div>
  );
};

export default App;
