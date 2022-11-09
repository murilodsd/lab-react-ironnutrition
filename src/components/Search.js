import { Divider, Input } from 'antd';

// Iteration 5
function Search({searchBar, setSearchBar}) {

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={searchBar} name="searchBar" type="text" onChange={(e) => setSearchBar(e.target.value)} />
    </>
  );
}

export default Search;