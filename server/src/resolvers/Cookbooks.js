const { getUserId } = require('../utils')

const Cookbook = {
  feed(parent, args, ctx, info) {
    return ctx.db.query.cookbooks({ where: { isPublished: true } }, info)
  },

  drafts(parent, args, ctx, info) {
    const id = getUserId(ctx)

    const where = {
      isPublished: false,
      author: {
        id
      }
    }

    return ctx.db.query.cookbooks({ where }, info)
  },

  cookbooks(parent, args , ctx, info) {
    return ctx.db.query.cookbooks({ where: { } }, info)
  },

  me(parent, args, ctx, info) {
    const id = getUserId(ctx)
    return ctx.db.query.user({ where: { id } }, info)
  },
}

module.exports = { Cookbook }
