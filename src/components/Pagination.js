import React from "react";
import { NavigateBefore, NavigateNext } from "@material-ui/icons";
import { useState } from "react";
import ReactPaginate from "react-paginate";

const PaginatedItems = ({ users, url, setUrl, setLoading }) => {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  //   const totalItems = Number(properties[12]);
  const totalItems = 100;

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  //   console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = users.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % totalItems;
    setUrl(`https://dummyjson.com/users?limit=10&skip=` + newOffset);
    setItemOffset(newOffset);
    // window.scroll(0, 1100);
    setLoading(true);
  };

  return (
    <>
      {totalItems > 12 ? (
        <ReactPaginate
          className=""
          breakLabel="..."
          nextLabel={<NavigateNext />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={<NavigateBefore />}
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="active"
        />
      ) : null}
    </>
  );
};

export default PaginatedItems;
