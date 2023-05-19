import React from "react";


import './Notes.css'

const Notes = () => {
    return (
        <div>
            <div className="notes-main-container">
                <div className="notes-list-container">
                    <button>Add Note</button>
                    <div className="notes-list">
                        <h3>Title</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi eius, quas provident illum non
                            aperiam officia, aliquid repudiandae culpa perferendis vel deserunt quibusdam quis vitae ullam
                            molestias saepe expedita a.
                        </p>
                    </div>
                    <hr></hr>

                    <div className="notes-list">
                        <h3>Title</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi eius, quas provident illum non
                            aperiam officia, aliquid repudiandae culpa perferendis vel deserunt quibusdam quis vitae ullam
                            molestias saepe expedita a.</p>
                    </div>
                    <hr></hr>
                </div>


                <div className="new-notes-container">

                    <h1 className="title-notes">Title</h1>
                    <p>Notes Prev.... Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, dolor delectus sunt
                        quasi debitis vel accusamus ipsum, eligendi eius neque fuga enim pariatur, numquam eos iste ex ducimus
                        voluptas at.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae fugiat eligendi asperiores unde
                        recusandae nobis et quia! Quidem, quaerat libero accusantium, placeat minus sequi voluptates esse ex
                        repellat dicta voluptate?
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Notes;