import {
  GETHEADPHONES_SUCCESS,
  GETHEADPHONES_FAIL,
  CLEARHPERRORS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GETHEADPHONES_SUCCESS:
      return {
        ...state,
        headphones: action.payload,
      };
    case GETHEADPHONES_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case CLEARHPERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
