
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import './DragAndDrop.css'


const DragAndDrop = (props) => {

    const [verse, setVerse] = useState([
        {
            id: '1',
            value: 'Do'
        },
        {
            id: '2',
            value: 'Not'
        },
        {
            id: '3',
            value: 'Be'
        },
        {
            id: '4',
            value: 'Anxious'
        }])

    

        const itemsFromBackend = [
        { id: uuidv4(), content: 'Jesus'},
        { id: uuidv4(), content: 'said'},
        { id: uuidv4(), content: 'to'},
        { id: uuidv4(), content: 'his'},
        { id: uuidv4(), content: 'disciples'},
        ]

        const columnsFromBackend = {
  
            [uuidv4()]: {
              name: 'Todo',
              items: itemsFromBackend
            },
            [uuidv4()]: {
              name: 'In Progress',
              items: []
            }
        }



        const onDragEnd = (result, columns, setColumns) => {
            if(!result.destination) return
            const {source, destination} = result
            if (source.droppableId !== destination.droppableId) {
              const sourceColumn = columns[source.droppableId];
              const destColumn = columns[destination.droppableId];
              const sourceItems = [...sourceColumn.items];
              const destItems = [...destColumn.items];
              const [removed] = sourceItems.splice(source.index, 1);
              destItems.splice(destination.index, 0, removed);
              setColumns({
                ...columns,
                [source.droppableId]: {
                  ...sourceColumn,
                  items: sourceItems
                },
                [destination.droppableId]: {
                  ...destColumn,
                  items: destItems
                }
              });
            } else {
              const column = columns[source.droppableId]
            const copiedItems = [...column.items]
            const [removed] = copiedItems.splice(source.index, 1)
            copiedItems.splice(destination.index, 0 , removed)
            setColumns({
              ...columns,
              [source.droppableId]: {
                ...column,
                items: copiedItems
              }
            })
            }
          }

    const [columns, setColumns] = useState(columnsFromBackend)

    const handleDragStart = () => {
        console.log('dragging')
    }

    const handleDragDrop = (results) => {
        const {source, destination,type} = results
        console.log(results)

        if(!destination) return
        if(source.droppableId===destination.droppableId && source.index===destination.index) return;

        if(type === 'group') {
            const reorderVerse = [...verse]
            const sourceIndex = source.index
            const destinationIndex = destination.index

            const [removedVerse] = reorderVerse.splice(sourceIndex,1)
            reorderVerse.splice(destinationIndex, 0, removedVerse)
            setVerse(reorderVerse)
        }
    }

    const VerseList = () => {
        return (
            <div>
                <h3>Verse List From Component</h3>
            </div>
        )
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="header-book-list">
                    <h4 className="book-title">Drag and Drop</h4>
                    <span onClick={props.handleBookList} className="closeModal">&times;</span>
                </div>
        
            

                <DragDropContext onDragEnd= {result => onDragEnd(result, columns, setColumns)}>
                    {/* Each droppable will have its own key */}
                    {Object.entries(columns).map(([id, column]) => {
                    return (
                        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                        <h2>{column.name}</h2>
                        <div style={{margin: 8}}>
                            <Droppable key={id} droppableId={id} direction='horizontal'>
                            {(provided, snapshot) => {
                                return (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: '20px',
                                    background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                                    padding: 4,
                                    width:700,
                                    minHeight: 250
                                    }}
                                >
                                    {column.items.map((item, index) => {
                                    return (
                                        <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {(provided, snapshot) => {
                                            return (
                                            <div 
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={{
                                                userSelect: 'none',
                                                padding: '10px',
                                                borderRadius: '6px',
                                                width: '100px',
                                                height: '45px',
                                                backgroundColor: snapshot.isDragging ? '#263B4A' : '#456C86',
                                                color: 'white',
                                                ...provided.draggableProps.style
                                                }}
                                            >
                                                {item.content}
                                            </div>
                                            )
                                        }}

                                        </Draggable>
                                    )
                                    })}
                                    {provided.placeholder}
                                </div>
                                )
                            }}
                            </Droppable>
                        </div>
                        </div>
                    )
                    })}
                </DragDropContext>
                

                <div>
                    <div className="container-draggable">
                        <p className="container-drop" >1</p>
                        <p className="container-drop" >2</p>
                        <p className="container-drop" >3</p>
                        <p className="container-drop">4</p>
                        <p className="container-drop">5</p>
                        <p className="container-drop">6</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DragAndDrop