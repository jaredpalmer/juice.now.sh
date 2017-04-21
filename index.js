'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const juice = require('juice');
const throng = require('throng');

const createServer = id => {
  const service = express();

  service
    .disable('x-powered-by')
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(cors())
    .use(express.static('public'))
    .get('/__health', (req, res) => res.json({ status: 'ok' }))
    .post('/', (req, res) => {
      juice.juiceResources(
        req.body.html,
        req.body.options || {},
        (err, html) => {
          if (err) {
            res.json({ error: err });
          }
          res.json({ html });
        }
      );
    })
    .listen(process.env.PORT || 3000, err => {
      if (err) {
        console.log(err);
      }
      console.log(`Started worker ${id}`);
    });

  process.on('SIGTERM', function() {
    console.log(`Worker ${id} exiting`);
    console.log('Cleanup here');
    process.exit();
  });
};

throng(createServer);
