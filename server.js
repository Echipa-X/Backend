const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Importă routerele pentru entitățile respective
const jucatorRouter = require('./routes/jucator');
const echipaRouter = require('./routes/echipa');
const clasamentRouter = require('./routes/clasament');
const performanteRouter = require('./routes/performante');
const galerieMediaRouter = require('./routes/galerie_media');
const antrenorRouter = require('./routes/antrenor');
const meciRouter = require('./routes/meci');
const biletRouter = require('./routes/bilet');
const stireRouter = require('./routes/stire');
const rolRouter = require('./routes/rol');
const personalRouter = require('./routes/personal');
const logInRouter = require('./routes/log_in');

const app = express();
const port = process.env.PORT || 3000;

// Conectează-te la baza de date MongoDB
mongoose.connect('mongodb://localhost:27017/CSU_Suceava_DataBase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Middleware pentru a parsa corpul cererii în format JSON
app.use(bodyParser.json());

// Folosește routerele pentru entitățile respective
app.use('/jucatori', jucatorRouter);//done
app.use('/echipe', echipaRouter); //done
app.use('/clasament', clasamentRouter);//done
app.use('/performante', performanteRouter);//done
app.use('/galerie_media', galerieMediaRouter);//done
app.use('/antrenori', antrenorRouter);//done
app.use('/meciuri', meciRouter);//done
app.use('/bilete', biletRouter);//done
app.use('/stiri', stireRouter);//done
app.use('/roluri', rolRouter);//done
app.use('/personal', personalRouter);//done
app.use('/log_in', logInRouter);//done

// Alte rute pentru alte entități sau alte acțiuni

// Rulare server
app.listen(port, () => {
  console.log(`Serverul rulează la adresa http://localhost:${port}`);
});
