import React, {useContext} from "react"
import {InputContext} from "./inputContext.js"

function DisplayUglyThings() {
    const {display, deleteItem, toggleEditMode, submitEdits, editHandleChange, editInputData} = useContext(InputContext)

    let postToScreen = display.map(item => {
        console.log("Edit Input Dataxs " + editInputData.title)
        return (
            item.editMode === false ?
            <div className="screen-display">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <button onClick={() => deleteItem(item._id)} className="btns">Delete</button>
                <button onClick={() => toggleEditMode(item._id)}>Edit</button>
                <img src={item.imgUrl} alt=""/>
            </div>
            :
            <div className="screen-display">
                <form onSubmit={(e) => submitEdits(e, item._id)} className="form">
                    <input className="form-option" type="text" name="title" placeholder="Title" value={editInputData.title? editInputData.title : ""} onChange={editHandleChange}/>
                    <input className="form-option" type="text" name="imgUrl" placeholder="Img URL" value={editInputData.imgUrl? editInputData.imgUrl: ""} onChange={editHandleChange}/>
                    <input className="form-option" type="text" name="description" placeholder="Description" value={editInputData.description ? editInputData.description : ""} onChange={editHandleChange}/>
                    <button className="form-option">Submit</button>
                </form>
            </div>
        )
    })
    return (
        <div>
            {postToScreen}
        </div>
    )
}

export default DisplayUglyThings