const Travel = require('../model/Travel.model')

const AddTravelBook = async (req, res) => {
    try{
        const {title, image, descr} = req.body
        const newTravel = await Travel.create({
            title,
            image,
            descr
        })

        res.status(201).json({
            message: 'Malumot yaratildi',
            newTravel
        })
    }
    catch(err){
        res.send(err)
    }
}


const getAllTravels = async (req, res) => {
    try{
        const travels = await Travel.find()

        res.status(200).json({
            message: 'success',
            travels: travels.reverse()
        })
    }
    catch(err){
        res.send(err)
    }
}


const UpdateTravelBook = async (req, res) => {
    try{
        const {title, image, descr} = req.body
        const updatedTravel = await Travel.findByIdAndUpdate(req.params.id,{
            title,
            image,
            descr
        })


        res.status(200).json({
            message: 'Malumot yangilandi',
            updatedTravel
        })
    }
    catch(err){
        res.send(err)
    }
}


const DeleteTravelBook = async (req, res) => {
    try{
        await Travel.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: 'Malumot o`chirildi'
        })
    }
    catch(err){
        res.send(err)
    }
}


const getOneTravel = async (req, res) => {
    try{
        const travel = await Travel.findById(req.params.id)

        if(!travel){
            return res.status(404).json({
                message: "Malumot topilmadi"
            })
        }

        return res.status(200).json({
            message: 'Malumot topildi',
            travel
        })
    }
    catch(err){
        res.send(err)
    }
}




module.exports = {getAllTravels, getOneTravel, AddTravelBook, DeleteTravelBook, UpdateTravelBook}