'use strict';

const math = require('mathjs');
const bigtable = require('@google-cloud/bigtable');

const bigtableClient = bigtable({
  
});
const instance = bigtableClient.instance('helloworld');
const table = instance.table('cloudFunctions');

exports.helloCloudFunctions = (event, callback) => {
  const COLUMN_FAMILY_NAME = 'cf1';
  const COLUMN_NAME = 'greeting';

  const pubsubMessage = event.data;
  const messageString = Buffer.from(pubsubMessage.data, 'base64').toString();
  const message = JSON.parse(messageString)

  console.log({ message })

  const prefix = message.name.split('-')[0]
  const total = message.name.split('-')[1]

  let batch = [];
  for (let index = 0; index < total; index++) {
    batch.push({
      method: 'insert',
      key: `testing${index}`,
      data: {
        cf1: {
          greeting: (math.isPrime(index) ? 1 : 0),
        },
      },
    });
  }


  console.log('gonna do', JSON.stringify(batch, 0, 2));


  return Promise.resolve()
    .then(() => console.log('starting...'))
    .then(() => table.mutate(batch))
    .then(() => console.log(`${batch.length} rows written`))
    .catch((error) => {
      if (error.name === 'PartialFailureError') {
        console.warn("Partial Error Detected");
        error.errors.forEach(err => {
          console.error(err.message)
        });
      } else {
        console.error('Something went wrong:', error);
      }
    })
    .then(() => console.log('done!'))
    .then(callback);
};
