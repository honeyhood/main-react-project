import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterSelector, setCategoryId } from "../redux/slices/filterSlice";
import { Categories } from "../components/Categories";
import { Sort } from "../components/Sort";
import { PizzaBlock } from "../components/PizzaBlock";
import { Skeleton } from "../components/PizzaBlock/Skeleton";
import { nanoid } from "nanoid";
import { Pagination } from "../components/Pagination";
import { fetchPizzas, pizzaSelector } from "../redux/slices/pizzaSlice";

const Home = () => {
  const { categoryId, sortType, searchValue, currentPage } =
    useSelector(filterSelector);
  const { items, status } = useSelector(pizzaSelector);
  const dispatch = useDispatch();

  // const navigate = useNavigate();
  // const isSearch = useRef(false);
  // const isMounted = useRef(false);

  const getPizzas = async () => {
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const sortBy = sortType.sortProperty.replace("-", "");
    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
    const search = searchValue ? `&search=${searchValue}` : "";

    dispatch(
      fetchPizzas({
        category,
        sortBy,
        order,
        search,
        currentPage,
      })
    );
  };

  useEffect(() => {
    getPizzas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, sortType.sortProperty, searchValue, currentPage]);

  // useEffect(() => {
  //   if (isMounted.current) {
  //     const queryString = qs.stringify({
  //       sortProperty: sortType.sortProperty,
  //       categoryId,
  //       currentPage,
  //     });

  //     navigate(`?${queryString}`);
  //   }
  //   isMounted.current = true;
  // }, [categoryId, sortType.sortProperty, currentPage]);

  // useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(window.location.search.substring(1));
  //     const sort = sortList.find(
  //       (obj) => obj.sortProperty === params.sortProperty
  //     );
  //     dispatch(
  //       setFilters({
  //         ...params,
  //         sort,
  //       })
  //     );
  //     isSearch.current = true;
  //   }
  // }, []);

  // useEffect(() => {
  //   window.scrollTo(0, 0);

  //   if (!isSearch.current) {
  //     fetchPizzas();
  //   }

  //   isSearch.current = false;
  // }, [categoryId, searchValue, sortType.sortProperty, currentPage]);

  const skeletons = [...new Array(6)].map(() => <Skeleton key={nanoid()} />);
  const pizzas = items
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj) => <PizzaBlock key={nanoid()} {...obj} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onChangeCategory={(i) => dispatch(setCategoryId(i))}
        />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === "error" ? (
        <div className="content__error-info">
          <h2>Произошла ошибка при получении пицц</h2>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading" ? skeletons : pizzas}
        </div>
      )}
      <Pagination />
    </div>
  );
};

export default Home;

// const pizzas = items
// .filter((obj) => {
//   if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
//     return true;
//   }
//   return false;
// })
// .map((obj) => <PizzaBlock key={nanoid()} {...obj} />);
// статический поиск
