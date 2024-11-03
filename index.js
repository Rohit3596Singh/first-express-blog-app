const express = require('express')
const path = require('path')
const blogs = require ('./data/blogs.js')
// const myRoutes = require ('./routes/blog.js')
const app = express()//make middle ware functions in the different fike and use them by creating a route constant like this
const port = 3000

// Set the view engine to EJS
// app.set('view engine', 'ejs');
// app.set('views', 'templates'); // Set the directory where your .html or .ejs files are located


app.use(express.static(path.join(__dirname,"static")))

app.use('/',require(path.join(__dirname,'./routes/blog.js')))
// app.use('/',myRoutes)


// app.use('/blog',require(path.join(__dirname,'./templates/blogHome.html')))



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})