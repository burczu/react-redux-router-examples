import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Container extends React.Component {
  onSetDataClick() {
    // w "this.props" jest dostępna metoda "setData"!!
    this.props.setData({ text: 'data' });
  }

  // w "this.props" jest też właściwość "data" znajdująca się w stanie Reduxa!
  render() {
    return (
      <div>
        <p>{this.props.data}</p>
        <button onClick={this.onSetDataClick.bind(this)}>Set Data</button>
      </div>
    );
  };
}

// mapuje stan Reduxa do "props"
const mapStateToProps = (state) => {
  return {
    // zwróć cały stan (można też zrobić "cherry picking")
    ...state.first
  };
}

// mapuje wywołania "dispatch(akcja)" do props
const mapDispatchToProps = (dispatch) => {
  return {
    // zwraca funkcję set data, która "dispatchuje" kreator akcji "setData"
    setData: (data) => dispatch(actions.setData(data))
  };
}

// connect łączy "store" Reduxa z komponentem
export default connect(mapStateToProps, mapDispatchToProps)(Container);
