const express=require('express')
const router=express.Router()
const notesController=require('../app/controllers/notesController')
const categoriesController=require('../app/controllers/categoriesController')

module.exports=router
router.get('/notes',notesController.list)
router.get('/notes/:id',notesController.show)
router.post('/notes',notesController.add)
router.put('/notes/:id',notesController.update)
router.delete('/notes/:id',notesController.destroy)

router.get('/category',categoriesController.list)
router.post('/category',categoriesController.update)