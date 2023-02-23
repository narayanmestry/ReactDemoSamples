import React from "react";

const dataList = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Jack" },
];
console.log(dataList);

const DataList = () => (
  <>
    <input list="dataList" name="" id="" />
    <datalist id="dataList">
      <option value="">kehgsf</option>
      <option value="">dfad</option>
      <option value="">sdfsd</option>
      <option value="">sdfsdf</option>
      <option value="">sdfsdf</option>
    </datalist>
  </>
);

export default DataList;

// searchble dropdown with object  using material UI 