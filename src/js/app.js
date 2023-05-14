import Widget from './Widget';

const widget = new Widget(
  document.getElementById('root'),
  'https://ahj-rxjs-polling-redhead80.herokuapp.com/messages/unread',
);

widget.subscribeToUpdate();
