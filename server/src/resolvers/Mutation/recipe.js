const { getUserId } = require('../../utils')

const recipe = {
  async createRecipe(parent, { title, ingredients, directions }, ctx, info) {
    const userId = getUserId(ctx)
    return ctx.db.mutation.createRecipe(
      {
        data: {
          title,
          ingredients,
          directions,
          isPublished: false,
          author: {
            connect: { id: userId },
          },
        },
      },
      info
    )
  },

  async editRecipe(parent, { id }, ctx, info) {
    const userId = getUserId(ctx)
    const recipeExists = await ctx.db.exists.Recipe({
      id,
      author: { id: userId },
    })
    if (!recipeExists) {
      throw new Error(`Recipe not found or you're not the author`)
    }

    return ctx.db.mutation.editRecipe(
      {
        where: { id },
        data: { isPublished: true },
      },
      info,
    )
  },

  async removeRecipe(parent, { id }, ctx, info) {
    const userId = getUserId(ctx)
    const recipeExists = await ctx.db.exists.Recipe({
      id,
      author: { id: userId },
    })
    if (!recipeExists) {
      throw new Error(`Recipe not found or you're not the author`)
    }

    return ctx.db.mutation.removeRecipe({ where: { id } })
  },
}

module.exports = { recipe }
