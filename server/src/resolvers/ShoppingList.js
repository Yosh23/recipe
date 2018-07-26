const { getUserId } = require('../utils')

const shoppingList = {
  feed(parent, args, ctx, info) {
    return ctx.db.query.shoppingLists({ where: { isPublished: true } }, info)
  },

  drafts(parent, args, ctx, info) {
    const id = getUserId(ctx)

    const where = {
      isPublished: false,
      author: {
        id
      }
    }

    return ctx.db.query.shoppingLists({ where }, info)
  },

  shoppingLists(parent, args , ctx, info) {
    return ctx.db.query.shoppingLists({ where: { } }, info)
  },

  me(parent, args, ctx, info) {
    const id = getUserId(ctx)
    return ctx.db.query.user({ where: { id } }, info)
  },
}

module.exports = { shoppingList }
