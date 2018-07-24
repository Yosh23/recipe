const { Cookbooks } = require('./Cookbooks')
const { Subscription } = require('./Subscription')
const { auth } = require('./Mutation/auth')
const { cudCookbook } = require('./Mutation/cudCookbook')
const { AuthPayload } = require('./AuthPayload')

module.exports = {
  Cookbooks,
  Mutation: {
    ...auth,
    ...cudCookbook,
  },
  Subscription,
  AuthPayload,
}
