import { useDispatch, useSelector } from "react-redux";
import {
  getCategoryRequest,
  setFilter,
} from "../../store/slices/categorySlice";

import InputSearch from "../../components/InputSearch";
import Button from "../../components/Button";

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
    <div className="search-container">
      <form onSubmit={(e) => onFilter(e)}>
        <InputSearch value={filter} setValue={(e) => setFilterValue(e)} />
      </form>
      <Button text="Adicionar" onClick={toggleFormModal} />
    </div>
  );
}

export default Search;
