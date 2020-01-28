
export const Action_Types = {
   CREATE: 'CREATE',
   UPDATE: 'UPDATE',
   DELETE: 'DELETE',
   FETCH_ALL: 'FETCH_ALL'
}

export const fetchAll = () => dispatch =>{
    
   //get api req
   dispatch({
      type: Action_Types.FETCH_ALL,
      payload: []
   })
}