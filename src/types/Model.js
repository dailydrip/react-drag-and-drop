// @flow

import { Record, List } from "immutable";
import ItemType from "./ItemType";

export default class Model
  extends Record({
    items: List()
  }) {
  items: List<ItemType>;
}
