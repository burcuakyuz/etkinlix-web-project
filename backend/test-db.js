
const sequelize = require('./common/database');

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('PostgreSQL bağlantısı başarılı!');
  } catch (error) {
    console.error('Veritabanı bağlantı hatası:', error.message);
    process.exitCode = 1;
  } finally {
    await sequelize.close();
  }
}

testConnection();
