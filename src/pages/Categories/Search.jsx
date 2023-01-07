import { useDispatch, useSelector } from "react-redux";
import {
  getCategoryRequest,
  setFilter,
} from "../../store/slices/categorySlice";

import SearchBar from "../../components/SearchBar";

function Search({ toggleFormModal }) {
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state.category);

  const onFilter = (e) => {
    e.preventDefault();
    dispatch(getCategoryRequest("filtering"));
  };

  const setFilterValue = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <SearchBar
      value={filter}
      setValue={(e) => setFilterValue(e)}
      onFilter={(e) => onFilter(e)}
      toggleFormModal={toggleFormModal}
    />
  );
}

export default Search;
