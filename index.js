const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const webpush = require('web-push');

const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json());
// ###You can generate VAPID keys using the command:
// **./node_modules/.bin/web-push generate-vapid-keys**
webpush.setVapidDetails(
  'mailto: `YOUR EMAIL OR WEBSITE ADDRESS`',
  'BLapGzcZ734mHwipjuOpS47Be78p3gUwugAe9-YCr8hg2K663sTDcYW87CzZVsgdmB-Gv29jpHojiKumU6-fopo',
  'ay9VgURVcLgUe1iSytMyxmG0HE5EpEZ7dTYYnzOVOEs'
);

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.post('/post', (req, res) => {
  console.log('connected to react');
  res.redirect('/');
});

app.post('/notifications/subscribe', (req, res) => {
  console.log(req.body);
  const payload = JSON.stringify({
    title: req.body.title,
    description: req.body.description,
    icon: req.body.icon,
  });
  // console.log(req.body.subscription);
  webpush
    .sendNotification(req.body.subscription, payload)
    .then((result) => console.log())
    .catch((e) => console.log(e.stack));

  res.status(200).json({ success: true });
});

app.listen(8000, () =>
  console.log('The server has been started on the port 8000')
);
