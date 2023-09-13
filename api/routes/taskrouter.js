const {Router} = require('express')
const router =Router();
const {getTasks ,saveTask,updateTask,deleteTask} =require("../controllers/taskControllers")

router.post("/new",(req,res)=>{res.send("hoooo")});
router.get('/get',getTasks);
router.post('/save',saveTask);
router.put('/update/:id',updateTask);
router.delete('/delete/:id',deleteTask);

module.exports=router;