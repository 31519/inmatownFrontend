import React, { useState } from "react";
import {useRouter} from "next/router"
import searchBox from "../styles/searchBox.module.css";




const SearchBox = () => {
  const [keyword, setKeyword] = useState("");

  const router = useRouter()


  const searchHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      let searchQuery = `${router.pathname}?keyword=${keyword}`;
      router.push(searchQuery)
    } else {
      router.push(`${router.pathname}`)
    }
  };

  return (
    <div className={searchBox.container}>
      {/* <form className={searchBox.formContainer} onSubmit={searchHandler}> */}
        <div className={searchBox.inputDiv}>
          <input
            className={searchBox.formInput}
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            type="text"
            placeholder="what you are looking for ?"
          />
          
          <button className={searchBox.formButton} onClick={searchHandler} type="submit">
            Search
          </button>
        </div>
      {/* </form> */}
    </div>
  );
};

// < className={searchBox.container}>
//* <Box
//   sx={{
//     width: 500,
//     maxWidth: "100%",
//   }}
// >
//   <TextField
//   className={searchBox.textField}
//     fullWidth
//     label="Search"
//     id="fullWidth"
//     value={keyword}
//     onChange={(e) => setKeyword(e.target.value)}
//   />
// </Box> */}
// </>
export default SearchBox;
