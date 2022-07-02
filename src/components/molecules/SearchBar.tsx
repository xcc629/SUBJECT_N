import * as React from 'react';
import { useCallback, useState } from 'react';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';

const Form = styled.form`
  display: flex;
  flex-direction: row;
  max-width: 490px;
  min-width: 120px;
  height: 40px;
  margin: 20px;
  border: 2px solid silver;
  border-radius: 6px;
`;

const Search = styled.input`
  width: 90%;
  border: none;
  border-radius: 6px;
  padding-left: 5px;
  &:focus {
    outline: none;
  }
  ::-webkit-search-cancel-button {
    display: none;
  }
`;

const Button = styled.button`
  border: none;
  color: gray;
  background-color: transparent;
`;

export default function CategorySelect() {
  const [category, setcategory] = useState('movie');
  const [search, setSearch] = useState('');

  const onSubmitForm = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      console.log(search, category);
    },
    [search, category],
  );

  return (
    <Form onSubmit={onSubmitForm}>
      <Select
        value={category}
        onChange={(e) => {
          setcategory(e.target.value);
        }}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value="movie">movie</MenuItem>
        <MenuItem value="people">people</MenuItem>
        <MenuItem value="tv">tv</MenuItem>
      </Select>
      <Search
        type="search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="검색어를 입력하세요."
      />
      <Button type="submit">
        <SearchIcon />
      </Button>
    </Form>
  );
}
