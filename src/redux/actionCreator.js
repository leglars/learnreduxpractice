export  const INITIAL_DATA = "INITIAL_DATA";

export function createData (data) {
    return {
        type: INITIAL_DATA,
        data
    }
}