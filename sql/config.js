module.exports = {
  DB: process.env.DB || 'postgres://nildiwbs:EbeyzwqarFNFMOJUcuvz77azpGDg5Bq2@pellefant.db.elephantsql.com:5432/nildiwbs',
  PORT: Number(process.env.PORT) || 3000
}
