// @flow

import { Record } from "immutable";

export default class ItemType
  extends Record({
    name: "",
    order: 0
  }) {
  name: string;
  order: number;
}
