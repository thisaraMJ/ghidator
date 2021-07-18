import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js'

export const getPosts = async (req, res) => {
   try {
      const postMessages = await PostMessage.find(); // use await is because this is asyncronus action
      res.status(200).json(postMessages); //200 OK. successful HTTP requests
   } catch (error) {
      res.status(404).json({ message: error.message }); //404 not found

   }
}

export const createPost = async (req, res) => {

   const post = req.body;
   
   const newPost = new PostMessage(post);

   try {
      await newPost.save();

      res.status(201).json(newPost); //201 created(http status code)
      
   } catch (error) {
      res.status(409).json(error); //409 conflict(http status code)
   }
}

export const updatePost = async (req, res) => {

   const { id: _id } = req.params;
   const post = req.body;
   
   try {
      if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with id: ${_id}`);

      const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post,_id}, { new: true }); // new true karanne updated version eka recieve kara ganna
      res.json(updatedPost);

   } catch (error) {
      res.status(409).json(error);
   }
   
}

export const deletePost = async (req, res) => {

   const { id } = req.params;

   try {
      if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

      const result = await PostMessage.findByIdAndRemove(id); 
      
      if(result) res.json(deletePost);

   } catch (error) {
      res.status(409).json(error);
   }
   
}

export const likePost = async (req, res) => {

   const { id } = req.params;

   try {
      if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

      const post = await PostMessage.findById(id);

      const likedPost = await PostMessage.findByIdAndUpdate( id ,{ likeCount : post.likeCount + 1 },{ new: true }); 
     
      res.json(likedPost);

   } catch (error) {
      res.status(409).json(error);
   }
   
}