import Users from '../schemas/Users';

class DislikeController {
  async update(req, res) {
    const { _id } = req;
    const { id } = req.params;

    const userAuth = await Users.findById(_id);
    const userSelected = await Users.findById(id);

    if (!userSelected) {
      return res.status(400).json({ error: 'ID invalid' });
    }

    if (!userAuth.dislike.includes(userSelected._id)) {
      userAuth.dislike.push(userSelected._id);
      userAuth.save();
    }

    return res.json();
  }
}

export default new DislikeController();
