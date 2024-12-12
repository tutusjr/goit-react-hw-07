import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filterSlice";
import styles from "./SearchBox.module.css";
import { useState } from "react";
export default function SearchBox() {
  const currentFilter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState(currentFilter || "");

  const handleChange = (e) => {
    const value = e.currentTarget.value
    setSearchTerm(value)
    dispatch(changeFilter(value));
  };

  return (
    <div>
      <input
        className={styles.searchContainer}
        type="search"
        name="search"
        onChange={handleChange}
      />
    </div>
  );
}
