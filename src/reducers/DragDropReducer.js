// @flow

import { Model, ItemType } from "../types";
import { List } from "immutable";
const init = new Model({ items: List([new ItemType({ name: "First" })]) });

type ActionType = "ADD_ITEM" | "REORDER_ITEM";

export default function DragDropReducer(
  model: Model = init,
  action: { type: ActionType, payload: ?Object }
) {
  switch (action.type) {
    case "ADD_ITEM":
      return addItem(model, action.payload);
    case "REORDER_ITEM":
      return reorderItem(model, action.payload);
    default:
      return model;
  }
}

function addItem(model, payload) {
  return model.updateIn(["items"], items => {
    const maxOrder = model.items.map(i => i.order).max() || 0;
    return items.push(
      new ItemType({ name: "SOMETHING!", order: maxOrder + 1 })
    );
  });
}

function reorderItem(model, payload) {
  return model;
}
