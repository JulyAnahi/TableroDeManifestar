require('dotenv').config(); // por si aún no lo habías puesto

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ DB is connected'))
.catch(err => console.error('❌ Error connecting to DB:', err));
