// const { getUserId } = require('../utils')

const ingredient = {
  ingredients(parent, { id }, ctx, info) {
    return ctx.db.query.ingredients({ where: { id } }, info)
  },
}

module.exports = { ingredient }
