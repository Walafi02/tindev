import axios from 'axios';
import * as Yup from 'yup';

import Users from '../schemas/Users';

class SignInController {
  async store(req, res) {
    const schema = Yup.object().shape({
      username: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fields' });
    }

    const { username } = req.body;

    const userExist = await Users.findOne({
      login: username.toLowerCase(),
    });

    if (userExist) {
      return res.json({
        _id: userExist._id,
        name: userExist.name,
        email: userExist.email,
        avatar_url: userExist.avatar_url,
      });
    }

    let response = null;
    try {
      response = await axios.get(`https://api.github.com/users/${username}`);
    } catch (error) {
      return res.status(400).json({ error: 'User not found' });
    }

    const { login, avatar_url, name, bio, email } = response.data;

    console.log(response.data);

    const user = await Users.create({
      login: login.toLowerCase(),
      avatar_url,
      name,
      bio,
      email,
    });

    return res.json({ _id: user._id, name, email, avatar_url });
  }
}

export default new SignInController();
