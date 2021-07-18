import * as api from '../api';

//Action creators
export const getPosts = () => async (dispatch) => { //with redux thunk since we will be dealing with asynchronous logic we have to add async and instead of returning the function we have to dispatch it 

   try {
      const { data } = await api.fetchPosts(); // data represents the post
      dispatch({ type: 'FETCH_ALL', payload: data }); //payload is data were store in posts
   } catch (error) {
      console.log(error);
   }    
}

// action creaters are functions that return an action. action is an object that have a type and payload

export const createPost = (post) => async (dispatch) => {

   try {
      const { data } = await api.createPost(post);
      dispatch({ type: 'CREATE', payload: data });
   } catch (error) {
      console.log(error)
   }
   
}

export const updatePost = (id,post) => async (dispatch) => {

   try {
      const { data } = await api.updatePost(id,post);
      dispatch({ type: 'UPDATE', payload: data });
   } catch (error) {
      console.log(error)
   }
   
}

export const deletePost = (id) => async (dispatch) => {

   try {
      await api.deletePost(id);
      dispatch({ type: 'DELETE', payload: id });
   } catch (error) {
      console.log(error)
   }
   
}

export const likePost = (id) => async (dispatch) => {

   try {
      const { data } = await api.likePost(id);
      dispatch({ type: 'LIKE', payload: data });
   } catch (error) {
      console.log(error)
   }
   
}