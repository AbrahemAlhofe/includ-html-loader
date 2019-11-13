const path = require('path')
const fs = require('fs')

module.exports = function (content) {
  const callBack = this.async();
  const regex = new RegExp('#include ?[./A-z-]+')
  const exps = content.match(regex)
  var result = content

  if (exps) {

    for (let exp of exps) {
      const src = exp.split(' ')[1].toString().replace(/\\r|\\n/gm,"");
      const data = fs.readFileSync(src)
      const body = data.toString();
      result = result.replace(exp, body)
    }

    callBack(null, result)
  }
}
