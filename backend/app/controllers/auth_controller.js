const User = require("../models/user");

const Authentication = async (req, res, next) => {
  try {
    const { email, senha } = req.body;
    const result = await User.findAll({
      where: {
        email,
      },
    });

    const user = result[0];

    if (user == undefined) {
        res.status(400).json([]);
    }

    if (senha !== user.senha) {
      res.status(401).json([]);
    }

    res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    res.status(500).json({
      error: "Error",
    });
  }
};

module.exports = {
  Authentication,
};
