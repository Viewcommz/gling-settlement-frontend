import { useReducer } from "react";
import { useEffect } from "react";

interface AsyncState {
  loading: boolean;
  data: any;
  error: any;
}
interface AsyncAction {
  type: 'LOADING' | 'SUCCESS' | 'ERROR';
  data?: any;
  error?: any;
}
const initialState = {
  loading: false,
  data: null,
  error: false,
}

function reducer(state: AsyncState = initialState, action: AsyncAction):AsyncState {
  switch(action.type) {
    case 'LOADING':
      return {
        loading: true,
        data: null,
        error: null,
      };
    case 'SUCCESS':
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case 'ERROR':
      return {
        loading: false,
        data: null,
        error: action.error
      };
    default:
      return state;
  }
}

function useAsync(callback:any, deps=[]):[AsyncState,() => Promise<void>] {  
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchData = async () => {
    dispatch({ type : 'LOADING' });
    try {
      const data = await callback();
      console.log("들어옴",data)
      dispatch({ type : 'SUCCESS', data : data.data });
    } catch (err) {
      dispatch({ type : 'ERROR', error:err})
    }
  }

  useEffect(() => {
    fetchData();
  },deps);

  return [state, fetchData];
}

export default useAsync;