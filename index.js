const express = require('express');
// connect DB
const sequelize = require('./util/database');

const app = express();

// Models
const Appellant = require('./models/Appellant');
const Appeal = require('./models/Appeal');
const AppealState = require('./models/AppealState');

// Init Middleware
app.use(express.json({ extended: false }));

// app.get('/', (req, res) => res.send('API IS RUNNING'));

// Define Routes
const userRoutes = require('./routes/officials/userRoutes');
const authRoutes = require('./routes/officials/authRoutes');
const appellantUserRoutes = require('./routes/appellants/userRoutes');
const appealRoutes = require('./routes/appellants/appealRoutes');
const receptionistRoutes = require('./routes/officials/receptionistRoutes');

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/appellants', appellantUserRoutes);
app.use('/api/appellants/appeal', appealRoutes);
app.use('/api/receptionist', receptionistRoutes);

// Define PORT
const PORT = process.env.PORT || 5000;

// Model relations
Appeal.belongsTo(Appellant, { constraints: true, onDelete: 'CASCADE' });
Appellant.hasMany(Appeal);

AppealState.belongsTo(Appeal, { constraints: true, onDelete: 'CASCADE' });
Appeal.hasOne(AppealState);

sequelize
    // .sync({ force: true })
    .sync()
    .then((result) => {
        app.listen(PORT, () => {
            console.log('SERVER IS RUNNING');
        });
    })
    .catch((err) => {
        console.log(err);
    });
