import React, {useState, useEffect} from "react"
import axios from "axios"
const InputContext = React.createContext()

function InputContextProvider(props){
    const [display, setDisplay] = useState([])
    const [inputData, setInputData] = useState({title: "", imgUrl: "", description: ""})
    const [editInputData, setEditInputData] = useState({title: "", imgUrl: "", description: ""})
    const [objData, setObjData] = useState([])
    const [isEdit, setIsEdit] = useState(false)

    useEffect(() => {
        return getItems()
    }, [])


    function handleChange(e) {
        const {name, value} = e.target
        setInputData(prevInputData => {
            return {
                ...prevInputData,
                [name]: value
            }
        })
    }

    function editHandleChange(e) {
        const {name, value} = e.target
        setEditInputData(prevInputData => {
            return {
                ...prevInputData,
                [name]: value
            }
        })
    }

    let getItems = () => {
        console.log("get items is working")
        axios.get("https://api.vschool.io/josephwhite/thing")
        .then(response => {
             setDisplay(response.data.map(item => {return {...item, editMode: false}}))
        })
    }

    const deleteItem = (id) => {
        axios.delete(`https://api.vschool.io/josephwhite/thing/${id}`)
            .then(response => getItems())
            .catch(error => console.log(error))
        const newDisplay = display.filter(item => item._id !== id)
        setDisplay([...newDisplay])
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
                    .then(response => getItems())
                    .catch(error => console.log(error))
            }
            return setInputData({title: "", imgUrl: "", description: ""})
        }

        function postInput(event){
            event.preventDefault()
                axios.post('https://api.vschool.io/josephwhite/thing', inputData)
                        .then(response => getItems())
                        .catch(error => console.log(error))
                return setInputData({title: "", imgUrl: "", description: ""})
        }

        function submitEdits(event, id){
            event.preventDefault()
            axios.put(`https://api.vschool.io/josephwhite/thing/${id}`, editInputData)
                    .then(response => getItems())
                    .catch(error => console.log(error))
            return setEditInputData({title: "", imgUrl: "", description: ""})
        }

        function toggleEditMode(id){
            let selectedDisplay = display.find(item => item._id === id)
            console.log(selectedDisplay)
            selectedDisplay.editMode = !selectedDisplay.editMode
            let newDisplay = display.map(item => item._id === selectedDisplay._id ? selectedDisplay : item)
            setDisplay(newDisplay)
            return 
        }

    return (
        <InputContext.Provider value={{display, getItems, deleteItem, postInput, inputData, handleChange, submitEdits, toggleEditMode, editInputData, editHandleChange}}>
            {props.children}
        </InputContext.Provider>
    )
}

export {InputContextProvider, InputContext}