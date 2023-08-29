self.addEventListener('message', function (event) {
  console.log('event');
  console.log(event);
  var data = event.data;
  if (data.command == 'oneWayCommunication') {
    self.registration.showNotification(data.message);

    console.log('Message from the Page : ', data.message);
  }
});

// self.onactivate = () => self.registration.showNotification('bar');

self.addEventListener('install', async (event) => {
  console.log('install');

  // setTimeout(() => {
  //   self.registration.showNotification('bar');
  // }, 3000);
});
