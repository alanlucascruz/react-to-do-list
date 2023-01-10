import { useDispatch, useSelector } from "react-redux";
import { getTaskRequest, setFilter } from "../../store/slices/taskSlice";

import SearchBar from "../../components/SearchBar";

function Search({ toggleFormModal }) {
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state.task);

  const onFilter = (e) => {
    e.preventDefault();
    dispatch(getTaskRequest("filtering"));
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
