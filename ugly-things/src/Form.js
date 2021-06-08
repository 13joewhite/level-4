import React, {useState, useEffect} from "react"
import axios from "axios"

const Form = (props) => {
    const [inputData, setInputData] = useState({title: "", imgUrl: "", description: ""})
    const [objData, setObjData] = useState([])
    const [isEdit, setIsEdit] = useState(false)

    useEffect(()=>{
        if(Object.keys(props.item).length !== 0) {
            setInputData(props.item)
            setIsEdit(true)
        } 
        console.log(props.item)
    }, [props.item])

    function handleChange(e) {
    const {name, value} = e.target
    setInputData(prevInputData => {
        return {
            ...prevInputData,
            [name]: value,
        }

    })
}

function postInput(event){
    event.preventDefault()
    console.log(isEdit)
        if(isEdit){
            setObjData(prevObjData => [...prevObjData, inputData])
            axios.put(`https://api.vschool.io/josephwhite/thing/${inputData._id}`, inputData)
                .then(response => console.log(response))
                .catch(error => console.log(error))
        } else {
            setObjData(prevObjData => [...prevObjData, inputData])
            axios.post('https://api.vschool.io/josephwhite/thing', inputData)
        }
        setInputData({title: "", imgUrl: "", description: ""})
    }

    
    const uglyThings = objData.map(obj => {
        return (
            <div key={obj.id} className="screen-display">
                <h2>{obj.title}</h2>
                <p>{obj.description}</p>   
                <button className="btns">Edit</button>
                <button className="btns">Delete</button>
                <img src={obj.imgUrl} alt=""/>
            </div>
            )
        })

    return (
        <div>
            <form onSubmit={() => postInput} className="form">
                <input className="form-option" type="text" name="title" placeholder="Title" value={inputData.title ? inputData.title : ""} onChange={handleChange}/>
                <input className="form-option" type="text" name="imgUrl" placeholder="Img URL" value={inputData.imgUrl? inputData.imgUrl: ""} onChange={handleChange}/>
                <input className="form-option" type="text" name="description" placeholder="Description" value={inputData.description ? inputData.description : ""} onChange={handleChange}/>
                <button onClick={(e)=> postInput(e)} className="form-option">Submit</button>
            </form>
            {uglyThings}
        </div>
    )
}

export default Form