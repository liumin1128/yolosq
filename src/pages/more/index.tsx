import * as React from 'react';
import Button from '@mui/material/Button';

const Home: React.FunctionComponent = () => {
  return (
    <div>
      <Button
        onClick={() => {
          navigator.serviceWorker.register('sw.js').then((registration) => {
            Notification.requestPermission().then((status) => {
              window.location.reload();
            });
          });
        }}
      >
        register serviceWorker
      </Button>
      <Button
        onClick={() => {
          console.log(navigator.serviceWorker.controller);
          if (navigator.serviceWorker.controller) {
            navigator.serviceWorker.controller.postMessage({
              command: 'oneWayCommunication',
              message: 'Hi, message from YoloSQ',
            });
          }
        }}
      >
        Sent Notification
      </Button>
    </div>
  );
};

export default Home;
