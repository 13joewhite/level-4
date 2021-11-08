import React, {useContext} from "react"
import {InputContext} from "./inputContext.js"

const Form = () => {
    const {inputData, handleChange, postInput} = useContext(InputContext)

    return (
        <div>
            <form onSubmit={postInput} className="form">
                <input className="form-option" type="text" name="title" placeholder="Title" value={inputData.title ? inputData.title : ""} onChange={handleChange}/>
                <input className="form-option" type="text" name="imgUrl" placeholder="Img URL" value={inputData.imgUrl? inputData.imgUrl: ""} onChange={handleChange}/>
                <input className="form-option" type="text" name="description" placeholder="Description" value={inputData.description ? inputData.description : ""} onChange={handleChange}/>
                <button className="form-option">Submit</button>
            </form>
        </div>
    )
}

export default Form