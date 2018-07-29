var express = require('express');
var router = express.Router();
var Note = require('../model/note').Note;

/* GET users listing. */
router.get('/notes', function(req, res, next) {
    let query = {raw: true}
    if(req.session.user){
        query.where = {
            uid: req.session.user.id
        }
    }
    Note.findAll(query).then(notes => {
      console.log(notes);
        res.send({status: 0 , data: notes});
    }).catch(() => {
        res.send({status: 1 , errorMsg: "数据库出错"})
    })
});

router.post('/notes/add', function(req, res, next) {
    if(!req.session.user){
        return res.send({status: 1, errorMsg: "请先登录"})
    }
    let uid = req.session.user.id;
    let note = req.body.note;
  Note.create({text: note , uid: uid}).then(() => {
    res.send({status: 0})
  }).catch(() => {
      res.send({status: 1 , errorMsg: "数据库出错"})
  })
});

router.post('/notes/edit', function(req, res, next) {
    if(!req.session.user){
        return res.send({status: 1, errorMsg: "请先登录"})
    }
    let uid = req.session.user.id;
    let note = req.body.note;
    let noteId = req.body.id;
    Note.update({text: note}, {where: {id: noteId, uid: uid}}).then((e) => {
        console.log(e)
        res.send({status: 0})
    }).catch(() => {
        res.send({status: 1 , errorMsg: "数据库出错"})
    })
});

router.post('/notes/delete', function(req, res, next) {
    if(!req.session.user){
        return res.send({status: 1, errorMsg: "请先登录"})
    }
    let uid = req.session.user.id;
    let noteId = req.body.id;
    Note.destroy({where: {id: noteId , uid: uid}}).then(() => {
        res.send({status: 0})
    }).catch(() => {
        res.send({status: 1 , errorMsg: "数据库出错"})
    })
});

module.exports = router;
