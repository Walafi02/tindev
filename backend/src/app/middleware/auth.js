import Users from '../schemas/Users';

export default async (req, res, next) => {
  const { id } = req.headers;

  if (!id) {
    return res.status(401).json({ error: 'ID not provided' });
  }

  const user = await Users.findById(id);
  req._id = user._id;

  if (!user) {
    return res.status(401).json({ error: 'ID invalid' });
  }

  return next();
};
