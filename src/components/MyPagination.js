import Pagination from "react-js-pagination";
import { useRouter } from "next/router";
import mainScreen1 from "../styles/BbcScreens.module.css";


const MyPagination = ({  count, resPerPage }) => {
  const router = useRouter();

  let { page = 1, keyword } = router.query;
  page = Number(page);
  // console.log("screen", page);
  // console.log("keyword", keyword);
  // console.log("routrer.query", router.query);
  let queryParams;
  if (typeof window != "undefined") {
    queryParams = new URLSearchParams(window.location.search);
  }

  const handlePageClick = (currentPage) => {
    if (queryParams.has("page")) {
      queryParams.set("page", currentPage);
    } else {
      queryParams.append("page", currentPage);
    }
    router.push({
      search: queryParams.toString(),
    });
  };

  return (
    <>
      {resPerPage < count && (
        <div className="paginationDiv">
          <Pagination
            activePage={page}
            itemsCountPerPage={resPerPage}
            totalItemsCount={count}
            onChange={handlePageClick}
            nextPageText={"Next"}
            prevPageText={"Prev"}
            firstPageText={"First"}
            lastPageText={"Last"}
            itemClass="page-item"
            linkClass="page-link"
          />
        </div>
      )}
    </>
  );
};

export default MyPagination;
