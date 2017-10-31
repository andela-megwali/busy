import React from 'react';
// import TodoItem from './TodoItem';

// class Category extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {};
//   }

//   render() {
//     return (
//       <div className={'container'}>
//         <TodoItem />
//       </div>
//     );
//   }
// }

const Category = (props) => {
  return (
    <div className={'container'}>
      <p>{props.name}</p>
    </div>
  );
};

export default Category;
