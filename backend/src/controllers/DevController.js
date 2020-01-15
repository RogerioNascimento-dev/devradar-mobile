const axios = require('axios');
const mongoose = require('mongoose');
const Dev = require('../models/Dev');


module.exports = {

  async store(req,res){
    const {github_username, techs, latitude, longitude} = req.body;

      let dev = await Dev.findOne({github_username});

      if(!dev){
      const resApi = await axios.get(`https://api.github.com/users/${github_username}`);
      const techsArray = techs.split(',').map(tech => tech.trim());
      const {name = login, avatar_url, bio} = resApi.data;
      const location ={
        type:'Point',
        coordinates: [longitude,latitude],
      }
      dev = await Dev.create({
             name,
             github_username,
             avatar_url,
             bio,
             techs:techsArray,
             location,
           });
    }
       res.json(dev);
  }
}
