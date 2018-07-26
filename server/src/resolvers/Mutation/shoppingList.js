const { getUserId } = require('../../utils')

const shoppingList = {
  async makeShoppingList(parent, { title, ingredients }, ctx, info) {
    const userId = getUserId(ctx)
    return ctx.db.mutation.createShoppingList({data: { title, ingredients }}, info)
  },

  async shareShoppingList(parent, { id }, ctx, info) {
    const userId = getUserId(ctx)
    const shoppingListExists = await ctx.db.exists.ShoppingList({
      id,
    })
    if (!shoppingListExists) {
      throw new Error(`Shopping List not found or you're not the author`)
    }

    return ctx.db.mutation.updateShoppingList(
      {where: { id }, data: { title, ingredients }}, info)
  },

  async removeShoppingList(parent, { id }, ctx, info) {
    const userId = getUserId(ctx)
    const shoppingListExists = await ctx.db.exists.ShoppingList({
      id,
      author: { id: userId },
    })
    if (!shoppingListExists) {
      throw new Error(`Shopping List not found or you're not the author`)
    }

    return ctx.db.mutation.delete({ where: { id } })
  },
}

module.exports = { shoppingList }
