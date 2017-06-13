import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component{

  renderBookList(){
    return this.props.books.map((book)=> {
        return(
          <li
            key={book.title}
            onClick={ ()=> this.props.selectedBook(book) }
            className="list-group-item">
            {book.title}
          </li>
        );
      });
  }

  render(){
    return(
      <ul className="list-group col-md-4">
        <h3>Book-List </h3>
        { this.renderBookList() }
      </ul>
    )
  }
}

function mapStateToProps(state){
  // whatevers gets returned from here will be available in the
  // props of the BookList.
  return{
     books: state.books
  };
}


// whatevers gets returned from here will be available in the
// props of the BookList.
function mapDispatchToProps(dispatch){
  // dispatch function takes the result of the actionCreator - in this case selectBook
  // and sends them to all the reducers.
  return bindActionCreators({ selectedBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
