import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { DragDropActions } from "./actions";
import Item from "./Item";

const App = props => {
  const itemsToRender = props.items
    .sortBy(i => i.order)
    .map((item, index) => <Item name={item.name} key={index} />);

  return (
    <div className="App">
      {itemsToRender}
      <button onClick={() => props.reorderItem()}>Reorder</button>
      <button onClick={() => props.addItem()}>Add</button>
    </div>
  );
};

export const AppContainer = connect(
  function mapStateToProps(state) {
    console.log("state", state);
    return {
      items: state.get("items")
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      reorderItem: () => dispatch(DragDropActions.reorderItem()),
      addItem: () => dispatch(DragDropActions.addItem())
    };
  }
)(App);

export default AppContainer;
