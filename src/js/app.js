import Widget from './Widget';

const widget = new Widget(
  document.getElementById('root'),
  'https://ahj-rxjs-polling-backend.onrender.com',
);

widget.subscribeToUpdate();
