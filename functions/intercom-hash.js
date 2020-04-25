const crypto = require("crypto")

const { INTERCOM_IDENTITY_VERIFICATION_SECRET } = process.env

exports.handler = function (event, context, callback) {
  const userHash = crypto
    .createHmac("sha256", INTERCOM_IDENTITY_VERIFICATION_SECRET)
    .update(context.clientContext.user.sub)
    .digest("hex")

  callback(null, { statusCode: 200, body: userHash })
}
