self.addEventListener('test1', async (event) => {
  console.log('test1');
  console.log('test1');

  self.registration.showNotification('test1');

  await Notification.requestPermission();
  alert(window.Notification.permission);

  new Notification('提示', { body: 'test' });
});

self.onactivate = () => self.registration.showNotification('bar');

self.addEventListener('install', async (event) => {
  console.log('install');

  setTimeout(() => {
    self.registration.showNotification('bar');
  }, 3000);
});
