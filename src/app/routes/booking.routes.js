module.exports = app => {
    const bookings = require("../controllers/booking.controller");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", bookings.create);

    // Retrieve all Tutorials
    router.get("/", bookings.findAll);

    // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);

    // Retrieve a single Tutorial with id
    router.get("/:id", bookings.findOne);

    // Update a Tutorial with id
    router.put("/:id", bookings.update);

    // Delete a Tutorial with id
    router.delete("/:id", bookings.delete);

    // Create a new Tutorial
    // router.delete("/", tutorials.deleteAll);

    app.use('/bookings', router);
};