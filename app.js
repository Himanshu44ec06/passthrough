const app = require('express')();
var cors = require('cors')

//app.use(cors())
const PORT = 8080;


app.get('/test',(req,res) => {
    res.status(200).send({
         tshirt: 'tshrirt',
         size: 'large'
    })
})

app.listen(
     PORT, 
     () =>   { console.log(`it's alive on ${ PORT }`)  } 
)