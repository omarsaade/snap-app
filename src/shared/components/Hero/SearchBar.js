// import { useReducer, useEffect } from 'react';
// import searchIcon from '../../../assets/search-icon.svg';
// import { validate } from '../../util/validators';

// import './SearchBar.css';

// const inputReducer = (state, action) => {
//   switch (action.type) {
//     case 'CHANGE':
//       return {
//         ...state,
//         value: action.val,
//         isValid: validate(action.val, action.validators),
//       };
//     case 'TOUCH': {
//       return {
//         ...state,
//         isTouched: true,
//       };
//     }
//     default:
//       return state;
//   }
// };

//   return (
//     <div className='search-bar center-flex-row tg'>
//       <label htmlFor='search' className='search-bar-label'>
//         Search
//       </label>
//       <img src={searchIcon} alt='search icon' className='search-bar-icon' />
//       <input
//         id='search'
//         type='text'
//         className='search-bar-input'
//         placeholder={
//           (!inputState.isValid &&
//             inputState.isTouched &&
//             `${props.errorText}`) ||
//           'Search...'
//         }
//         onChange={changeHandler}
//         onBlur={touchHandler}
//         value={inputState.value}
//       />
//     </div>
//   );
// };

// export default SearchBar;
