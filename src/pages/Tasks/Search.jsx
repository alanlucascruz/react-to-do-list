import { useDispatch } from "react-redux";
import { getTaskRequest } from "../../store/slices/taskSlice";

import SearchBar from "../../components/SearchBar";
import { useState } from "react";

function Search({ toggleFormModal }) {
  const [filter, setFilter] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(getTaskRequest("filtering", filter));
  };

  return (
    <SearchBar
      value={filter}
      setValue={(e) => setFilter(e.target.value)}
      onSubmit={(e) => onSubmit(e)}
      toggleFormModal={toggleFormModal}
    />
  );
}

export default Search;
