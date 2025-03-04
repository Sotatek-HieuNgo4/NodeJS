const connection = require('../config/db')
const { getAllUsers, getUserById, updateUserById, createUser } = require('../services/CRUDService')

const getHomepage = async (req, res) => {
    let results = await getAllUsers()
    return res.render('home', { users: results })
}

const postUser = async (req, res) => {
    let { email, name, city } = req.body
    await createUser(email, name, city)
    res.redirect('/')

}

const getCreatePage = (req, res) => {
    return res.render('create')
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id
    let user = await getUserById(userId)
    return res.render('edit', { userEdit: user })
}

const updateUser = async (req, res) => {
    let { email, name, city, userId } = req.body
    await updateUserById(email, name, city, userId)
    res.redirect('/')

}
module.exports = {
    getHomepage,
    postUser,
    getCreatePage,
    getUpdatePage,
    getUserById,
    updateUser
}