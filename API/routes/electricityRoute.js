const router = require("express").Router();
const Electricity = require("../modal/electricity");

//add electricity details 
router.post("/AddEShedule", async(req,res)=>{
    console.log("add power cut shedules", req.body)

    const Location = req.body.Location;
    const From = req.body.From;
    const To = req.body.To;
    const Date = req.body.Date;

    const newElectricity = new Electricity({
        Location,
        From,
        To,
        Date
    })

    try{
        let response = await newElectricity.save();
        if (response){

            return res.status(201).send({status: true , message: "Power cut shedule added successfully"})

        }else{

            return res.status(500).send({status: "Try Again"})
        }
    } catch(err){

        console.log("error",err)
        return res.status(500).send({status:"Power cut shedule already added"})
    }
})


//get all electricity details
router.get("/getEShedule", async(req,res) =>{
    try{
        const response = await Electricity.find();
        return res.status(200).send({status:"Success", data: response});
    }catch(error){
        console.log("something went wrong");
        return {ok:false};
    }
})

//update electricity details
router.route("/updateEShedule/:id").put(async(req,res)=>{
    console.log("update power cut shedule", req.body);

    let sheduleId = req.params.id;
    const{ Location, From, To, Date } = req.body;

    const updateEShedule = {
        Location,
        From,
        To,
        Date
    }

    const update = await Electricity.findByIdAndUpdate(sheduleId, updateEShedule).then((response) => {
        console.log("llllllllllll",response);
        res.status(200).send({ status: "Power Cut Shedule Details Updated" })

    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with updating data" })
    })
    console.log("updated....",update);
})

//delete electricity details
router.route("/deleteEShedule/:id").delete(async(req,res)=>{
    console.log ("delete power cut shedule" , req.body);

    let sheduleId = req.params.id;
   
       

    const deleteShedule = await Electricity.findByIdAndDelete(sheduleId).then((response) => {
        // console.log("llllllllllll",response);
        res.status(200).send({ status: "Power Cut Shedule Details Delete" })

    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with delete data" })
    })
    console.log("deleted....",deleteShedule);
})

module.exports = router;