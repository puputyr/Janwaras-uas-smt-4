const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// ENV: JWT_SECRET
const JWT_SECRET = process.env.JWT_SECRET || 'secret123';

exports.register = async (req, res) => {
  const { nama, email, password } = req.body;

  try {
    const existing = await User.findOne({ where: { email } });
    if (existing) {
      return res.status(400).json({ message: "Email sudah digunakan" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ nama, email, password: hashedPassword });

    res.status(201).json({
      message: "User berhasil terdaftar",
      user: {
        id: user.id,
        nama: user.nama,
        email: user.email
      }
    });
  } catch (err) {
    res.status(500).json({ message: "Terjadi kesalahan", error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: "Email atau password salah" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: "Email atau password salah" });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: '1d'
    });

    res.json({
      token,
      user: {
        id: user.id,
        nama: user.nama,
        email: user.email
      }
    });
  } catch (err) {
    res.status(500).json({ message: "Terjadi kesalahan", error: err.message });
  }
};
