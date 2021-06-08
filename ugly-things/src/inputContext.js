import React, {useEffect} from "react"
import axios from "axios"
const InputContext = React.createContext()

function InputContextProvider(props){

    useEffect(() => {
        axios.get("https://api.vschool.io/josephwhite/thing")
        .then(response => response.data)
        .then((response) => {
            console.log(response)
        })
    }, [])

    return (
        <InputContext.Provider value={"placeholder"}>
            {props.children}
        </InputContext.Provider>
    )
}

export {InputContextProvider, InputContext}