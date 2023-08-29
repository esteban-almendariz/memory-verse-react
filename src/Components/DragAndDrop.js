
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useState } from 'react'
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
        
                <DragDropContext  onDragEnd={handleDragDrop}>
                    <Droppable droppableId='ROOT' type='group'>
                        {(provided) => (
                            <div>
                                <ul className='draggable-container' {...provided.droppableProps} ref={provided.innerRef}>
                                {verse.map((verse, index) => (
                                        <Draggable key={verse.id} draggableId={verse.id} index={index}>
                                            {(provided) => (
                                                <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                    <li className='draggable'>{verse.value}</li>
                                                </li>
                                            )}
                                        </Draggable>
                                         
                                        )
                                
                                     )}
                                     
                                 </ul>
                            </div>
                        )}
                        
                    </Droppable>
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