const router = require("express").Router();
const PublicTransport =require ("../modal/publicTransport");

router.post("/AddPublicTransport", async (req, res) => {


    console.log("data for fuel station", req.body)

    const routeNo = req.body.routeNo;
    const route = req.body.route;
    const discription = req.body.discription;
    const vehicleNo = req.body.vehicleNo;
    const contact = req.body.contact;

    const newPublicTransport = new PublicTransport({
        routeNo, route, discription, vehicleNo, contact
    })

    try {
        let response = await newPublicTransport.save();
        if (response) {
            return res.status(201).send({ status: true, message: "Public Transport added successfully" })


        } else {
            return res.status(500).send({ status: "Try again" })
        }

    } catch (err) {
        console.log("error", err)
        return res.status(500).send({ status: "Already added" })

    }
})


router.get("/getPublicTransport", async (req, res) => {

    try {
        const response = await PublicTransport.find();
        return res.status(200).send({ status: "Success", data: response });
    } catch (error) {
        console.log("Something went wrong while connecting to DB");
        return { ok: false };
    }

});


//update Public Transport
router.route("/update/:id").put(async (req, res) => {


    console.log ("update front" , req.body);

    let PublicTransportId = req.params.id;
    const {

        routeNo,
        route,
        discription,
        vehicleNo,
        contact 
        } = req.body;

    //D structure
    const updatePublicTransport = {
        routeNo,
        route,
        discription,
        vehicleNo,
        contact
    }

        console.log(">>>>>>>>>>>>>>>>>>>>",updatePublicTransport);

    const update = await PublicTransport.findByIdAndUpdate(PublicTransportId, updatePublicTransport).then((response) => {
        console.log("llllllllllll",response);
        res.status(200).send({ status: "Public Transport Details Updated" })

    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with updating data" })
    })
    console.log("update unoo...",update);

})


//Delete fuel details
router.route("/deletePT/:id").delete(async (req, res) => {


    console.log ("delete front" , req.body);

    let PublicTransportId = req.params.id;
   
       

    const deletePublicTransport = await Fuel.findByIdAndDelete(PublicTransportId).then((response) => {
        // console.log("llllllllllll",response);
        res.status(200).send({ status: "Public Transport Details Delete" })

    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with delete data" })
    })
    console.log("delete unoo...",deletePublicTransport);

})




module.exports = router;