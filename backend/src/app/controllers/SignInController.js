import axios from 'axios';
import * as Yup from 'yup';

class SignInController {
  async store(req, res) {
    const schema = Yup.object().shape({
      username: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fields' });
    }

    const { username } = req.body;

    let response = null;
    try {
      response = await axios.get(`https://api.github.com/users/${username}`);
    } catch (error) {
      return res.status(400).json({ error: 'User not found' });
    }

    const { login, avatar_url, name, bio, email } = response.data;

    return res.json({
      message: 'ok',
      username,
      res: { login, avatar_url, name, bio, email },
    });
  }
}

export default new SignInController();
