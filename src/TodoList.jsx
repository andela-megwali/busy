import React from 'react';
import Header from './Header';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoItems: JSON.parse(localStorage.todoItems),
      todoItem: '',
      todoDescription: '',
    };

    this.handleInput = this.handleInput.bind(this);
    this.addTodo = this.addTodo.bind(this);
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
    const { todoItems, todoName, todoDescription } = this.state;

    this.setState({
      todoItems: [...todoItems, { todoName, todoDescription }],
      todoItem: '',
    });
  }

  renderTodoItems() {
    const { todoItems } = this.state;

    return todoItems.map(item => (
      <TodoItem
        key={item.todoName}
        name={item.todoName}
        description={item.todoDescription}
        done={item.done}
      />
    ));
  }

  render() {
    const categories = JSON.parse(localStorage.categories);
    const { params: { name } } = this.props.match;
    const category = categories.find(item => name === item.categoryName);

    category.todoItems = JSON.stringify(this.state.todoItems);
    categories.map(item => item.name === name ? category : item);

    localStorage.categories = JSON.stringify(categories.map(item => item.name === name ? category : item));

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
          {this.renderTodoItems()}
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
