import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiSearch } from "react-icons/fi";
import CustomerData from "./customer.json";
function SearchDropdown() {
  // const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState<any>([]);
  const [selectedName, setSelectedName] = useState("");
  const [selectStatus, setSelectStatus] = useState(false);
  // useEffect(() => {
  //   axios
  //     .get(
  //       "http://192.168.0.79:3000/erp/businessapi/showcustomer?customerName="
  //     )
  //     .then((response) => {
  //       console.log(response.data);
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  function handleFilter(e: any) {
    console.log(e.target.value);
    setSelectStatus(false);
    const searchWord = e.target.value;
    setSelectedName(searchWord);

    const newFilterData = CustomerData.filter((value: any) => {
      return searchCaseInsensitiveData(value.Customer_name, searchWord);
    });

    setFilterData(newFilterData);
    // setSelectedName(e.target.value);
  }

  const searchCaseInsensitiveData = (str: string, searchString: string) => {
    const strLower = str.toLowerCase();
    const searchStrLower = searchString.toLowerCase();

    return strLower.includes(searchStrLower);
  };

  console.log("Selected Status ===>",typeof selectStatus,"==>",selectStatus);
  console.log("Selected Name ====> ",typeof selectedName,"==>",selectedName);
  console.log("Filter data Length ====>",typeof filterData.length,"==>",filterData.length);

  return (
    <div className="search" style={{ margin: "12px 0 0 12px" }}>
      <div className="searchInput">
        <input type="text" onChange={handleFilter} value={selectedName} />
        <FiSearch
          style={{ position: "absolute", left: "160px", top: "17px" }}
        />
      </div>
      <div className="dataResult" style={{ display: "inline-grid" }}>
        {filterData.length !== 0 && !selectStatus ? (
          filterData.map((value: any, key) => {
            return (
              <option
                value={value.Customer_name}
                onClick={(e: any) => {
                  handleFilter(e);
                  setSelectStatus(true);
                }}
              >
                {value.Customer_name}
              </option>
            );
          })
        ) : selectStatus === false && filterData.length === 0 && selectedName !== '' ? (
          <>
            Data not found!!!{filterData.length},{selectStatus}
          </>
        ) : (
          <></>
        )}
      </div>
      <div></div>
    </div>
  );
}

export default SearchDropdown;

// filter object and map as per the Enter name in textfield
// datalist html tag with mapping object
