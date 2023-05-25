import React, { useState } from 'react'
import ButtonBook from './ButtonBook'
import ButtonChapter from './ButtonChapter'
import DragAndDrop from './DragAndDrop'
import './MemoryGame.css'

const MemoryGame = () => {

    const bookList = [{ title: 'Genesis', id: 1 }, { title: 'Exodus', id: 2 }, { title: 'Leviticus', id: 3 }, { title: 'Numbers', id: 4 }, { title: 'Deuteronomy', id: 5 }, { title: 'Joshua', id: 6 }, { title: 'Judges', id: 7 }, { title: 'Ruth', id: 8 }, { title: '1 Samuel', id: 9 }, { title: '2 Samuel', id: 10 }, { title: '1 Kings', id: 11 }, { title: '2 Kings', id: 12 }, { title: '1 Chronicles', id: 13 }, { title: '2 Chronicles', id: 14 }, { title: 'Ezra', id: 15 }, { title: 'Nehemiah', id: 16 }, { title: 'Esther', id: 17 }, { title: 'Job', id: 18 }, { title: 'Psalms', id: 19 }, { title: 'Proverbs', id: 20 }, { title: 'Ecclesiastes', id: 21 }, 'Song of Songs', 'Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi', 'Matthew', 'Mark', 'Luke', 'John', 'Acts', 'Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians', 'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians', '1 Timothy', '2 Timothy', 'Titus', 'Philemon', 'Hebrews', 'James', '1 Peter', '2 Peter', '1 John', '2 John', '3 John', 'Jude', 'Revelation']

    const genesis = [{ chapter: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'] }]


    const randomId = Math.floor(Math.random() * 9999) + 1

    const [showBookList, setShowBookList] = useState(false)
    const [showChapter, setShowChapter] = useState(false)
    const [showDragAndDrop, setShowDragAndDrop] = useState(false)
    const [id, setId] = useState(randomId)

    const handleBookList = () => {
        setShowBookList(prevState => !prevState)
        setShowChapter(false)
        setShowDragAndDrop(false)
    }

    const clickBook = (id) => {
        setId(randomId)
        setShowChapter(true)
        setShowBookList(false)
        console.log(id)
    }

    const clickChapter = (id) => {
        setShowDragAndDrop(true)
        setShowChapter(false)
    }

    return (
        <main className="memory-verse-section">
            <h1 className="title-memory-game">Memory Game</h1>
            <button className="btn" onClick={handleBookList} id="verseBtn">Select Verse</button>

            {showBookList && <ButtonBook
                handleBookList={handleBookList}
                key={id}
                clickBook={() => clickBook(id)}
                bookList={bookList}
            />}

            {showChapter && <ButtonChapter
                handleBookList={handleBookList}
                chapter={genesis}
                clickChapter={() => clickChapter(id)}
            />}
            {showDragAndDrop && <DragAndDrop handleBookList={handleBookList} />}

            <div className="verse-list">
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