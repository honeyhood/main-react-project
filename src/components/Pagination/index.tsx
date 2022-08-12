import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/slices/filter/filterSlice";
import { filterSelector } from "../../redux/slices/filter/selectors";

export const Pagination: React.FC = () => {
  const { currentPage } = useSelector(filterSelector);
  const dispatch = useDispatch();
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => dispatch(setCurrentPage(e.selected + 1))}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={currentPage - 1}
      previousLabel="<"
    />
  );
};
