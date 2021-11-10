const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
      res.render('index')
});

router.post('/upload', (req, res) => {
      console.log(req.file);

      res.send('Uploaded');
});

module.exports = router;
