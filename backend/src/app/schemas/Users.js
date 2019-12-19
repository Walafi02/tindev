import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const UsersSchema = new mongoose.Schema({
  login: {
    type: String,
    required: true,
  },
  avatar_url: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  bio: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  like: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
    },
  ],
  dislike: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
    },
  ],
  created_at: {
    type: Date,
    required: false,
    default: new Date(),
  },
  updated_at: {
    type: Date,
    required: false,
    default: new Date(),
  },
});

UsersSchema.plugin(mongoosePaginate);

export default mongoose.model('Users', UsersSchema);
