import { allData }  from './data'

const initialState = {
  data: [],
  sortBy: 'name',
  isAscendSort: false,
  pageNumber: 0
};

export default function table(state = initialState, action) {
  switch (action.type) {

    case 'CHANGE__SORTING__TABLE':

      if (state.sortBy === action.payload) {
        return {
          ...state,
          isAscendSort: !state.isAscendSort
        }
      }

      return {
      	...state,
      	sortBy: action.payload,
        isAscendSort: false
      }

    case 'DOWNLOAD__NEXT__PAGE': 
        const { pageNumber } = state;
 
        if ( pageNumber >= allData.length ) return state;
 
        return {
          ...state,
          data: [...state.data, ...allData[pageNumber]],
          pageNumber: ++state.pageNumber
      }

    default:
      return state;
  }
}