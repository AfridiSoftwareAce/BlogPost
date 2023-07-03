const BlogPost=require('../models/BlogPost')




// POST request for creating a new blog post
module.exports.createPost = async (req, res) => {
    try {
      // Extracting fields from the request body
      const { title, content, author } = req.body;
  
      // Creating a new blog post instance and saving to the database
      const newPost = await BlogPost.create({ title, content, author });
  
      // Responding with the newly created blog post
      res.status(201).json({ message: 'Blog post created successfully', newPost });
  
    } catch (error) {
      // Responding with error if something goes wrong
      res.status(500).json({ message: error.message });
    }
};

module.exports.getPostById = async (req, res) => {
    try {
        const post = await BlogPost.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};