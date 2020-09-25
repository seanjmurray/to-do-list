import React, { useState } from 'react'

export const SettingsContext = React.createContext()

const SettingsProvider = (props) => {
    const [showComplete, setShowComplete] = useState(false)
    const [itemCount, setItemCount] = useState(5)
    const [sortBy, setSort] = useState('difficulty')

    const toggleComplete = () => { setShowComplete(!showComplete) }

    const dispCount = (num) => {
        setItemCount(num)
    }

    const setSortBy = (str) => {
        setSort(str)
    }

    const state = {
        showComplete,
        itemCount,
        sortBy,
        toggleComplete,
        dispCount,
        setSortBy
    }

    return (
        <SettingsContext.Provider value={state} >
            {props.children}
        </SettingsContext.Provider>

    )
}

export default SettingsProvider