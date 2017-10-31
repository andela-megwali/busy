import React, { Component } from 'react';
import './App.css';
import Category from './Category'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      categoryName: '',
    };

    this.handleInput = this.handleInput.bind(this);
    this.addCategory = this.addCategory.bind(this);
    this.renderCategoryBlocks = this.renderCategoryBlocks.bind(this);
  }

  handleInput(event) {
    this.setState({ categoryName: event.target.value });
  }

  addCategory() {
    const { categories, categoryName } = this.state;

    this.setState({
      categories: [...categories, categoryName],
      categoryName: '',
    });
  }

  renderCategoryBlocks() {
    const { categories } = this.state;

    return categories.map(category => (
      <Category
        key={category}
        name={category}
      />
    ));
  }

  render() {
    return (
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
              type={'text'}
              className={'form-control'}
              placeholder={'Category name'}
              aria-label={'Search for...'}
              onChange={this.handleInput}
              value={this.state.categoryName}
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
        {this.renderCategoryBlocks()}
      </div>
    );
  }
}

export default App;
