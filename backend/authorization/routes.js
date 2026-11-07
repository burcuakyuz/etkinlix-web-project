
const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../common/models/associations');

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const { name, surname, email, password, phone } = req.body || {};

    if (
      typeof name !== 'string' ||
      typeof surname !== 'string' ||
      typeof email !== 'string' ||
      typeof password !== 'string' ||
      !name.trim() ||
      !surname.trim() ||
      !email.trim() ||
      password.length < 8 ||
      Buffer.byteLength(password, 'utf8') > 72
    ) {
      return res.status(400).json({
        message: 'Bilgileri kontrol edin. Şifre 8-72 bayt olmalıdır.'
      });
    }

    if (phone != null && typeof phone !== 'string') {
      return res.status(400).json({
        message: 'Telefon numarası geçersiz.'
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      return res.status(400).json({
        message: 'Geçerli bir e-posta adresi giriniz.'
      });
    }

    const existingUser = await User.findOne({
      where: { email: normalizedEmail }
    });

    if (existingUser) {
      return res.status(409).json({
        message: 'Bu e-posta adresi zaten kayıtlı.'
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      name: name.trim(),
      surname: surname.trim(),
      email: normalizedEmail,
      password: hashedPassword,
      phone: phone?.trim() || null,
      role: 'PARTICIPANT'
    });

    return res.status(201).json({
      message: 'Kullanıcı başarıyla kaydedildi.',
      user: {
        user_id: user.user_id,
        name: user.name,
        surname: user.surname,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(409).json({
        message: 'Bu e-posta adresi zaten kayıtlı.'
      });
    }

    console.error('Kayıt hatası:', error);
    return res.status(500).json({
      message: 'Kayıt sırasında bir sunucu hatası oluştu.'
    });
  }
});

module.exports = router;
