import to from 'await-to-js';
import {
  BREEDER_PROFILE_REQUEST
} from '../../types/breederProfile';

import {
  BreederProfileService  
} from '../../../services';

export function getBreederProfile() {
  return async dispatch => {

    const [error, data] = await to(BreederProfileService.getProfile());

    if (error) {
    }
    else {
      const { profile } = data.data;
      dispatch({ type: BREEDER_PROFILE_REQUEST, payload: { profile } });
    }

  };
}
