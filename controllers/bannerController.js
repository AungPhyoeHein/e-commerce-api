const Banner = require('../models/banner.js')

const create = async (req,res) => {
    try {
        if(req.link == null || req.link.length <= 0 || req.image == null || req.link.image <= 0 ){
            return res.status(400).json({
                msg: 'Image and Link are should not be null.'
            })
        }
        const {link,image} = req.body;
        const banner = await new Banner({link,image});
        await banner.save();
        res.status(201).json({msg: 'New Banner create Successful.'})
    } catch (err) {
        return res.status(500).json({error: err.message});
    }
}

const get = async(req,res) => {
    try {
        const banner = await Banner.find({});
        res.status(200).json({msg: 'Banner got Successful.',data: banner})
    } catch (err) {
        return res.status(500).json({error: err.message});
    }
}

module.exports = {create,get}