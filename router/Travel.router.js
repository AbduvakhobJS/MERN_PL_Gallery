const { Router } = require('express')
const router = Router()
const { getAllTravels, getOneTravel, AddTravelBook, UpdateTravelBook, DeleteTravelBook } = require('../controller/Travel.controller')




router.get('/', getAllTravels)
router.post('/add', AddTravelBook)
router.get('/:id', getOneTravel)
router.put('/:id', UpdateTravelBook)
router.delete('/:id', DeleteTravelBook)



module.exports = router