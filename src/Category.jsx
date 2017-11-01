import React from 'react';
import './Category.css';

const Category = (props) => {
  return (
    <div className={'col-sm-6 col-lg-4'}>
      <div className={'card category-card'}>
        <div className={'card-body'}>
          <h4 className={'card-title'}>{props.name}</h4>
          <p className={'card-text'}>{props.categoryDescription}</p>
          <a href="#" className={'btn btn-primary'}>View List</a>
        </div>
      </div>
    </div>
  );
};

export default Category;
