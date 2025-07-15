const fs = require("fs");
const path = require("path");

const structure = {
  "config": {
    "config.js": `
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  }
};`
  },
  "controllers": {
    "userController.js": `
const { User } = require('../models');

exports.getUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.create({ name, email, password });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};`
  },
  "models": {
    "index.js": `
'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const config = require(__dirname + '/../config/config.js').development;

const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config);

fs.readdirSync(__dirname)
  .filter(file => file !== basename && file.endsWith('.js'))
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) db[modelName].associate(db);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
`,
    "user.js": `
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  });

  return User;
};`
  },
  "routes": {
    "userRoutes.js": `
const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

router.get('/', controller.getUsers);
router.post('/', controller.createUser);

module.exports = router;
`
  },
  ".env": `DB_USERNAME=root
DB_PASSWORD=yourpassword
DB_NAME=express_db
DB_HOST=127.0.0.1
DB_DIALECT=mysql
PORT=3000
`,
  ".sequelizerc": `
const path = require('path');

module.exports = {
  'config': path.resolve('config', 'config.js'),
  'models-path': path.resolve('models'),
  'seeders-path': path.resolve('seeders'),
  'migrations-path': path.resolve('migrations')
};`,
  "app.js": `
require('dotenv').config();
const express = require('express');
const app = express();
const { sequelize } = require('./models');
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  console.log("DB connected.");
  app.listen(PORT, () => {
    console.log(\`Server running on http://localhost:\${PORT}\`);
  });
});
`,
  "package.json": `
{
  "name": "express-sequelize-mysql",
  "version": "1.0.0",
  "main": "app.js",
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js",
    "sequelize": "sequelize"
  },
  "dependencies": {
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "mysql2": "^3.6.0",
    "sequelize": "^6.35.1"
  },
  "devDependencies": {
    "nodemon": "^3.0.2",
    "sequelize-cli": "^6.6.1"
  }
}
`,
  "README.md": `# Express Sequelize MySQL Template

Template backend untuk Express.js + Sequelize + MySQL. Sudah termasuk struktur folder modular dan endpoint dasar untuk User.
`
};

function createStructure(base, obj) {
  for (const name in obj) {
    const item = obj[name];
    const fullPath = path.join(base, name);

    if (typeof item === "string") {
      fs.writeFileSync(fullPath, item.trimStart(), "utf8");
      console.log("Created file:", fullPath);
    } else {
      fs.mkdirSync(fullPath, { recursive: true });
      console.log("Created folder:", fullPath);
      createStructure(fullPath, item);
    }
  }
}

createStructure(".", structure);
