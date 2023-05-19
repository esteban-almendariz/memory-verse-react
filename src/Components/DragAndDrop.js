import Draggable, { DraggableCore } from 'react-draggable'
import './DragAndDrop.css'


const DragAndDrop = (props) => {



    return (
        <div className="modal">
            <div className="modal-content">
                <div className="header-book-list">
                    <h4 className="book-title">Drag and Drop</h4>
                    <span onClick={props.handleBookList} className="closeModal">&times;</span>
                </div>
                <div className='container-draggable'>
                    <Draggable>
                        <p className='draggable'>using</p>
                    </Draggable>
                    <Draggable>
                        <div>
                            <p className='draggable'>React</p>
                        </div>
                    </Draggable>
                    <Draggable>
                        <div>
                            <p className='draggable'>Drag</p>
                        </div>
                    </Draggable>
                    <Draggable>
                        <div>
                            <p className='draggable'>order</p>
                        </div>
                    </Draggable>
                    <Draggable>
                        <div >
                            <p className='draggable'>in</p>
                        </div>
                    </Draggable><Draggable>
                        <div>
                            <p className='draggable'>verse</p>
                        </div>
                    </Draggable>
                </div>
                <div>
                    <div className="container-draggable">
                        <p className="draggable" >1</p>
                        <p className="draggable" >2</p>
                        <p className="draggable" >3</p>
                        <p className="draggable">4</p>
                        <p className="draggable">5</p>
                        <p className="draggable">6</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DragAndDrop