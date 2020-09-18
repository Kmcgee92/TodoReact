import React from 'react'
import ReactDom from 'react-dom'

const ExpletiveContext = React.createContext('shit')

function ContextualExlamation () {
    return (
        <ExpletiveContext.Consumer>
            {(word) => <span>Oh {word}</span>}
        </ExpletiveContext.Consumer>
    )
}

function VisitGrandmasHouse () {
    return (
        <ExpletiveContext.Provider value='poop'>
            <h1>Grandma's House</h1>
            <ContextualExclamation/>
        </ExpletiveContext.Provider>
    )
}

function VisitFriendsHouse () {
    return (
        <>
            <h1>Friends House</h1>
            <ContextualExclamation/>
        </>
    )
}

function App () {
    return (
        <>
            <VisitFriendsHouse/>
            <VisitGrandmasHouse/>
        </>
    )
}
