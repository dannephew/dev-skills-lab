import * as skillDb from "../data/skill-db.js"

export{
    index, 
    show
}


function index(req, res) {
    // console.log("req.time", req.time)
    skillDb.find({}, function(error, skills) {
        res.render('skills/index', {
                    //file name under views is "skills/index"
          skills: skills,
          error: error,
        //   time: req.time
        })
      })
}

function show(req, res) {
    skillDb.findById(req.params.id, function(error, skill) {
      res.render('skills/show', {
        skill: skill,
        error: error
      })
    })
  }

