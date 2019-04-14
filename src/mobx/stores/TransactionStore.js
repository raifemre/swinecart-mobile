import {
  observable, action, toJS, runInAction
} from 'mobx';

import {
  CustomerTransaction
} from '../../services';
import { formatError } from '../../utils';

class TransactionStore {

  @action async rateBreeder(breederId, requestData) {
    const { error, data, message } = await CustomerTransaction.rateBreeder(breederId, requestData);
    return {
      error: formatError(error),
      data,
      message,
    }
  }

}

export default new TransactionStore();