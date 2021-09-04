const initialState = [];

const accountHistoryReducer = (state = initialState, action) =>{

    switch(action.type){
       case 'History':{
           console.log(action,action);
           return [...state, action.payload];
       }
       break;
       default : return state;
    }

}

export default accountHistoryReducer;