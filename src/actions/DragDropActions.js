function reorderItem(itemId: number, order: number) {
  return {
    type: "REORDER_ITEM",
    payload: {
      itemId,
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
