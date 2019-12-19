import Users from '../schemas/Users';

class UsersController {
  async index(req, res) {
    const { _id } = req;
    const { page = 1, limit = 10 } = req.query;

    const user = await Users.findById(_id);

    const users = await Users.paginate(
      {
        $and: [
          { _id: { $ne: _id } },
          { _id: { $nin: user.like } },
          { _id: { $nin: user.dislike } },
        ],
      },
      { page, limit, select: ['_id', 'name', 'avatar_url', 'bio', 'email'] }
    );

    return res.json(users);
  }
}

export default new UsersController();
