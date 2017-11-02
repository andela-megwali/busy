import React from 'react';
import Header from './Header';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: localStorage.length > 0 && JSON.parse(localStorage.categories),
      todoItems: [],
      todoItem: '',
      todoDescription: '',
    };

    this.handleInput = this.handleInput.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.getTodoItems = this.getTodoItems.bind(this);
    this.renderTodoItems = this.renderTodoItems.bind(this);
  }

  handleInput(event) {
    const { value } = event.target;
    const fields = value.split(':');
    const todoName = fields[0]
    const todoDescription = fields[1];

    this.setState({ todoItem: value, todoName, todoDescription });
  }

  addTodo() {
    const { categories, todoName, todoDescription } = this.state;
    const { category, todoItems } = this.getTodoItems(categories);
    const { params: { name } } = this.props.match;

    const newTodoItems = [...todoItems, { todoName, todoDescription }];
    const newCategory = { ...category, todoItems: newTodoItems };

    const newCategories = categories.map(item => item.categoryName === name ? newCategory : item);

    localStorage.categories = JSON.stringify(newCategories);

    this.setState({
      todoItems: newTodoItems,
      categories: newCategories,
      todoItem: '',
    })
  }

  getTodoItems(categories) {
    const { params: { name } } = this.props.match;
    const category = categories && categories.find(item => name === item.categoryName);
    const todoItems = category.todoItems ? category.todoItems : {};
    return { category, todoItems }
  }

  renderTodoItems(todoItems) {
    return todoItems && todoItems.map && todoItems.map(item => (
      <TodoItem
        key={item.todoName}
        name={item.todoName}
        description={item.todoDescription}
        done={item.done}
      />
    ));
  }

  render() {
    const { categories } = this.state;
    const { category, todoItems } = this.getTodoItems(categories);

    return (
      <div>
        <Header />
        <div className={'container'}>
          <h4>{`Category: ${(category && category.categoryName) || ''}`}</h4>
          <h4>{`Description: ${(category && category.categoryDescription) || ''}`}</h4>
          <h4>{'Your Progress'}</h4>
          <div className={'progress'}>
            <div
              className={'progress-bar'}
              role={'progressbar'}
              style={{ width: '25%' }}
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              25%
            </div>
          </div>
          <h4>Your Todos</h4>
          {this.renderTodoItems(todoItems)}
          <hr />
          <h4>{'Add New Todo'}</h4>
          <div className={'container'}>
            <div className={'input-group'}>
              <input
                id={'todoName'}
                type={'text'}
                className={'form-control'}
                placeholder={'Todo name: Description'}
                value={this.state.todoItem}
                onChange={this.handleInput}
              />
              <span className={'input-group-btn'}>
                <button
                  className={'btn btn-primary'}
                  type={'button'}
                  onClick={this.addTodo}
                >
                  {'Add Todo'}
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
