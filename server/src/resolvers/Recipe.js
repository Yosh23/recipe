const { getUserId } = require('../utils')

const recipe = {
  feed(parent, args, ctx, info) {
    return ctx.db.query.recipes({ where: { isPublished: true } }, info)
  },

  drafts(parent, args, ctx, info) {
    const id = getUserId(ctx)

    const where = {
      isPublished: false,
      author: {
        id
      }
    }

    return ctx.db.query.recipes({ where }, info)
  },
  
  recipes(parent, args, ctx, info)  {
    return ctx.db.query.recipes(info)
  },

  me(parent, args, ctx, info) {
    const id = getUserId(ctx)
    return ctx.db.query.user({ where: { id } }, info)
  },
}

module.exports = { recipe }
