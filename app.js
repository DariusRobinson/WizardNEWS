const express = require("express");
const morgan = require("morgan")
const postBank = require("./postBank")


const app = express();
const PORT = 1337;


app.use(morgan('dev'));

app.get("/", (req, res) => {

const posts = postBank.list()


const html = `<!DOCTYPE html>
<html>
<head>
    <title>Wizard News</title>
</head>
<body>
    <ul>
       ${posts.map(post => `<li>${post.title} - ${post.name}</li>`).join('')}
    </ul>
</body>
</html>`


res.send(html)

})

app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
