const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  commenter: String,
  content: String,
});

const BlogPostSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  comments: [CommentSchema],
});

module.exports = mongoose.model('BlogPost', BlogPostSchema);
