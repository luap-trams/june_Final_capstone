'use client'

import { createContext } from "react"
import { useState } from "react";

const SidebarContext = createContext()

const SidebarProvider = ({ children }) => {
    const [val, setVal] = useState(0)
    const [propItem, setPropItem] = useState([])

    return (
        <SidebarContext.Provider value={{val,setVal,propItem, setPropItem}}>
            { children }
        </SidebarContext.Provider>
    )
}
export  { SidebarProvider, SidebarContext}
