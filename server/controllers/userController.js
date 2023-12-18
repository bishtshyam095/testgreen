const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../Models/User");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const existinguUser = await UserModel.findOne(email);
    if (existinguUser) {
      res.status(400).send("User already exists.");
    }
    const user = await UserModel.create({
      name,
      email,
      password: hashedPassword,
    });
    var token = jwt.sign({
        id: user._id,
        email,
    },
        'shhhhh',
        {
            expiresIn: "1h",
        }
    );
    user.token = token;
    user.password = undefined;
    res.status(201).json(`${user} created.`);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  debugger;
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Create and sign a JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      'shhhhh',
        {
            expiresIn: "1h",
        }
    );

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
