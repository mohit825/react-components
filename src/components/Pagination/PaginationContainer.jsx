import React, { useEffect, useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import MemeCard from "../MemeCard";
import Pagination from "./Pagination";
import { calcultateNumberOfPages } from "./utils";

export const LIMIT = 20;

const PaginationContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [productsData, setProductsData] = useState({});

  const { data, loading, error } = useFetchData(
    `https://dummyjson.com/products?limit=${LIMIT}&skip=${
      (currentPage - 1) * LIMIT
    }`
  );

  useEffect(() => {
    const { limit, total } = productsData;
    if ((limit, total)) {
      let numberOfPages = calcultateNumberOfPages(LIMIT, total);
      setTotalPages(numberOfPages);
    }
  }, [productsData]);

  useEffect(() => {
    setProductsData(data);
  }, [data]);

  const onPageSelected = (selectedPage) => {
    if (selectedPage !== currentPage) {
      setCurrentPage(selectedPage);
    }
  };

  const onNextBtnClicked = () => {
    if (currentPage === totalPages) return;
    setCurrentPage((prev) => prev + 1);
  };

  const onPrevBtnClicked = () => {
    if (currentPage === 1) return;
    setCurrentPage((prev) => prev - 1);
  };

  const { products } = productsData;

  return (
    <>
      <div className="flex flex-wrap">
        {products?.length
          ? products.map((product, i) => {
              return <MemeCard meme={product} key={i} />;
            })
          : null}
      </div>
      {currentPage && totalPages && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onNextButtonHandler={onNextBtnClicked}
          onPrevButtonHandler={onPrevBtnClicked}
          onPageSelectHandler={onPageSelected}
        />
      )}
    </>
  );
};

export default PaginationContainer;
