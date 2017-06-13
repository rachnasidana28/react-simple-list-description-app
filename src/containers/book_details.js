import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookDetails extends Component {

  render(){
    if(!this.props.activeBook){
      return (
        <div className="col-md-8 ">
          <h3> Book-Detail </h3>
          <div>Select a book to get started.</div>
        </div>
      )
    }
    return(
      <div className="col-md-8">
        <h3>Book-Detail</h3>
          <div className="book-details">
          <dl>
            <dt>Book Title: </dt><dd>{this.props.activeBook.title}</dd>
            <dt>Book Author: </dt><dd>{this.props.activeBook.author} </dd>
            <dt>Book Description: </dt><dd>{this.props.activeBook.desc}</dd>
          </dl>

          </div>


      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    activeBook: state.activeBook
  }
}


export default connect(mapStateToProps)(BookDetails);
