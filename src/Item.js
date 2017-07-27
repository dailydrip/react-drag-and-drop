import React from "react";
import { DragTypes } from "./DragTypes";
import { DragSource, DropTarget } from "react-dnd";

const itemSource = {
  beginDrag(props) {
    return {
      id: props.id
    };
  }
};

const itemTarget = {
  canDrop(props, monitor) {
    return true;
  },

  drop(props, monitor) {
    let { reorderItem, order } = props;
    let monitorItem = monitor.getItem();
    reorderItem(monitorItem.id, order);
  }
};

function dropCollect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

function dragCollect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}

const Item = props => {
  const {
    name,
    connectDropTarget,
    connectDragPreview,
    connectDragSource,
    isOver
  } = props;

  let className = "";

  if (isOver) {
    className += " -is-over";
  }

  return connectDropTarget(
    connectDragPreview(
      <div className={`box ${className}`}>
        {connectDragSource(<i className="fa fa-bars" aria-hidden="true" />)}
        {name}
      </div>
    )
  );
};

export default DropTarget(DragTypes.ITEM, itemTarget, dropCollect)(
  DragSource(DragTypes.ITEM, itemSource, dragCollect)(Item)
);
