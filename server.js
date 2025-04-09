const app = require('./src/app');
const os = require('os');
const { port } = require('./src/config');
const { startCronJobs } = require('./src/crons');


app.listen(port, () => {
    console.log('🚀 Server running...');
    console.log(`📡 Listening on: http://localhost:${port}`);
    console.log(`📁 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🕒 Started at: ${new Date().toLocaleString()}`);
    console.log(`💻 Hostname: ${os.hostname()}`);
});

// startCronJobs();