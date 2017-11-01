import React from 'react';

const TodoItem = (props) => {
  return (
    <div className={'container'}>
      <div className={'alert alert-success'} role={'alert'}>
        {props.done && (
          <h4 className={'alert-heading'}>
            {`Well done! ${props.name} is complete.`}
          </h4>
        )}

        <h4>{props.name}</h4>
        <hr />
        <h4>{props.description}</h4>

        <button
          className={'btn btn-success'}
          type={'button'}
          onClick={this.addCategory}
        >
          {'Done'}
          <span className="badge badge-light">4</span>
        </button>

        <button
          className={'btn btn-danger'}
          type={'button'}
          onClick={this.addCategory}
        >
          {'Delete'}
          <span className="badge badge-light">4</span>
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
