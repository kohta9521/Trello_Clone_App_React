import "./App.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function App() {
  return (
    <div className="dragDropArea">
      <DragDropContext>
        <Droppable DroppableId="droppable">
          {(provided) => (
            <div
              className="item"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <Draggable draggableId="item0" index={0}>
                {(provided) => {
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    item0
                  </div>;
                }}
              </Draggable>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
