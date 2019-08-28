
import { BREEDER_PROFILE_REQUEST } from '../types/breederProfile';

const initialState = {
  profile: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case BREEDER_PROFILE_REQUEST: {
      return {
        ...state,
        profile: payload.profile
      };
    }
    default:
      return state;
  }
}

