db = db.getSiblingDB(process.env.MONGO_INITDB_DATABASE);
db.auth(process.env.MONGO_INITDB_ROOT_USERNAME, process.env.MONGO_INITDB_ROOT_PASSWORD);
db = db.getSiblingDB('school');

db.createUser({
  user: process.env.MONGO_SCHOOL_USERNAME,
  pwd:  process.env.MONGO_SCHOOL_PASSWORD,
  roles: [
    {
      role: 'readWrite',
      db: 'school'
    }
  ]
});

db.createCollection('courses');
db.createCollection('grades');
db.createCollection('materials');
db.createCollection('students');
db.createCollection('users');
