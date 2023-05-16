import React, { useState } from 'react'
import ButtonBook from './ButtonBook'
import './MemoryGame.css'

const MemoryGame = () => {

    const [showBookList, setShowBookList] = useState(false)

    const bookList = ['Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel', '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles', 'Ezra', 'Nehemiah', 'Esther', 'Job', 'Psalms', 'Proverbs', 'Ecclesiastes', 'Song of Songs', 'Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi', 'Matthew', 'Mark', 'Luke', 'John', 'Acts', 'Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians', 'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians', '1 Timothy', '2 Timothy', 'Titus', 'Philemon', 'Hebrews', 'James', '1 Peter', '2 Peter', '1 John', '2 John', '3 John', 'Jude', 'Revelation']

    const handleBookList = () => {
        setShowBookList(prevState => !prevState)
    }

    return (
        <main className="memory-verse-section">
            <h1 className="title">Memory Game</h1>
            <button className="btn" onClick={handleBookList} id="verseBtn">Select Verse</button>


            {showBookList && <div className="modal">
                <div className="modal-content">
                    <div className="header-book-list">
                        <h4 className="book-title">BOOK</h4>
                        <span onClick={handleBookList} className="closeModal">&times;</span>
                    </div>
                    <div className="book-list">
                        <ButtonBook bookList={bookList} />
                    </div>
                </div>
            </div>}


            <div class="verse-list">
                <p>John 1:1</p>
                <p>Matthew 4:21</p>
                <p>Philippians 4:6-7 </p>
            </div>
            <p>Verse Below comes from API</p>
            <div id="bible-data"></div>

        </main>

    )
}

export default MemoryGame;