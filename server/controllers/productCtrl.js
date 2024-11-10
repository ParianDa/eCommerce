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

            await newProduct.save()

            res.json({msg:"Created a product"})

        }catch(err) {
            return res.status(500).json({mssg:err.message})
        }
    },
    deleteProduct:async (req,res) => {
        try{
            await Product.findByIdAndDelete(req.params.id)
            res.json({msg:"Deleted a product"})

        }catch(err) {
            return res.status(500).json({mssg:err.message})
        }
    },
    updateProduct:async (req,res) => {
        try{
            const {
                title,
                price,
                description,
                content,
                images,
                category} = req.body

                if(!images) return res.status(500).json({msg:"No image uploaded"})

                await Product.findByIdAndUpdate({_id:req.params.id}, {
                    title:title.toLowerCase(),price,description,content,category
                })

                res.json({msg:"Updated a product"})

        }catch(err) {
            return res.status(500).json({mssg:err.message})
        }
    }
}

module.exports = productCtrl