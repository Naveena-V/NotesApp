const Category=require('../models/category')

module.exports.list=(req,res)=>{
    Category.find()
       .then((categories)=>{
           res.json(categories)
       })
       .catch((err)=>{
           res.json(err)
       })
}

module.exports.update=(req,res)=>{
    const body=req.body
    const category=new Category(body)
    category.save(body)
        .then((cat)=>{
            if(cat){
                res.json(cat)
            } else {
                res.json({})
            }
        })
        .catch((err)=>{
            res.json(err)
        })
}



// app.get('/category',(req,res)=>{
//     Category.find()
//         .then((categories)=>{
//             if(categories){
//                 res.json(categories)
//             } else{
//                 res.json({})
//             }
//         })
// })

// app.post('/category',(req,res)=>{
//     const body=req.body
//     const category=new Category(body)
//     category.save(body)
//         .then((cat)=>{
//             if(cat){
//                 res.json(cat)
//             } else {
//                 res.json({})
//             }
//         })
//         .catch((err)=>{
//             res.json(err)
//         })
// })