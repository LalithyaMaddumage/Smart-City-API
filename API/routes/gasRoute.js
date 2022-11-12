const router = require("express").Router();
const Gas =require ('../modal/gas')

router.post("/GasAdd", async (req, res) => {


    console.log("data for Gas station", req.body)

    const stationName = req.body.stationName;
    const location = req.body.location;
    const from = req.body.from;
    const to = req.body.to;
    const availability =req.body.availability;
    const contact = req.body.contact;

    const newGas = new Gas({
        stationName, location, from, to, availability, contact
    })

    try {
        let response = await newGas.save();
        if (response) {
            return res.status(201).send({ status: true, message: "Gas Station added successfully" })


        } else {
            return res.status(500).send({ status: "Try again" })
        }

    } catch (err) {
        console.log("error", err)
        return res.status(500).send({ status: "Gas Station already added" })

    }
})


router.get("/getGas", async (req, res) => {

    try {
      const response = await Gas.find();
        return res.status(200).send({ status: "Success", data: response });
    } catch (error) {
        console.log("Something went wrong while connecting to DB");
        return { ok: false };
    }

});


//update Gas details
router.route("/updateGas/:id").put(async (req, res) => {


    console.log ("update front" , req.body);

    let gasId = req.params.id;
    const {

         stationName, 
         location,
         from,
         to,
         availability,   
         contact 
        } = req.body;

    //D structure
    const updateGas = {
        stationName, 
        location,
        from,
        to,
        availability, 
        contact 
    }

        console.log(">>>>>>>>>>>>>>>>>>>>",updateGas);

    const update = await Gas.findByIdAndUpdate(gasId, updateGas).then((response) => {
        console.log("llllllllllll",response);
        res.status(200).send({ status: "Fuel Details Updated" })

    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with updating data" })
    })
    console.log("update unoo...",update);

})

//Delete Gas details
router.route("/deleteGas/:id").delete(async (req, res) => {


    console.log ("delete front" , req.body);

    let GasId = req.params.id;
   
       

    const deleteGas = await Gas.findByIdAndDelete(GasId).then((response) => {
        // console.log("llllllllllll",response);
        res.status(200).send({ status: "Gas Details Delete" })

    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with delete data" })
    })
    console.log("delete unoo...",deleteGas);

})


module.exports = router;