const router = require("express").Router();
const Water = require("../modal/water");

//add water details 
router.post("/AddWShedule", async(req,res)=>{
    console.log("add water cut shedules", req.body)

    const Location = req.body.Location;
    const From = req.body.From;
    const To = req.body.To;
    const Date = req.body.Date;

    const newWater = new Water({
        Location,
        From,
        To,
        Date
    })

    try{
        let response = await newWater.save();
        if (response){

            return res.status(201).send({status: true , message: "Water cut sedule added successfully"})

        }else{

            return res.status(500).send({status: "Try Again"})
        }
    } catch(err){

        console.log("error",err)
        return res.status(500).send({status:"water cut shedule already added"})
    }
})


//get all water details
router.get("/getWShedule", async(req,res) =>{
    try{
        const response = await Water.find();
        return res.status(200).send({status:"Success", data: response});
    }catch(error){
        console.log("something went wrong");
        return {ok:false};
    }
})

//update water details
router.route("/updateWShedule/:id").put(async(req,res)=>{
    console.log("update water cut shedule", req.body);

    let sheduleId = req.params.id;
    const{ Location, From, To, Date } = req.body;

    const updateWShedule = {
        Location,
        From,
        To,
        Date
    }

    const update = await Water.findByIdAndUpdate(sheduleId, updateWShedule).then((response) => {
        console.log("llllllllllll",response);
        res.status(200).send({ status: "Water Cut Shedule Details Updated" })

    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with updating data" })
    })
    console.log("updated....",update);
})

//delete water details
router.route("/deleteWShedule/:id").delete(async(req,res)=>{
    console.log ("delete water cut shedule" , req.body);

    let sheduleId = req.params.id;
   
       

    const deleteShedule = await Water.findByIdAndDelete(sheduleId).then((response) => {
        // console.log("llllllllllll",response);
        res.status(200).send({ status: "Water Cut Shedule Details Delete" })

    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with delete data" })
    })
    console.log("deleted....",deleteShedule);
})

module.exports = router;