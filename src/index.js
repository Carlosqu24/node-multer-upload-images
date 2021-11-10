const express = require('express');

const path = require('path');

const multer = require('multer');

// // INITIALIZATIONS
const app = express();


// SETTINGS
app.set('port', process.env.PORT || 9100);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

const storage = multer.diskStorage({
      destination: path.join(__dirname, 'public/images'),
      filename: (req, file, cb) => {
            cb(null, file.originalname);
      }
});

// MIDDLEWARES
app.use(multer({
      storage,
      dest: path.join(__dirname, 'public/images')
}).single('image'));



// ROUTES
app.use(require('./routes/image.routes'))




app.listen(app.get('port'), () => {
      console.log("http://localhost:" + app.get('port'))
});