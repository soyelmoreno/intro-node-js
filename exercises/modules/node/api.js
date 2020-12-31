//window.App = window.App || {}
// const data = require('./data');
const {users, posts} = require('./data');

// window.App.getUserById = (id, cb) => {
const getUserById = (id, cb) => {
  // simulate API call
  // window.setTimeout(() => {
  setTimeout(() => {
    // const user = window.App.users.find(user => user.id === id)
    const user = users.find(user => user.id === id)
    cb(user)
  }, 150)
}

//window.App.getPostsForUser = (userId, cb) => {
const getPostsForUser = (userId, cb) => {
  // simulate API call
  // window.setTimeout(() => {
  setTimeout(() => {
    // const posts = window.App.posts.filter(post => post.createdBy === userId)
    const _posts = posts.filter(post => post.createdBy === userId)
    cb(_posts)
  }, 150)
}

module.exports = {
  getUserById,
  getPostsForUser
}
