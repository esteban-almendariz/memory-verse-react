import './ButtonBook.css'

const ButtonBook = (props) => {

    const bookList = props.bookList

    return (
        bookList.map(book => {
            return (
                <button className='btn'>{book}</button>
            )
        })

    )
}

export default ButtonBook;