import React from 'react';

class Category extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <input />
        <button type={'button'} className={'btn btn-primary'}>{'Add Category'}</button>
      </div>
    );
  }
}

export default Category;
