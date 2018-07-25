const { getUserId } = require('../../utils')

const shoppingList = {
  async makeShoppingList(parent, { title, text }, ctx, info) {
    const userId = getUserId(ctx)
    return ctx.db.mutation.createShoppingList(
      {
        data: {
          title,
          ingredients,
          isPublished: false,
          author: {
            connect: { id: userId },
          },
        },
      },
      info
    )
  },

  async shareShoppingList(parent, { id }, ctx, info) {
    const userId = getUserId(ctx)
    const postExists = await ctx.db.exists.ShoppingList({
      id,
      author: { id: userId },
    })
    if (!postExists) {
      throw new Error(`Post not found or you're not the author`)
    }

    return ctx.db.mutation.updatePost(
      {
        where: { id },
        data: { isPublished: true },
      },
      info,
    )
  },

  async removeShoppingList(parent, { id }, ctx, info) {
    const userId = getUserId(ctx)
    const ShoppingListExists = await ctx.db.exists.ShoppingList({
      id,
      author: { id: userId },
    })
    if (!ShoppingListExists) {
      throw new Error(`Post not found or you're not the author`)
    }

    return ctx.db.mutation.delete({ where: { id } })
  },
}

module.exports = { shoppingList }
