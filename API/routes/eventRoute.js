const router = require("express").Router();

const Event =require ('../modal/event')

router.post("/EventAdd", async (req, res) => {


    console.log("data for Event ", req.body)

    const eventType = req.body.eventType;
    const description = req.body.description;
    const location = req.body.location;
    const from = req.body.from;
    const to = req.body.to;
    const timeFrom =req.body.timeFrom;
    const timeTo =req.body.timeTo;
    const contact = req.body.contact;

    const newEvent = new Event({
        eventType,description ,location, from, to, timeFrom,timeTo, contact
    })

    try {
        let response = await newEvent.save();
        if (response) {
            return res.status(201).send({ status: true, message: "Event added successfully" })


        } else {
            return res.status(500).send({ status: "Try again" })
        }

    } catch (err) {
        console.log("error", err)
        return res.status(500).send({ status: "Event already added" })

    }
});


router.get("/getEvent", async (req, res) => {

    try {
      const response = await Event.find();
        return res.status(200).send({ status: "Success", data: response });
    } catch (error) {
        console.log("Something went wrong while connecting to DB");
        return { ok: false };
    }

});


//update event details
router.route("/update/:id").put(async (req, res) => {


    console.log ("update front" , req.body);

    let eventId = req.params.id;
    console.log("fav Id" ,eventId)
    const {
        Favourite
        } = req.body;

    //D structure
    const updateEvent = {
        Favourite
    }

        console.log(">>>>>>>>>>>>>>>>>>>>",updateEvent);

    const update = await Event.findOneAndUpdate({_id:eventId}, updateEvent).then((response) => {
        console.log("llllllllllll",response);
        res.status(200).send({ status: "Event Added to favourite Updated" })

    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with updating data" })
    })
    console.log("update unoo...",update);

})



module.exports = router;