
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useState } from 'react'
import './DragAndDrop.css'


const DragAndDrop = (props) => {

    const [completedTodos, setCompletedTodos] = useState([])
    const [verse, setVerse] = useState(['Do', 'not', 'be', 'anxious','about','any','thing'])

    const handleDragStart = () => {
        console.log('dragging')
    }

    const verseElements = verse.map((word,index) => {
        return (
            <Draggable key={index} draggableId={index} index={index}>
                {(provided) => (
                    <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        <span>{word}</span>
                    </li>
                )}
                
            </Draggable>
            
        )
    })

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="header-book-list">
                    <h4 className="book-title">Drag and Drop</h4>
                    <span onClick={props.handleBookList} className="closeModal">&times;</span>
                </div>
                <DragDropContext>
                    <div className='draggable-container'>
        
                        <Droppable droppableId='characters'>
                            {(provided) => (
                                <ul className='characters' {...provided.droppableProps} ref={provided.innerRef}>
                                    <div className='verse-container-bottom'>
                                        <h3>Completed Tasks</h3>
                                        {verse.map((word,index) => {
                                            return (
                                                <Draggable key={index} draggableId={index} index={index}>
                                                    {(provided) => (
                                                        <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                            <span>{word}</span>
                                                        </li>
                                                    )}
                                                    
                                                </Draggable>
                                                
                                            )
                                        })}
                                    </div>
                                </ul>
                            )}
                            
                        </Droppable>
                    </div>
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