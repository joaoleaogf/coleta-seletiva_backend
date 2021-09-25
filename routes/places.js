const express = require('express');
const router = express.Router();
const Place = require('../models/place');


//CREATE

router.post('/', async(req,res) => {

        const place = new Place({
            name: req.body.name,
            address: req.body.address,
            long: req.body.long,
            lat: req.body.lat
        })
        try {
            const ww = await place.save()
            res.json(ww);
        } catch {
            console.error();
        }
});

//READ

router.get('/', async(req,res) => {
    try{
           const places = await Place.find()
           res.json(places)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:name', async(req,res) => {
    try{
           const place = await Place.find({ name: req.params.name })
           res.json(place)
    }catch(err){
        res.send('Error ' + err)
    }
})

//UPDATE

router.put('/', async(req,res)=> {
    try{
        const place= await Place.findOneAndReplace({
            name: req.body.name,
            address: req.body.address,
            long: req.body.long,
            lat: req.body.lat
    })
    }catch(err){
        res.send('Error')
    }

})

//DELETE
router.delete('/',async(req,res)=> {
    try{
        const place = await Place.findOneAndDelete(req.body.name, place) 
        res.json(place)   
    }catch(err){
        res.send('Error')
    }

})





 module.exports = router

