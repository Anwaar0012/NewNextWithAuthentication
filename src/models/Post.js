import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// const Post =mongoose.model.Post ||  mongoose.model("Post", postSchema);
// export default mongoose.model("Post", postSchema);
// export default Post
// module.export= mongoose.model("Post", postSchema);
let post
try {
  post = mongoose.model('Post')
} catch (error) {
  post = mongoose.model('Post', postSchema)
}
export default post