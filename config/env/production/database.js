module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'ls-8032805010d2fe7921cb2c79a3408c75c45a60b1.c9koqwe84rkw.ap-southeast-1.rds.amazonaws.com'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'thekaka'),
      user: env('DATABASE_USERNAME', 'dbmasteruser'),
      password: env('DATABASE_PASSWORD', 'yv.#DoR>K9$cEkHM0RZc_tE?sJz1_9,5'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
