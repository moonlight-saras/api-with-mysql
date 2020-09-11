const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into users(name, email, created_at, password, repassword, username) 
                values(?,?,?,?,?,?)`,
      [
        data.name,
        data.email,
        data.created_at,
        data.password,
        data.repassword,
        data.username
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
    
 },
  getUserByUserEmail: (email, callBack) => {
    pool.query(
      `select * from users where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
         return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUserByUserId: (id, callBack) => {
    pool.query(
      `select id, name, email, created_at,  password, repassword, username from users where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUsers: callBack => {
    pool.query(
      `select id, name, email, created_at,  password, repassword, username from users`,
      [],
      (error, results, fields) => {
        if (error) {
         return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateUser: (data, callBack) => {
    pool.query(
      `update users set name=?, email=?, created_at=?, password=?, repassword=?, username=? where id = ?`,
      [
        data.name,
        data.email,
        data.created_at,
        data.password,
        data.repassword,
        data.username,
        data.id
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  deleteUser: (data, callBack) => {
    pool.query(
      `delete from users where id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
         return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
 };
