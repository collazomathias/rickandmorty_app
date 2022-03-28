import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

export const Pagination = ({info, pageNumber, setPageNumber}) => {

    const [ width, setWidth ] = useState(window.innerWidth);

    const updateDimension = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimension);
        return () => window.removeEventListener("resize", updateDimension);
    }, []);

    return (
        <>
            <style>
                {
                    `
                    @media (max-width: 768px) {
                        .next,
                        .prev {
                            display: none;
                        }
                        .pagination {
                            font-size: 14px;
                        }
                    }
                    `
                }
            </style>
            <ReactPaginate
                className="pagination justify-content-center gap-4 my-4"
                nextLabel="Next"
                previousLabel="Previous"
                nextClassName="btn btn-primary next"
                previousClassName="btn btn-primary prev"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                marginPagesDisplayed={width < 576 ? 1 : 2}
                pageRangeDisplayed={width < 576 ? 1 : 2}
                activeClassName="active"
                onPageChange={(data) => {
                    setPageNumber(data.selected + 1);
                }}
                pageCount={info?.pages}
                forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
            />
        </>
    );
}