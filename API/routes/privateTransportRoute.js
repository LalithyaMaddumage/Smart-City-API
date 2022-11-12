const router = require("express").Router();
const PrivateTransport =require ("../modal/privateTransport");

router.post("/AddPrivateTransport", async (req, res) => {


    console.log("data for Private transport", req.body)

    const vehicle = req.body.vehicle;
    const type = req.body.type;
    const vehicleNo = req.body.vehicleNo;
    const contact = req.body.contact;
    const km = req.body.km;
    const totalPrice = req.body.totalPrice;

    const newPrivateTransport = new PrivateTransport({
        vehicle, type, vehicleNo, contact, km, totalPrice
    })

    try {
        let response = await newPrivateTransport.save();
        if (response) {
            return res.status(201).send({ status: true, message: "Private Transport added successfully" })


        } else {
            return res.status(500).send({ status: "Try again" })
        }

    } catch (err) {
        console.log("error", err)
        return res.status(500).send({ status: "Already added" })

    }
})


router.get("/getPrivateTransport", async (req, res) => {

    try {
        const response = await PrivateTransport.find();
        return res.status(200).send({ status: "Success", data: response });
    } catch (error) {
        console.log("Something went wrong while connecting to DB");
        return { ok: false };
    }

});


//update Private Transport
router.route("/update/:id").put(async (req, res) => {


    console.log ("update front" , req.body);

    let PrivateTransportID = req.params.id;
    const {

        vehicle,
        type,
        vehicleNo,
        contact,
        km,
        totalPrice
        } = req.body;

    //D structure
    const updatePrivateTransport = {
        vehicle,
        type,
        vehicleNo,
        contact,
        km,
        totalPrice
    }

        console.log(">>>>>>>>>>>>>>>>>>>>",updatePrivateTransport);

    const update = await PrivateTransport.findByIdAndUpdate(PrivateTransportID, updatePrivateTransport).then((response) => {
        console.log("llllllllllll",response);
        res.status(200).send({ status: "Private Transport Details Updated" })

    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with updating data" })
    })
    console.log("update unoo...",update);

})


//Delete fuel details
router.route("/deletePT/:id").delete(async (req, res) => {


    console.log ("delete front" , req.body);

    let PrivateTransportID = req.params.id;
   
       

    const deletePrivateTransport = await PrivateTransport.findByIdAndDelete(PrivateTransportID).then((response) => {
        // console.log("llllllllllll",response);
        res.status(200).send({ status: "Private Transport Details Delete" })

    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with delete data" })
    })
    console.log("delete unoo...",deletePrivateTransport);

})




module.exports = router;