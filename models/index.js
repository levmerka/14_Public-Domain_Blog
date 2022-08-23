const Comment = require("./Comment");
const User = require("./User");
const Post = require("./Post");

User.hasMany(Post);
User.hasMany(Comment);
Post.hasMany(Comment);

Post.belongsTo(User);
Comment.belongsTo(User);
Comment.belongsTo(Post);

module.exports = {User, Post, Comment} 
