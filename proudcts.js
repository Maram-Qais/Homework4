import { Router } from "express";
import pc from "@prisma/client";


const router = Router()
const prisma= new pc.PrismaClient();
//read
router.get("/", async (req, res) => {
    try {
        const products = await prisma.products.findMany()

        return res.status(200).json(products);
    } 
    catch (error) { 
        return res.status(500).json({message: "ERRORRRRR"})
        
    }

});

// create 

router.post("/", async (req,res) =>{
    try{
        const products =await prisma.products.create({data: req.body});
        return res.status(201).json(products);
    }
    catch (error){
        return res.status(500).json({message: "ERROR AGAIN"})
    }
});


//update
router.put("/:id", async (req, res)=>{
    try { const products = await prisma.products.update({
        where: {id: Number(req.param.id)},
        data : req.body
    });
    return res.status(200).json(products);

    }
    catch (error) { 
        return res.status(5000).json({message: "again... error"})}

});
//delete
router.delete("/:id", async (req, res) => {
    await prisma.product.delete({
      where: { id: Number(req.params.id) },
    });
  
    return res.status(204).json();
  });
//read
router.get("/", async (_req, res) => {
    try {
        const inventory = await prisma.inventory.findMany()

        return res.status(200).json(inventory);
    } 
    catch (error) { 
        return res.status(500).json({message: "ERRORRRRR"})
        
    }

});

// create 

router.post("/", async (req,res) =>{
    try{
        const inventory =await prisma.inventory.create({data: req.body});
        return res.status(201).json(inventory);
    }
    catch (error){
        return res.status(500).json({message: "ERROR AGAIN"})
    }
});


//update
router.put("/:id", async (req, res)=>{
    try { const inventory = await prisma.inventory.update({
        where: {id: Number(req.param.id)},
        data : req.body
    });
    return res.status(200).json(inventory);

    }
    catch (error) { 
        return res.status(5000).json({message: "again... error"})}

});
//delete
router.delete("/:id", async (req, res) => {
    await prisma.inventory.delete({
      where: { id: Number(req.params.id) },
    });
  
    return res.status(204).json();
  });

  export default router;