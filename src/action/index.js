export const addtodo = (data) => {
    return {
        type: "add_data",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}
export const deletetodo = (id) => {
    return {
        type: "delete_data",
        id
    }
}