const express = require("express");
const axios = require("axios");
const cors = require('cors')
const server = express();
const PORT = 3000;

server.use(express.json());
server.use(cors());

server.get("/api/users", (req, res) => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(response =>{
        const users = response.data.map(user => {
            return {
                id: user.id,
                username: user.username,
                email: user.email,
                city: user.address.city
            }
        });
        res.status(200).send(users);
    }).catch(err =>{
        if(err){
            console.log(err);
        }
        res.status(404).json({
            error: err,
            message: "There are no users found!"
        });
    });

});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});