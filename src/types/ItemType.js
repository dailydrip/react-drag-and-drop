// @flow

import { Record } from "immutable";

export default class ItemType
  extends Record({
    id: 0,
    name: "",
    order: 0
  }) {
  id: number;
  name: string;
  order: number;
}
