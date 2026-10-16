const sequelize = require('./common/database');
require('./common/models/User');
require('./common/models/Category');
require('./common/models/Location');
require('./common/models/Event');
require('./common/models/Ticket');
require('./common/models/Registration');
require('./common/models/Payment');

async function syncDatabase() {
  try {
    await sequelize.authenticate();
    console.log('PostgreSQL bağlantısı başarılı!');

    await sequelize.sync();
    console.log('Veritabanı tabloları başarıyla oluşturuldu!');
  } catch (error) {
    console.error('Veritabanı hatası:', error.message);
    process.exitCode = 1;
  } finally {
    await sequelize.close();
  }
}

syncDatabase();