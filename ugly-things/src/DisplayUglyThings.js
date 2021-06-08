import React, {useState, useEffect} from "react"
import axios from "axios"

function DisplayUglyThings(props) {
    const [display, setDisplay] = useState([])

    useEffect(() => {
        axios.get("https://api.vschool.io/josephwhite/thing")
        .then(response => response.data)
        .then((response) => {
            setDisplay(response)
        })
    }, [])

    const getItems = () => {
        axios.get("https://api.vschool.io/josephwhite/thing")
        .then(response => response.data)
        .then((response) => {
            setDisplay(response)
        })
    }

    const deleteItem = (id) => {
        axios.delete(`https://api.vschool.io/josephwhite/thing/${id}`)
            .then(response => getItems())
            .catch(error => console.log(error))
        const newDisplay = display.filter(item => item._id !== id)
        setDisplay([...newDisplay])
    }


    
    let postToScreen = display.map(item => {
        console.log(item)
        return (
            <div className="screen-display">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <button onClick={() => props.editItem(item)} className="btns">Edit</button>
                <button onClick={() => deleteItem(item._id)} className="btns">Delete</button>
                <img src={item.imgUrl} alt=""/>
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