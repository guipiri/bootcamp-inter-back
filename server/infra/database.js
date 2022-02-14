const pgp = require("pg-promise")();

const db = pgp({
  user: "etpghuvmvpkdgu",
  password: "ae87404386f6b0f28e053e31c050a3fdfe71325258b26f37258c2a8c67f31d2c",
  host: "ec2-34-233-214-228.compute-1.amazonaws.com",
  port: 5432,
  database: "d493j6b0n83hev",
});

module.exports = db;
