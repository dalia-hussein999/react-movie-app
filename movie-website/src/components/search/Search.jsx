
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from 'react-router-dom';
import './search.css';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const onSearch = (e) => {
    e.preventDefault();
    if (searchValue) navigate(`/Movies/${searchValue}`);
  };

  const mediaTypes = ['movies', 'tv', 'people'];

  return (
    <div className="search-container">
      <div
        style={{
          width: '80%',
          margin: 'auto',
          display: 'flex',
          justifyContent: 'space-between',
        }}
        className="search-content"
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '8px',
            border: 'none',
            borderRadius: '4px',
            width: '40%',
          }}
        >
          <SearchIcon
            onClick={(e) => onSearch(e)}
            style={{ marginRight: '8px', color: '#aaa' }}
          />
          <TextField
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            placeholder="Search..."
            inputProps={{ 'aria-label': 'search' }}
            style={{
              width: '100%',
            }}
          />
        </div>

        <Autocomplete
          options={mediaTypes}
          getOptionLabel={(option) => option}
          style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Media-type" />}
        />
      </div>
    </div>
  );
};

export default SearchBar;




