import { observable } from 'mobx';


import moment from 'moment';

class Notification {

  constructor(data) {
    const { id, data: { description, time: { date } }, read_at } = data;
    const message = description.replace(/(<b>|<\/b>)/g, '');

    this.id = id;
    this.message = message;
    this.read_at = read_at ? read_at.date : null;
    this.ago = moment(date).fromNow();
    this.date = moment(date).format('MMMM Do YYYY, h:mm:ss a'); 
  }

  @observable message;
  @observable ago;
  @observable id;
  @observable read_at;

}

export default Notification;