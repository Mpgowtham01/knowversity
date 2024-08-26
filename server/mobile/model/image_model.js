import mongoose from 'mongoose';

const { Schema } = mongoose;

const mobileImagesSchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  image: [
    {
      title: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
});

export default mongoose.model('MobileImages', mobileImagesSchema);

