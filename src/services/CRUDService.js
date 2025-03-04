const connection = require('../config/db')

const getAllUsers = async () => {
    let [results, fields] = await connection.query('select * from Users')
    return results
}

const getUserById = async (userId) => {
    let [results, fields] = await connection.query('select * from Users where id = ?', [userId])
    let user = results && results.length > 0 ? results[0] : {}
    return user
}

const updateUserById = async (email, name, city, userId) => {
    let [results, fields] = await connection.query(
        `UPDATE Users
        SET email = ?, name = ?, city = ?
        WHERE id = ?
        `, [email, name, city, userId],
    )
}

const createUser = async (email, name, city) => {
    let [results, fields] = await connection.query(
        `INSERT INTO Users(email,name,city) VALUES(?,?,?)`, [email, name, city],
    )
}
module.exports = {
    getAllUsers,
    getUserById,
    updateUserById,
    createUser
}