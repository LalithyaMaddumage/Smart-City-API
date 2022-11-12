const router = require("express").Router();
let Login = require("../modal/login");

router.route("/addLogin").post((req,res)=>{

    console.log("add new login...");

    const Email = req.body.Email;
    const UserName = req.body.UserName;
    const Password = req.body.Password;

    const newLogin = new Login({
        Email,
        UserName,
        Password
    })

    newLogin.save().then(()=>{

        //pass the object to database if successful
        res.status(200).send({message:"new login added"}) //from jason format a response sent to front end

    }).catch((err)=>{

        //error or exception handling
        console.log(err);
        res.status(300).send({status : "error with adding login", error:err.message});

    })
})

//check availability of user in the database
router.route("/getUser/:UN/:PW").get(async(req,res)=>{

    let UserName = req.params.UN;
    let Password = req.params.PW;

    console.log("get user...",UserName,Password);

    const user = await Login.findOne({UserName: UserName , Password: Password}).then((user)=>{
        res.status(200).send({status : "User Fetched", login:user})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "error eith fetching user", error:err.message});
    })
})

module.exports = router;