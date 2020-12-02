module.exports = app => {
    const address = require("../controllers/address.controller.js");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", address.create);

    // Retrieve all Tutorials
    router.get("/", address.findAll);

    // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);

    // Retrieve a single Tutorial with id
    router.get("/:id", address.findOne);

    // Update a Tutorial with id
    router.put("/:id", address.update);

    // Delete a Tutorial with id
    router.delete("/:id", address.delete);

    // Create a new Tutorial
    // router.delete("/", tutorials.deleteAll);

    app.use('/address', router);
};