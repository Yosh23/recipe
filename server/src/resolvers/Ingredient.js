const { getUserId } = require('../utils')

const Ingredient = {
  feed(parent, args, ctx, info) {
    return ctx.db.query.ingredients({ where: { isPublished: true } }, info)
  },

  drafts(parent, args, ctx, info) {
    const id = getUserId(ctx)

    const where = {
      isPublished: false,
      author: {
        id
      }
    }

    return ctx.db.query.ingredients({ where }, info)
  },

  ingredients(parent, { id }, ctx, info) {
    return ctx.db.query.ingredients({ where: { id } }, info)
  },

  me(parent, args, ctx, info) {
    const id = getUserId(ctx)
    return ctx.db.query.user({ where: { id } }, info)
  },
}

module.exports = { Ingredient }
