import { useState, useEffect } from "react";
const getLocalStorage = (key, defaultVal) => {
    const initialVal = JSON.parse(localStorage.getItem((key)))
    return initialVal || defaultVal;
}
const useLocalStorage = (key, defaultVal) => {
    const [value, setValue] = useState(()=>{
        return getLocalStorage(key,defaultVal)
    })
    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value))
    },[key, value])
    return [value, setValue];
}
 
export default useLocalStorage;