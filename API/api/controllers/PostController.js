import PostModel from "../models/PostModel";
import updatePostSchema from "../validator/PostValidator/updatePostSchema";
import FileService from "../services/FileService";

export default {
  list: async (req, res) => {
    const list = await PostModel.find();

    return res.json(list);
  },
  get: async (req, res) => {
    const id = req.params.id;

    const foundItem = await PostModel.findOne({ _id: id });
    return res.json(foundItem);
  },
  post: async (req, res) => {
    const post = req.body;

    const addpost = await new PostModel(post);

    addpost.save();

    return res.json(addpost);
  },
  delete: async (req, res) => {
    const { id } = req.params;

    try {
      await PostModel.deleteOne({
        _id: id,
      });
      return res.json({ deleted: true });
    } catch (err) {
      console.log(`Errori1 ${err}`);
    }
  },
  put: async (req, res) => {
    const post = req.body;

    const validationResult = updatePostSchema.validate(post);

    if (validationResult.error) {
      return res.status(401).json({
        message: "Validation failed while updating",
        error: validationResult.error,
      });
    }
    const updatePost = await PostModel.updateOne({ _id: post._id }, post);

    return res.json(updatePost);
  },
  deleteFile: async (req, res) => {
    const { realEstateId, filename } = req.params;

    FileService.deleteFiles([filename]);

    const realEstateData = await PostModel.findOne(
      { _id: realEstateId },
      { files: 1 }
    );

    const updatedFilenames = realEstateData.files
      .replace(`${filename};`, "")
      .replace(filename, "");

    await PostModel.updateOne(
      { _id: realEstateId },
      {
        files: updatedFilenames,
      }
    );

    const updatedRealEstate = await PostModel.findOne(
      { _id: realEstateId },
      {
        files: updatedFilenames,
      }
    );

    return res.json(updatedRealEstate);
  },
  uploadFile: async (req, res) => {
    const { id } = req.params;

    const receivedFiles = [req.files.file];

    try {
      const files = await FileService.uploadFiles(receivedFiles);

      const realEstate = await PostModel.find({ _id: id }, { files: 1 });
      const oldFiles = realEstate.files;

      const newFiles = `${oldFiles || ""}${oldFiles ? ";" : ""}${files}`;

      await PostModel.updateOne({ _id: id }, [
        {
          $set: { files: newFiles },
        },
      ]);

      const updatedRealEstate = await PostModel.find({ _id: id });
      return res.json(updatedRealEstate);
    } catch (err) {
      res.status(500).json({ err: err.toString() });
    }
  },
};
