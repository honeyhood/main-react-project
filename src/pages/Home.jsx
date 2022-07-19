import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../redux/slices/filterSlice";
import { Categories } from "../components/Categories";
import { Sort } from "../components/Sort";
import { PizzaBlock } from "../components/PizzaBlock";
import { Skeleton } from "../components/PizzaBlock/Skeleton";
import { nanoid } from "nanoid";
import { Pagination } from "../components/Pagination";
import axios from "axios";

const Home = () => {
  const { categoryId, sortType, searchValue, currentPage } = useSelector(
    (state) => state.filter
  );
  const dispatch = useDispatch();

  // const navigate = useNavigate();
  // const isSearch = useRef(false);
  // const isMounted = useRef(false);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const sortBy = sortType.sortProperty.replace("-", "");
    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
    const search = searchValue ? `&search=${searchValue}` : "";

    axios
      .get(
        `https://62bb5f6b7bdbe01d529cb308.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
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
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
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
