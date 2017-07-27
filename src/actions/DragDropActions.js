function reorderItem(order: number) {
  return {
    type: "REORDER_ITEM",
    payload: {
      order
    }
  };
}

function addItem() {
  return {
    type: "ADD_ITEM"
  };
}

export default {
  reorderItem,
  addItem
};
