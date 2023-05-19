const express = require('express');
// const exphbs = require('express-handlebars');
const hbs = require("hbs");
const path = require('path')

const app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname,"/views"));
app.set("layouts", path.join(__dirname,"/views/layouts"));
app.set("partials", path.join(__dirname,"/views/partials"));
hbs.registerPartials(path.join(__dirname, "/views/partials"));

app.use(express.static('public'));

//  app.engine('handlebars', exphbs.engine({ extname: '.hbs', defaultLayout: "main"}));
//  app.engine('.hbs', exphbs.engine({ extname: '.hbs', defaultLayout: "main"}));
// app.engine('handlebars', exphbs())
// app.set('view engine', 'handlebars');

// app.engine('.hbs', exphbs({
//     defaultLayout: 'main',
//     extname: '.hbs',
//     layoutsDir: path.join(__dirname, 'views/layouts')
//   }))
//   app.set('view engine', '.hbs')
//   app.set('views', path.join(__dirname, 'views'))

app.get('/blog', (req, res) => {
    const posts = [
        {
          title: "Node.js",
          body: "Node.js é muito utilizado na programação hoje em dia",
        },
        {
          title: "PHP em 2023?",
          body: "A resposta é NÃOOOOOOO",
        },
        {
          title: "C#",
          body: "cooooll",
        },
      ];
    
      res.render("blog", { layout: 'layouts/main', posts });
});

app.get('/', function (req, res) 
{
    const itens = ["a", "b", "c", "d"]

    const user = 
    {
        name: "Fabrício",
        surname: "Tonetto Londero",
        age: 32,
        maior: 15>=18?true:false
    }

    res.render('home', 
    { 
        layout: 'layouts/main',
        user: user,
        itens: itens
    });
});

app.listen(3000, () => 
{
    console.log('rodando...');
});