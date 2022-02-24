const express = require('express')
const router = express.Router()

const { addUsers, getUsers, getUser, updateUser, deleteUser } = require('../controllers/user')
const { register, login, checkAuth } = require('../controllers/auth')
const { getProducts, addProduct, getProduct, updateProduct, deleteProduct } = require('../controllers/product')
const { getToppings, getTopping, addTopping, updateTopping, deleteTopping } = require('../controllers/topping')
const { getOrders, addOrder } = require('../controllers/order')

const { auth } = require('../middlewares/auth')
const { uploadFile } = require('../middlewares/uploadFile')

// Route For User
router.post('/user', addUsers)
router.get('/users', getUsers)
router.get('/user/:id', getUser)
router.patch('/user/:id', updateUser)
router.delete('/user/:id', deleteUser)

// Route For Account
router.post('/register', register)
router.post('/login', login)
router.get("/check-auth", auth, checkAuth);

// Route For Products
router.get('/products', getProducts)
router.get('/product/:id', getProduct)
router.post('/product', auth, uploadFile("image"), addProduct)
router.patch('/product/:id', auth, uploadFile("image"), updateProduct)
router.delete('/product/:id', auth, deleteProduct)

// Route For Toppings
router.get('/toppings', getToppings)
router.get('/topping/:id', getTopping)
router.post('/topping', auth, uploadFile("image"), addTopping)
router.patch('/topping/:id', auth, uploadFile("image"),  updateTopping)
router.delete('/topping/:id', auth, deleteTopping)

router.get('/order/:id', getOrders)
router.post('/order', auth, addOrder)




module.exports = router