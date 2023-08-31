import * as React from 'react';
import Button from '@mui/material/Button';
import { history } from 'umi';

const Home: React.FunctionComponent = () => {
  return (
    <div>
      more
      <br />
      <br />
      <br />
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
      <br />
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
      <br />
      <Button
        onClick={() => {
          history.push('/booking/calender');
        }}
      >
        Calender
      </Button>
    </div>
  );
};

export default Home;
