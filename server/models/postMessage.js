import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
   title: String,
   message: String,
   creator: String,
   tags: [String], //string array
   selectedFile: String, //Images as string values
   likeCount: {
      type: Number,
      default: 0
   },
   createdAt: {
      type: Date,
      default: new Date().toLocaleString('en-US', {timeZone: 'Asia/Colombo'})
   }
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;