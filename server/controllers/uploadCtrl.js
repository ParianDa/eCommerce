const path = require('path')

const uploadCtrl = {
    uploadProductImage: (req,res) => {
        try{
            if(!req.file) return res.status(400).json({message : 'No such file uploaded'})

            res.json({
                message: 'File Uploaded successfully',
                file: req.file
            })

        }catch(err) {
            return res.status(500).json({msg:err.message})
        }
    }
}

module.exports = uploadCtrl