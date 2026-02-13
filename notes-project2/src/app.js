const express = require('express');
const app = express()

app.use(express.json())

const noteModel = require('./models/note.model')

// api to create notes 
app.post('/notes' ,async (req,res)=>{
    // console.log(req.body);
    const data = req.body

    const note = await noteModel.create({
        title:data.title,
        description:data.description
    })
    res.status(201).json({
        message:"Note created succesfully",
        note:note
    })
})


// api to view all notes 
app.get('/notes' , async(req,res)=>{
    const notes = await noteModel.find();

    res.status(200).json({
        message:"Notes fetched successfully",
        notes:notes
    })
})

// api to delete notes
app.delete('/notes/:id' , async(req,res)=>{

    const id = req.params.id
    const note = await noteModel.findOneAndDelete({_id:id})

    res.status(200).json({
        message:"Note deleted sucessfully",
        note:note
    })
})

// api to update note
app.patch('/notes/:id' , async(req,res)=>{

    const id = req.params.id
    const description = req.body.description
    
    const note = await noteModel.findOneAndUpdate({_id:id},
        {
            description:description
        }
    )
    res.status(200).json({
        message:"Note updated successfully",
        note:note
    })

})


module.exports = app