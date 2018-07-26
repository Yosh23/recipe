const { getUserId } = require('../../utils')

const cookbook = {
  async createCookbook(parent, { title, desc }, ctx, info) {
    const userId = getUserId(ctx)
    return ctx.db.mutation.createCookbook({data: { title, desc }}, info)
  },

  async updateCookbook(parent, { id, title, desc }, ctx, info) {
    const userId = getUserId(ctx)
    const cookbookExists = await ctx.db.exists.Cookbook({
      id,
      author: { id: userId },
    })
    if (!cookbookExists) {
      throw new Error(`Cookbook not found or you're not the author`)
    }

    return ctx.db.mutation.updateCookbook(
      {
        where: { id },
        data: {
          title,
          desc,
          recipe,
          },
        },
      info,
    )
  },

  async deleteCookbook(parent, { id }, ctx, info) {
    const userId = getUserId(ctx)
    const cookbookExists = await ctx.db.exists.Cookbook({
      id,
      author: { id: userId },
    })
    if (!cookbookExists) {
      throw new Error(`Cookbook not found or you're not the author`)
    }

    return ctx.db.mutation.deleteCookbook({ where: { id } })
  },
}

module.exports = { cookbook }
