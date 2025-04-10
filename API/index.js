const exp=require('express')
const path=require('path')
const db=require('./db.json')
const app=exp()
app.route('/')
.get((req,res)=>{
    res.sendFile(path.join(__dirname,'public','home.html'))
});
app.route('/users')
.get((req,res)=>{
    res.status(200).json(db)
    });
    app.route('/api/users')
    .get((req,res)=>{
        let html=
        `<html>
        <head><title>user details</title>
        <style>
        body{background-color:powderblue;
        }
        </style>
        </head>
        <body>
        <ol>
        ${db.map((user)=>`<li>${user.first_name}</li>`).join('')}
        </ol>
        </body>
        </html>`
        res.status(200).send(html)
    })
app.route('/api/user/id')
.get((req,res)=>{
    let id=Number(req,Params,id)
    let user=db.find((user)=>user.id===id)
    res.status(200).json(db)
})
app.listen(3000)