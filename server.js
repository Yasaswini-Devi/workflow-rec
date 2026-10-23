const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('DevOps Docker Application'));

// Only listen if this file is run directly with node server.js
if (require.main === module) {
  app.listen(3000, () => console.log('Application running on 3000'));
}

// Export the app for testing
module.exports = app;