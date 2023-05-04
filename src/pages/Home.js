import React from "react";

import './Home.css'

const Home = () => {
    return (
        <div>
            <section className="top-section">
                <h1 className="title">Message of the Day</h1>
                <p className="quote"><i className="fa fa-quote-left" ></i> When you
                    remember where God
                    brought you
                    out from, you will stop doubting where God can take you to. <i className="fa fa-quote-right"></i></p>
            </section>
            <main class="memory-verse-section">
                <h1 class="title">Memory List</h1>
                <button class="btn" id="verseBtn">Select Verse</button>

                <div class="modal" id="verseModal">
                    <div class="modal-content">
                        <div class="header-book-list">
                            <h4 class="book-title">BOOK</h4>
                            <span class="closeModal">&times;</span>
                        </div>
                        <div class="book-list">
                            <button>Genesis</button>
                            <button>Exodus</button>
                            <button>Leviticus</button>
                            <button>Numbers</button>
                            <button>Deuteronomy</button>
                            <button>Joshua</button>
                            <button>Judges</button>
                            <button>Ruth</button>
                            <button>1 Samuel</button>
                            <button>2 Samuel</button>
                            <button>1 Kings</button>
                            <button>2 Kings</button>
                            <button>1 Chronicles</button>
                            <button>2 Chronicles</button>
                            <button>Ezra</button>
                            <button>Nehemiah</button>
                            <button>Esther</button>
                            <button>Job</button>
                            <button>Psalms</button>
                            <button>Proverbs</button>
                            <button>Ecclesiastes</button>
                            <button>Song of Songs</button>
                            <button>Isaiah</button>
                            <button>Lamentations</button>
                            <button>Ezekiel</button>
                            <button>Daniel</button>
                            <button>Hosea</button>
                            <button>Joel</button>
                            <button>Amos</button>
                            <button>Obadiah</button>
                            <button>Jonah</button>
                            <button>Micah</button>
                            <button>Nahum</button>
                            <button>Habakkuk</button>
                            <button>Zechariah</button>
                            <button>Malachi</button>
                            <button>Matthew</button>
                            <button>Mark</button>
                            <button>Luke</button>
                            <button>John</button>
                            <button>Acts</button>
                            <button>Romans</button>
                            <button>1 Corinthians</button>
                            <button>2 Corinthians</button>
                            <button>Galatians</button>
                            <button>Ephesians</button>
                            <button>Philippians</button>
                            <button>Colossians</button>
                            <button>1 Thessalonians</button>
                            <button>2 Thessalonians</button>
                            <button>1 Timothy</button>
                            <button>2 Timothy</button>
                            <button>Titus</button>
                            <button>Philemon</button>
                            <button>Hebrews</button>
                            <button>James</button>
                            <button>1 Peter</button>
                            <button>2 Peter</button>
                            <button>1 John</button>
                            <button>2 John</button>
                            <button>3 John</button>
                            <button>Jude</button>
                            <button>Revelation</button>
                        </div>
                    </div>
                </div>


                <div class="verse-list">
                    <p>John 1:1</p>
                    <p>Matthew 4:21</p>
                    <p>Philippians 4:6-7 </p>
                </div>
                <p>Verse Below comes from API</p>
                <div id="bible-data"></div>

            </main>
        </div>
    )
}

export default Home;