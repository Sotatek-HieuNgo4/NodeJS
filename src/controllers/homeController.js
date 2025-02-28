const connection = require('../config/db')
const { getAllUsers } = require('../services/CRUDService')

const getHomepage = async (req, res) => {
    let results = await getAllUsers()
    return res.render('home', { users: results })
}

const postUser = async (req, res) => {
    let { email, name, city } = req.body

    let [results, fields] = await connection.query(
        `INSERT INTO Users(email,name,city) VALUES(?,?,?)`, [email, name, city],
    )
    console.log('results: ', results)

    res.send('ok')

}

const getCreatePage = (req, res) => {
    return res.render('create')
}
module.exports = {
    getHomepage,
    postUser,
    getCreatePage
}