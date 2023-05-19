
import './ButtonChapter.css'

const ButtonChapter = (props) => {
    return <div className="modal">
        <div className="modal-content">
            <div className="header-book-list">
                <h4 className="book-title">CHAPTER</h4>
                <span onClick={props.handleBookList} className="closeModal">&times;</span>
            </div>
            <div className='modal-chapter'>
                {props.chapter[0].chapter.map(chapter => {
                    return <button className='btnChapter' onClick={props.clickChapter}>{chapter}</button>
                })}
            </div>
        </div>
    </div>
    // return <div className='modal-chapter'>
    //     {props.chapter[0].chapter.map(chapter => {
    //         return <button className='btnChapter'>{chapter}</button>
    //     })}
    // </div>
}

export default ButtonChapter