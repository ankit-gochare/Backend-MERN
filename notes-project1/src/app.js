const express = require('express');
const app = express()

app.use(express.json());

// initailizing the array to store nots 
const notes = []

// api to create notes 
app.post('/notes' , (req,res)=>{
    // console.log(req.body);
    notes.push(req.body);
    res.status(201).json({
        message:"Note created Successfully"
    });
})


// api to view all the notes 
app.get('/notes' , (req,res)=>{
    res.status(200).json({
        message:"Notes fetched successfully",
        notes:notes
    })
})

// api to delete notes 
app.delete('/notes/:index' , (req,res) =>{
    const index = req.params.index
    delete notes[index]
    res.status(200).json({
        message:`Note at index ${index} deleted successfully`
    })
})

// api to update a note 
app.patch('/notes/:index' , (req,res)=>{
    const index = req.params.index

    const description = req.body.description
    notes[index].description = description

    res.status(200).json({
        message:`Note at index ${index} is updaed successfully`,
        note : notes[index]
    })
})

module.exports = app