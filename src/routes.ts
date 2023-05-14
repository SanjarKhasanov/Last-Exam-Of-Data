import { Router } from "express";
import { removeUser, getHomePage, postLogin, changeInfo } from "./controller";
const router = Router()

router.get('/', getHomePage)
router.post('/', postLogin)
router.get('/delete/:id', removeUser)


router.get('/detactivated/:id/:status', changeInfo)
router.get('/active/:id/:status', changeInfo)
router.get('/suspend/:id/:status', changeInfo) // localhost:8080/suspend/:48/:suspend

export default router;