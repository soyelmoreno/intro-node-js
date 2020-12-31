// window.App = window.App || {}
const {getPostsForUser, getUserById} = require('./api');

// window.App.showPostsForCurrentUser = (userId, cb) => {
const showPostsForCurrentUser = (userId, cb) => {
  // window.App.getPostsForUser(userId, posts => {
  getPostsForUser(userId, posts => {
    const postTemplates = posts.map(post => {
      return `
      <div class="post">
        ${post.title}
        ${post.body}
        ${post.createdBy}
      </div>`
    })
    cb(postTemplates)
  })
}

// window.App.showUserProfile = (userId, cb) => {
const showUserProfile = (userId, cb) => {
  // window.App.getUserById(userId, user => {
  getUserById(userId, user => {
    const profile = `
      <div>
        ${user.name}
      </div>
    `
    cb(user)
  })
}

module.exports = {
  showPostsForCurrentUser,
  showUserProfile
}
