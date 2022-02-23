const intialsdata = {
    list: [],
}

const todoreducer = (state = intialsdata, action) => {
    switch (action.type) {
        case "add_data":
            const { id, data } = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            }
        case "delete_data":
            const newlist = state.list.filter((elm) => elm.id !== action.id)
            return {
                ...state,
                list: newlist
            }
        default:
            return state;
    }
}
export default todoreducer;