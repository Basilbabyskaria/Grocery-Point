const express=require('express')
const cors=require('cors')
const dataService=require('./services/dataService')
const app=express()
app.use(express.json());

app.listen(3000,()=>{
    console.log('listening to port 3000');
})
app.use(cors({
    origin:'http://localhost:4200'

}))
app.get('/getalerlt_expiry',(req,res)=>{
    dataService.getalerlt_expiry()
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
    
})
app.get('/getproducts',(req,res)=>{
    dataService.getProducts()
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
    
})
app.post('/product',(req,res)=>{
    // console.log(req.body.title);
    var profit=req.body.Sprice-req.body.cost;
    dataService.addProduct(req.body.title,req.body.category,req.body.description,req.body.cost,req.body.Sprice,req.body.quantity,req.body.expiry,profit)
    .then(
        (result)=>{
            res.status(result.statusCode).json(result);

        }
    )
})
app.post('/editproduct',(req,res)=>{
    // console.log("req.body.title");
    var profit=req.body.Sprice-req.body.cost;
    dataService.editProduct(req.body.title,req.body.category,req.body.description,req.body.cost,req.body.Sprice,req.body.quantity,req.body.expiry,profit)
    .then(
        (result)=>{
            res.status(result.statusCode).json(result);

        }
    )
})
app.delete('/deleteproduct/:title',(req,res)=>{
    dataService.deleteproduct(req.params.title)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
    
    
})
app.get('/getorders',(req,res)=>{
    dataService.getorders()
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
    
})
app.get('/getsummary',(req,res)=>{
    dataService.getsummary()
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})
app.get('/graph_data',(req,res)=>{
    dataService.graph_data()
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})
app.get('/catagory_graph_data',(req,res)=>{
    dataService.catagory_graph_data()
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})