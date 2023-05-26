import './ButtonBook.css'

const ButtonBook = (props) => {

    const bookList = props.bookList

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="header-book-list">
                    <h4 className="book-title">BOOK</h4>
                    <span onClick={props.handleBookList} className="closeModal">&times;</span>
                </div>
                {bookList.map(book => {
                    return (
                        <button
                            className='btn-book'
                            onClick={props.clickBook}
                        >{book.title}</button>
                    )
                })}
            </div>
        </div>

        // <div className='book-list'>
        //     {bookList.map(book => {
        //         return (
        //             <button
        //                 className='btn'
        //                 onClick={props.click}
        //             >{book.title}</button>
        //         )
        //     })}
        // </div>
    )
}

export default ButtonBook;