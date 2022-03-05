import express from "express";
import PostController from "../controllers/PostController";

const PostRoute = express.Router();

PostRoute.get("/", PostController.list);

PostRoute.get("/:id", PostController.get);

PostRoute.post("/create", PostController.post);

PostRoute.put("/update/:id", PostController.put);

PostRoute.put("/:id/uploadFile", PostController.uploadFile);

PostRoute.put("/:postId/removeFile/:filename", PostController.deleteFile);

PostRoute.delete("/delete/:id", PostController.delete);

export default PostRoute;
