import { useState } from 'react';
import {
  Form,
  Header,
  Input,
  SearchButton,
  SearchButtonLabel,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = event => {
    console.dir(event.target.value);
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(value);
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <SearchButtonLabel>Search</SearchButtonLabel>
        </SearchButton>

        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={handleChange}
        />
      </Form>
    </Header>
  );
};
