export const setTextFilter = (text = '') => {
    return {
        type: 'SET_TextFilter',
        text: text
    }
}

export const sortByAmount = () => {
    return {
        type: 'Sort_BY_AMOUNT',
        amount: 'amount'
    }
}

export const sortByDate = () => {
    return {
        type: 'SORT_BY_DATE',
        date: 'date'
    }
}

export const setStartDate = (date) => {
    return {
        type: 'SET_START_DATE',
        date: date
    }
}

export const setEndDate = (dateE) => {
    return {
        type: 'SET_END_DATE',
        date: dateE
    }
}