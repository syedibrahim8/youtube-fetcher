import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    videoId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    
    title: {
      type: String,
      trim: true,
      required: true,
    },

    description: {
      type: String,
      default: "",
      trim: true,
    },

    publishedAt: {
      type: Date,
      required: true,
      index: true,
    },

    thumbnails: {
      type: Object,
      default: {},
    },

    channelTitle: {
      type: String,
      default: "",
    },

    tags: {
      type: [String],
      default: [],
    },

    url: {
      type: String,
      default: "",
    },

    fetchedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);

videoSchema.index({
  title: "text",
  description: "text",
});

const videoModel = mongoose.model("Videos",videoSchema)
export default videoModel;