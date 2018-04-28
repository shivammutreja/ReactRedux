import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class BookDetail extends Component {
  render() {
    if (!this.props.activeBook) {
      return <div>Select a book to get started.</div>
    }

    return (
      <div>
        <h3>Detail for: </h3>
        <div>{this.props.activeBook.title}</div>
        <div>{this.props.activeBook.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeBook: state.activeBook
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({activeBook: activeBook}, dispatch)
// }

export default connect(mapStateToProps)(BookDetail);
