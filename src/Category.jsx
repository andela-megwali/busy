import React from 'react';
import './Category.css';

const Category = (props) => {
  return (
    <div className={'col-sm-6 col-lg-4'}>
      <div className={'card'}>
        <div className={'card-body'}>
          <h4 className={'card-title'}>{props.name}</h4>
          <p className={'card-text'}>{props.description}</p>
          <a href={`/category/${props.name}`} className={'btn btn-primary'}>View List</a>
          <button
            className={'btn btn-secondary'}
            type={'button'}
          >
            {'Delete Category'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
