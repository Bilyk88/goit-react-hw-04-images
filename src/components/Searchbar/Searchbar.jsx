import { Component } from 'react';
import {
  Form,
  Header,
  Input,
  SearchButton,
  SearchButtonLabel,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.value);
  };

  render() {
    const { value } = this.state;

    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <SearchButtonLabel>Search</SearchButtonLabel>
          </SearchButton>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={value}
            onChange={this.handleChange}
          />
        </Form>
      </Header>
    );
  }
}
