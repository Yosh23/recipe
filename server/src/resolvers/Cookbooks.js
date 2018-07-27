const { getUserId } = require('../utils')

const Cookbook = {
  cookbooks(parent, args , ctx, info) {
    return ctx.db.query.cookbooks({ where: { } }, info)
  },
}

module.exports = { Cookbook }
