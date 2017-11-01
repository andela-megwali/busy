import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Category from './Category';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: JSON.parse(localStorage.categories),
      category: '',
      categoryName: '',
      categoryDescription: '',
    };

    this.handleInput = this.handleInput.bind(this);
    this.addCategory = this.addCategory.bind(this);
    this.renderCategoryBlocks = this.renderCategoryBlocks.bind(this);
  }

  handleInput(event) {
    const { value } = event.target;
    const fields = value.split(':');
    const categoryName = fields[0]
    const categoryDescription = fields[1];

    this.setState({ category: value, categoryName, categoryDescription });
  }

  addCategory() {
    const { categories, categoryName, categoryDescription } = this.state;

    this.setState({
      categories: [...categories, { categoryName, categoryDescription }],
      category: '',
    });
  }

  renderCategoryBlocks() {
    const { categories } = this.state;

    return categories.map(category => (
      <Category
        key={category.categoryName}
        name={category.categoryName}
        description={category.categoryDescription}
        delete={this.deleteCategory}
      />
    ));
  }

  render() {
    localStorage.categories = JSON.stringify(this.state.categories);

    return (
      <div>
        <Header />
        <div className={'App'}>
          <div className={'container'}>
            <div className={'input-group'}>
              <input
                id={'categoryName'}
                type={'text'}
                className={'form-control'}
                placeholder={'Category name: Description'}
                value={this.state.category}
                onChange={this.handleInput}
              />
              <span className={'input-group-btn'}>
                <button
                  className={'btn btn-primary'}
                  type={'button'}
                  onClick={this.addCategory}
                >
                  {'Add Category'}
                </button>
              </span>
            </div>
          </div>
        </div>
        {this.renderCategoryBlocks()}
      </div>
    );
  }
}

export default App;
