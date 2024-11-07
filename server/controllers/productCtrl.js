const Product = require('../models/productsModel')

const productCtrl = {
    getProduct:async (req,res) => {
        try{
            const products = await Product.find()
            res.json(products) 

        }catch(err) {
            return res.status(500).json({mssg:err.message})
        }
    },
    createProduct:async (req,res) => {
        try{
            const {product_id,
            title,
            price,
            description,
            content,
            images,
            category} = req.body

            if(!images) return res.status(500).json({message:'No image uploaded'})

            const product = await Product.findOne({product_id})

            if(product) return res.status(500).json({message:'product already exists'})

            const newProduct = new Product({
                product_id,
                title:title.toLowerCase(),
                price,
                description,
                content,
                images,
                category  
            })

            res.json(newProduct)

        }catch(err) {
            return res.status(500).json({mssg:err.message})
        }
    },
    deleteProduct:(req,res) => {
        try{

        }catch(err) {
            return res.status(500).json({mssg:err.message})
        }
    },
    updateProduct:(req,res) => {
        try{

        }catch(err) {
            return res.status(500).json({mssg:err.message})
        }
    }
}

module.exports = productCtrl