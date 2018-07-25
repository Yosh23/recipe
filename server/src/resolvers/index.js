const { Cookbooks } = require('./Cookbooks')
const { Subscription } = require('./Subscription')
const { auth } = require('./Mutation/auth')
const { cudCookbook } = require('./Mutation/cudCookbook')
const { post } = require('./Mutation/post')
const { recipe } = require('./Mutation/recipe')
const { AuthPayload } = require('./AuthPayload')

module.exports = {
  Cookbooks,
  Mutation: {
    ...auth,
    ...cudCookbook,
    ...post,
    ...recipe
  },
  Subscription,
  AuthPayload,
}
