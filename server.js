const express = require("express");


const app = express();

app.listen(3000, function() {
  console.log("Server is listening on port 3000. Ready to accept requests!");

});
app.get("/", function(req, res) {
  res.send("Hello World!");
  console.log(req);
});
app.get("/chocolate", function(req, res) {
  res.send("Mm chocolate :)");
});
app.get("/nodegirls", function(req, res) {
  res.send("yay beatyfull girls :)");
});
const albumsData = [
  {
    albumId: "10",
    artistName: "Beyoncé",
    collectionName: "Lemonade",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music20/v4/23/c1/9e/23c19e53-783f-ae47-7212-03cc9998bd84/source/100x100bb.jpg",
    releaseDate: "2016-04-25T07:00:00Z",
    primaryGenreName: "Pop",
    url:
      "https://www.youtube.com/embed/PeonBmeFR8o?rel=0&amp;controls=0&amp;showinfo=0"
  },
  {
    albumId: "11",
    artistName: "Beyoncé",
    collectionName: "Dangerously In Love",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
    releaseDate: "2003-06-24T07:00:00Z",
    primaryGenreName: "Pop",
    url:
      "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0"
  }
];

app.get("", function(req, res) {
  res.send(albumsData);



  
});


app.post("/albums", function(req, res) {
  console.log("POST /albums route"); 
  res.sendStatus(200)
});

const bodyParser = require("body-parser");

app.use(bodyParser.json());


app.post("/albums", function(req, res) {
  albumsData.push(req,body)
  console.log(albumsData);
  res.send(200);
});

app.get ("/albums",function(req,res){
    res.send(albumsData)
});


app.delete("/albums/:albumId",function(req,res){
const index =albumsData.findIndex(function(album){
    return album.albumId === req.params.albumId;
})
albumsData.splice(index,1)
res.send(201);
})
 

app.get("/albums",function(req,res){
if(req.query.genre){
    const albums = albumsData.filter(function(albums){
        return(
            album.primaryGenreName.toLowerCase()=== req.query.genre.toLowerCase()
        )
    })
}

});

app.put("albums/:albumId",function(req,res){
const index =albumsData.findIndex(function(album){
    return album.albumId === req.params.albumId
})
albumsData[index] = req.body;
res.send(200)
})

app.listen(3000,function(){
    console.log("server is listening on port 3000. ready to accpet requests")
})




