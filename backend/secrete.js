const secret = 'thi_iSz_a_Very_$trong&_$ecret_queYZ'
const urlService =
  'mongodb+srv://zxiao98:xgVREiehDz2Q8oTA@cluster0.4oxubqp.mongodb.net/sheepfold?retryWrites=true&w=majority'
// how to confirm the s3 path is correct
  const DATA_PATH = 'https://cis512project.s3.amazonaws.com/data'

// The access ID and secret key of the S3 bucket
// const S3ID = '<contact_your_ta_to_get_the_key>'
// const S3SECRET = 'contact_your_ta_to_get_the_secret_key'
const S3ID = 'AKIAVGN6PX5CL73TX4PV'
const S3SECRET = 'PFvVqkMwXClY9FmmyaSZJmYcYDyam1xCWQE4Ya6k'


module.exports = {
  secret,
  urlService,
  DATA_PATH,
  S3ID,
  S3SECRET
}
