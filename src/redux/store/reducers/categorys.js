const initialState = {
    categorys: [],
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case "List_Category":
            return { ...state, categorys: action.payload };
        case "Update_Category":
            return {
                ...state,
                products: state.categorys.map((item) =>
                    item.id === action.payload.id ? action.payload : item
                )
            };
        case "Add_Categoryt":
            return { ...state, categorys: [...state.categorys, action.payload] };
        case "Delete_Category":
            return { categorys: state.categorys.filter((value) => value.id !== action.payload.id) };

        default:
            return state
    }
}

export default categoryReducer;