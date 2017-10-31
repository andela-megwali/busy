import React from 'react';
import TodoItem from './TodoItem';

class Category extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <input />
        <button
          type={'button'}
          className={'btn btn-primary'}
        >
          {'Add Category'}
        </button>

        <TodoItem />
      </div>
    );
  }
}

export default Category;
