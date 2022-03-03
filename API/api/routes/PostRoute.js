import express from "express";
import PostController from "../controllers/PostController";

const PostRoute = express.Router();

PostRoute.get("/", PostController.list);

PostRoute.get("/:id", PostController.get);

PostRoute.post("/create", PostController.post);

PostRoute.put("/update/:id", PostController.put);

export default PostRoute;
