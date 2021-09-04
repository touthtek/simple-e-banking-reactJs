export const accounthistory = (details)=>{

    return (dispatch)=>{
        dispatch({
            type : details.type,
            payload : details.payload
        });
    }

}