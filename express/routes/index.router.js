import express from 'express';
const router = express.Router();

router.get("/",(req,res)=>{
 res.render("demo");
});

router.get("/about",(req,res)=>{
 res.render("about");
});

router.get("/contact",(req,res)=>{
 res.render("contact");
});

router.get("/service",(req,res)=>{
 res.render("service");
});

router.post("/service",(req,res)=>{
 console.log(req.body);    
 res.render("service");
});

router.get("/register",(req,res)=>{
 res.render("register");
});

router.get("/login",(req,res)=>{
 res.render("login");
});

export default router;