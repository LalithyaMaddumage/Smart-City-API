const router = require("express").Router();
const Fuel =require ("../modal/fuel");

router.post("/Fuel", async (req, res) => {


    console.log("data for fuel station", req.body)

    const stationName = req.body.stationName;
    const location = req.body.location;
    const from = req.body.from;
    const to = req.body.to;
    const petrol = req.body.petrol;
    const diesel = req.body.diesel;
    const contact = req.body.contact;

    const newFuel = new Fuel({
        stationName, location, from, to, petrol, diesel, contact
    })

    try {
        let response = await newFuel.save();
        if (response) {
            return res.status(201).send({ status: true, message: "Fuel Station added successfully" })


        } else {
            return res.status(500).send({ status: "Try again" })
        }

    } catch (err) {
        console.log("error", err)
        return res.status(500).send({ status: "Fuel Station already added" })

    }
})


router.get("/getFuel", async (req, res) => {

    try {
        const response = await Fuel.find();
        return res.status(200).send({ status: "Success", data: response });
    } catch (error) {
        console.log("Something went wrong while connecting to DB");
        return { ok: false };
    }

});


//update fuel details
router.route("/update/:id").put(async (req, res) => {


    console.log ("update front" , req.body);

    let fuelId = req.params.id;
    const {

         stationName, 
         location,
         from,
         to,
         petrol, 
         diesel,
         contact 
        } = req.body;

    //D structure
    const updateFuel = {
        stationName, 
        location,
        from,
        to,
        petrol, 
        diesel,
        contact 
    }

        console.log(">>>>>>>>>>>>>>>>>>>>",updateFuel);

    const update = await Fuel.findByIdAndUpdate(fuelId, updateFuel).then((response) => {
        console.log("llllllllllll",response);
        res.status(200).send({ status: "Fuel Details Updated" })

    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with updating data" })
    })
    console.log("update unoo...",update);

})


//Delete fuel details
router.route("/deleteF/:id").delete(async (req, res) => {


    console.log ("delete front" , req.body);

    let fuelId = req.params.id;
   
       

    const deleteFuel = await Fuel.findByIdAndDelete(fuelId).then((response) => {
        // console.log("llllllllllll",response);
        res.status(200).send({ status: "Fuel Details Delete" })

    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with delete data" })
    })
    console.log("delete unoo...",deleteFuel);

})




module.exports = router;