const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {

    switch (action.type) {
        case 'Add_Expense':
            return [
                ...state,
                action.expense
            ]

        case 'Remove_Expense':

            return state.filter((expensee) => {

                console.log(expensee)
                return expensee.id !== action.id
            })

        case 'Edit_Expense':
            return state.map((expense) => {

                if (expense.id === action.id) {

                    return {
                        ...expense,
                        ...action.updates
                    }
                }

                else {
                    return expense
                };
            });

        default:
            return state
    }

};

export default expensesReducer;