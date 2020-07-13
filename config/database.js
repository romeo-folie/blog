module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: `mongodb+srv://romeo:${env('DATABASE_PASSWORD')}@blogposts.bnyli.mongodb.net/${env('DATABASE_NAME')}?retryWrites=true&w=majority`,
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', 'admin'),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});
