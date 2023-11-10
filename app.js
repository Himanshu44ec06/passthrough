const app = require('express')();

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