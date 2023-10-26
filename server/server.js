
const express = require('express')
const path = require("path");
const app = express()

// #############################################################################
// This configures static hosting for files in /public that have the extensions
// listed in the array.
var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html','css','js','ico','jpg','jpeg','png','svg'],
  index: ['index.html'],
  maxAge: '1m',
  redirect: false
}

const appBuildDirectory = `${__dirname}/build`

app.use(express.static('build', options))

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(`${appBuildDirectory}/index.html`));
  });

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`React app listening at http://localhost:${port}`)
})
