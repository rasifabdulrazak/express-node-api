const app = require('./src/app');
const { port } = require('./src/config');
const { startCronJobs } = require('./src/core/utils/cronJobs');

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});

startCronJobs();