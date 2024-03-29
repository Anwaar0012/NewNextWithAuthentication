import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
let user
try {
  user = mongoose.model('User')
} catch (error) {
  user = mongoose.model('User', userSchema)
}
export default user

// export default mongoose.model("User", userSchema);
