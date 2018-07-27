const { getUserId } = require('../utils')

const shoppingList = {
  shoppingLists(parent, args , ctx, info) {
    return ctx.db.query.shoppingLists({ where: { } }, info)
  },
}

module.exports = { shoppingList }
