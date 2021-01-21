import express from 'express';

const app = express();

app.get("/", function(request, response){
    response.sendFile(__dirname + "/index.html");
});


app.listen(process.env.PORT || 3000);