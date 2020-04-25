const crypto = require("crypto")

const { INTERCOM_IDENTITY_VERIFICATION_SECRET } = process.env

exports.handler = function (event, context, callback) {
  const { user } = context.clientContext
  const userHash = crypto
    .createHmac("sha256", INTERCOM_IDENTITY_VERIFICATION_SECRET)
    .update(user.sub)
    .digest("hex")
    .toString()

  callback(null, { statusCode: 200, body: userHash })
}
