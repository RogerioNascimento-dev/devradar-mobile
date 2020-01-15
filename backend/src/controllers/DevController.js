const axios = require('axios');
const mongoose = require('mongoose');
const Dev = require('../models/Dev');

class DevController{

  async store(req,res){
    const {github_username, techs} = req.body;

     const teste = await Dev.find({github_username:github_username}).then((resp) => {
      if(resp){
        res.json(resp);
        }
     });


    try {
      const resApi = await axios.get(`https://api.github.com/users/${github_username}`);
      const techsArray = techs.split(',').map(tech => tech.trim());
      const {name = login, avatar_url, bio} = resApi.data;


      const dev_created = await Dev.create({
             name,
            github_username,
             avatar_url,
             bio,
             techs:techsArray,
           });

       res.json(dev_created);


    }catch(erro) {
      console.log(erro);
      // const {status,data} = erro.response;
      // return res.status(status).json(data);
    }
    // .then(function (response){
    //   const {name = login, avatar_url, bio} = response.data;
    //   const techsArray = techs.split(',').map(tech => tech.trim());


    //   Dev.create({
    //     name,
    //     avatar_url,
    //     bio,
    //     techs:techsArray,
    //   }).then(function (mongooseResp){
    //     return res.json(mongooseResp);
    //   });


    // }).catch(function(erro){
    //   const {status,data} = erro.response;
    //   return res.status(status).json([]);
    // });




  }

}

module.exports = new DevController();
