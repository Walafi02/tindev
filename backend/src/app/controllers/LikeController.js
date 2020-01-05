import Users from '../schemas/Users';

class LikeController {
  async update(req, res) {
    const { _id } = req;
    const { id } = req.params;

    const userAuth = await Users.findById(_id);
    const userSelected = await Users.findById(id);

    if (!userSelected) {
      return res.status(400).json({ error: 'ID invalid' });
    }

    if (!userAuth.like.includes(userSelected._id)) {
      userAuth.like.push(userSelected._id);
      userAuth.save();
    }

    if (userSelected.like.includes(_id)) {
      const conUserSelected = req.connectedUsers[userSelected._id];
      const conUserAuth = req.connectedUsers[userAuth._id];

      if (conUserAuth) {
        const { avatar_url, bio, login, name } = userSelected;
        req.io
          .to(conUserAuth)
          .emit('match-user', { avatar_url, bio, login, name });
      }

      if (conUserSelected) {
        const { avatar_url, bio, login, name } = userAuth;

        req.io
          .to(conUserSelected)
          .emit('match-user', { avatar_url, bio, login, name });
      }
    }

    return res.json();
  }
}

export default new LikeController();
