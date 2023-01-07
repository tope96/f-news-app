import { countriesDictionary, pageSizeDictionary } from './dictionaries';

const initialState = {
  pageSize: pageSizeDictionary[localStorage.getItem('pageSize') || 0].value,
  country: countriesDictionary[localStorage.getItem('country') || 0],
};

// eslint-disable-next-line default-param-last
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SIZE':
      return {
        ...state,
        pageSize: action.payload,
      };
    case 'SET_COUNTRY':
      return {
        ...state,
        country: { ...action.payload },
      };
    default:
      return state;
  }
};

export default reducer;
