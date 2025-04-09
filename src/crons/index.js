const cron = require('node-cron');

const startCronJobs = () => {
    cron.schedule('* * * * *', () => {
      console.log('Running task every minutes');
    });
  };
  
  module.exports = {startCronJobs};