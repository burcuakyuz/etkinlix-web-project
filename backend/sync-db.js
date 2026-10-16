const sequelize = require('./common/database');
require('./common/models/User');

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