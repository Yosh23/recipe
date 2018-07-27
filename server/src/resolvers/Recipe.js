const { getUserId } = require('../utils')

const recipe = {
  recipes(parent, args, ctx, info)  {
    return ctx.db.query.recipes(info)
  },
}

module.exports = { recipe }
