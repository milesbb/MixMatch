import { CLEAR_USER, SET_USER_INFO } from "../actions/profileActions";

interface actionInterface {
  type: string;
  payload: any;
}

interface userInterface {
  username: string;
  playlists: string[];
}

interface stateInterface {
  currentUser: userInterface | null;
}

const initialState: stateInterface = {
  currentUser: null,
};

const profileReducer = (state = initialState, action: actionInterface) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        currentUser: action.payload,
      };
    case CLEAR_USER:
      return {
        ...state,
        currentUser: null,
      };
    default:
      return state;
  }
};

export default profileReducer;
