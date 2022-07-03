import * as React from 'react';
import styled from '@emotion/styled';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';

import { SearchBarProps } from '../../types/propsTypes';

const Form = styled.form`
  display: flex;
  flex-direction: row;
  width: 500px;
  height: 40px;
  margin: 20px auto;
  border: 2px solid silver;
  border-radius: 6px;
`;

const Search = styled.input`
  width: 100%;
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

export default function SearchBar({
  category,
  setcategory,
  search,
  setSearch,
  onSubmitForm,
}: SearchBarProps) {
  return (
    <Form onSubmit={onSubmitForm}>
      <Select
        value={category}
        onChange={(e) => {
          setcategory(e.target.value);
        }}
        displayEmpty
        sx={{
          width: 130,
        }}
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
