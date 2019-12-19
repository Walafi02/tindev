import Users from '../schemas/Users';

class LikeController {
  async update(req, res) {
    const { _id } = req;
    const { id } = req.params;

    const userAuth = await Users.findById(_id);

    let userSelected = null;

    try {
      userSelected = await Users.findById(id);
    } catch (error) {
      return res.status(400).json({ error: 'ID invalid' });
    }

    if (!userAuth.like.includes(userSelected._id)) {
      userAuth.like.push(userSelected._id);
      userAuth.save();
    }

    if (userSelected.like.includes(_id)) {
      console.log('deu metch');
    }

    // verifica se ha metch

    return res.json();
  }
}

export default new LikeController();
