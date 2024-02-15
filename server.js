const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'car-project' directory
app.use('/car-project', express.static(path.join(__dirname, 'car-project')));
app.use('/', express.static(path.join(__dirname, '/')));

// Serve the index.html file for other routes
app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, './car-project/index.html');
  res.sendFile(indexPath);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});