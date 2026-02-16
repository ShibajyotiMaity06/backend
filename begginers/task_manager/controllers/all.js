const express = require('express')
const fs = require('fs').promises
const path = require('path')

const filePath = path.join(__dirname, "../data.json");

async function ReadData() {
    const data = await fs.readFile(filePath , "utf-8")
    return JSON.parse(data)
}

async function WriteData(data) {
    await fs.writeFile(filePath , JSON.stringify(data,null , 2))
}

const getTasks = async (req , res) => {
    const data = await ReadData()
    if (data.length===0){
        return res.status(200).json({message : 'no data , add first'})
    }
    res.json(data)
}

const postdata = async (req , res) => {
    try {
        const add = req.body
        const data = await ReadData()
        add.id = Date.now()
        data.push(add)
        await WriteData(data)
        res.status(201).json(add)
    } catch (err) {
        res.status(500).json({error : 'failed to save data'})
    }
}

const deleteData = async (req,res)=>{
    try {
        const id = parseInt(req.params.id)
        let data = await ReadData()

        const filtered = data.filter(item => item.id !== id)

        await WriteData(filtered)

        res.json({ message: "Deleted successfully" });
    } catch (err) {
        res.status(500).json({error : 'failed to delete data'})
    }
}


module.exports = {deleteData , getTasks , postdata}