import { createStore } from 'redux';

const incrementCount = ({ incrementByy = 1 } = {}) => {
    return {
        type: 'INCREMENT',
        incrementByy: incrementByy
    }
}

const decermentCount = ({ decrementBy = 1 } = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy: decrementBy
    }
}

const setCount = () => {
    return {
        type: 'SET',
        set: 100
    }
}

const resetCount = () => {
    return {
        type: 'RESET'
    }
}

//Reducers
//1)Reducers 

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':

            return {
                count: state.count + action.incrementByy
            }

        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }

        case 'SET':

            return {
                count: action.set
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state
    }

    console.log('running')
    return state
}

const store = createStore(countReducer)

const unsubscribee = store.subscribe(() => {
    console.log(store.getState())
})


store.dispatch(incrementCount({
    incrementByy: 44
}))

store.dispatch(incrementCount())

store.dispatch(resetCount())

store.dispatch(decermentCount())

store.dispatch(decermentCount({
    decrementBy: 10
}))

store.dispatch(setCount())