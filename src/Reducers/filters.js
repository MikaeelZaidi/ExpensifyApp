import moment from 'moment';

const filterReducerDefault = {
    text: '',
    sortBy: 'date', //date or amount
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}

const filterReducer = (state = filterReducerDefault, action) => {

    switch (action.type) {

        case 'SET_TextFilter':
            return {
                ...state,
                text: action.text
            }

        case 'Sort_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }

        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy:'date'
            }

        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }

        case 'SET_END_DATE':

            return {
                ...state,
                endDate:action.endDate

            }
        default:
            return state
    }
}

export default filterReducer