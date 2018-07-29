const Sequelize = require('sequelize');
const path = require('path')
const sequelize = new Sequelize(undefined, undefined, undefined, {
    host: 'localhost',
    dialect: 'sqlite',

    // 仅限 SQLite
    storage: path.join(__dirname, '../database/database.sqlite')
});

const Note = sequelize.define('note', {
    text: {
        type: Sequelize.STRING
    },
    uid: {
        type: Sequelize.STRING
    }
});

// Note.drop();
// Note.sync({force:true})

// // force: true 如果表已经存在，将会丢弃表
// Note.sync().then(() => {
//     // 表已创建
//     Note.create({
//         text: 'huanght',
//     });
// }).then( ()=>{
//     Note.findAll({raw:true , where:{id: 2}}).then(notes => {
//         console.log(notes)
//     })
// })

module.exports.Note = Note;