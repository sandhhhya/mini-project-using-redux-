 
 import {createStore} from 'redux'
 
 const initialState = {
    users : [],
    loggedInUser : null ,
    products : [
        {
            id : 1,
            name : "pen" ,
            price : 50
        }, {
            id : 2,
            name : "pencil" ,
            price : 15
        }, {
            id : 3,
            name : "eareser" ,
            price : 54
        }

    ] ,
    cart : []
}


const reducer =( state =initialState , action )=> {
  switch(action.type){ 

    case 'REGISTER':
        return{
            ...state,
            users: [...state.users , action.payload]
        } 

        case 'LOGIN' : 
        return{
            ...state,
            user : action.payload
        } 
        case 'LOGOUT' : 
        return{
            ...state,
            user : null
        }

      default:
          return state;
  }
}



export default createStore(reducer);