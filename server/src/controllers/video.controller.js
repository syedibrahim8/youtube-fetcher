import videoModel from "../models/Video.js";

export const getVideos = async (req, res) => {
      try {
            let { page = 1, limit = 20 } = req.query;

            page = parseInt(page);
            limit = Math.min(parseInt(limit), 50);

            const skip = (page - 1) * limit;

            const total = await videoModel.countDocuments();

            const videos = await videoModel.find()
                  .sort({ publishedAt: -1 })
                  .skip(skip)
                  .limit(limit);

            res.status(200).json({
                  page,
                  limit,
                  total,
                  totalPages: Math.ceil(total / limit),
                  data: videos,
            });
      } catch (error) {
            res.status(500).json({ msg: error.message });
      }
};

export const searchVideos = async (req, res) => {
      try {
            let { q, page = 1, limit = 20 } = req.query;

            if (!q) {
                  return res.status(400).json({ msg: "Search query required" });
            }

            page = parseInt(page);
            limit = Math.min(parseInt(limit));

            const skip = (page - 1) * limit;

            const total = await videoModel.countDocuments({
                  $text: { $search: q },
            });

            const videos = await videoModel.find(
                  { $text: { $search: q } },
                  { score: { $meta: "textScore" } },
            )
                  .sort({ score: { $meta: "textScore" } })
                  .skip(skip)
                  .limit(limit);

            res.status(200).json({
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit),
                data: videos
            });
      } catch (error) {
            res.status(500).json({ msg: error.message });
      }
};