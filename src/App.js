import React, { Component } from 'react';
import './App.css';
import Category from './Category'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
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
    const categoryName = value.split(':')[0];
    const categoryDescription = value.split(':')[1];

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
        categoryDescription={category.categoryDescription}
      />
    ));
  }

  render() {
    return (
      <div>
        <div className={'App'}>
          <header className={'App-header'}>
            <h1 className={'App-title'}>{'Time to get busy'}</h1>
          </header>
          <p className={'App-intro'}>
            {'Todo today'}
          </p>
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
