const express = require('express');
const app = express();


// serve the public directory
app.use(express.static("public"));

// make it so that we dont have to specify "ejs" below
app.set("view engine", "ejs");

app.get('/', (req, res) => {
	res.render("home");
});

app.get('/fallinlovewith/:thing', (req, res) => {
	var thing = req.params.thing;
	res.render("love", {thingvar: thing});
});

app.get('/post', (req, res) => {
	let posts = [
			{title: "Information", author: "Susan"},
			{title: "Lions of the Caribbean", author: "Anthony"}
			];
	
	res.render("post", {postvar: posts});
});


app.listen(3000, ()=>{
	console.log('server listening on port 3000')
});