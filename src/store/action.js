

export const load = (value) =>{
    return { type: 'LOAD', value:value}
};


export const searchItem = (value) =>{
    
console.log('here');

    return (dispatch, getState) => {
        const { resturantInfo } = getState();
        console.log('store12', resturantInfo);
        dispatch({
          type: 'SEARCH',
          value:{
              payload:value,
              state:resturantInfo
          }
        });
    };
    // console.log('value',value);
    // return { type: 'SEARCH', value:value}
};