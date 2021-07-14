import { Router } from 'express'
import * as skillsCtrl from "../controllers/skills.js"
const router = Router()

//get routes
//app is not defined
router.get("/skills", function(req, res) {
  // console.log(skillDb)
  skillDb.find({}, function(error, skills) {
    res.render("skills/index", {
                //what is skills/index? 
      skills, 
      error
    })
  })
})

router.get("/:id", skillsCtrl.show)


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource')
// })

router.get("/", skillsCtrl.index)

export {
  router
}