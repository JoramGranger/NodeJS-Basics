const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
//const { result } = require('lodash');


// express app
const app = express();

// DB CON
const dbURI = 'mongodb+srv://root:DBacc355@nodegs.5cvbb8h.mongodb.net/BLOGDB?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000)/* console.log('db con 200') */)
    .catch((err) => console.log(err));

// register view engines
app.set('view engine', 'ejs');
//app.engine('html', require('ejs').renderFile);
app.set('views', 'myviews');

// lisen
//app.listen(3000);

// middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));
//app.use(morgan('tiny'));

// middleware
/* app.use((req, res, next) => {
    console.log('new request made:');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    next();
});

app.use((req, res, next) => {
    console.log('in the next middleware');
    next();
}); */

// mongo routes
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog',
        snippet: 'about my new blog',
        body: 'more about my new blog'
    })
    blog.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });    
});

// get all blogs
app.get('/all-blogs', (req, res) => {
    Blog.find()
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
  });

  // single blog
  app.get('/single-blog', (req, res) => {
    Blog.findById('62fb6c3e46b6589ee44a450c')
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        })
  });

// home
app.get('/', (req, res) => {
    let blogs = [
        {title: 'fruits', snippet: 'mangoes, pineapple'},
        {title: 'vegetables', snippet: 'cabbage, greens'},
        {title: 'cars', snippet: 'ford, ferrari'},
    ];
    res.render('index', { title: 'Homepage | Blog', blogs });
});
// about
app.get('/about', (req, res) => {
    res.render('about', { title: 'Aboutpage | Blog' });   
});

// create blogs
app.get('/create', (req, res) => {
    res.render('create',  { title: 'Createpage | Blog' });
});

// 404 page
app.use((req, res) => {
    res.status(404).render('404',  { title: '404page | Blog' });
});