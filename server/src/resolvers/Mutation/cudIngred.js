
const ingredient = {
  async createIngredient(parent, { name, kind, substitute }, ctx, info) {
    return ctx.db.mutation.createIngredient(
      {
        data: {
          name,
          kind,
          substitute,
        },
      },
      info
    )
  },

  async updateIngredient(parent, { id, name, kind, substitute }, ctx, info) {
    const ingredExists = await ctx.db.exists.updateIngredient({
      id,
    })
    if (!ingredExists) {
      throw new Error(`Ingredient not found, Try again!`)
    }

    return ctx.db.mutation.updateIngredient(
      {
        where: { id },
        data: {
          name,
          kind,
          substitute,
        },
      },
      info,
    )
  },

  async deleteIngredient(parent, { id }, ctx, info) {
    const ingredExists = await ctx.db.exists.Ingredient({
      id,
    })
    if (!ingredExists) {
      throw new Error(`Ingredient not Found, Try again!`)
    }

    return ctx.db.mutation.deleteIngredient({ where: { id } })
  },
}

module.exports = { ingredient }
