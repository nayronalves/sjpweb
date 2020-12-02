module.exports = app => {
    const associados = require("../controllers/associado.controller.js");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", associados.create);

    // Retrieve all Tutorials
    router.get("/", associados.findAll);

    // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);

    // Retrieve a single Tutorial with id
    router.get("/:id", associados.findOne);

    // Update a Tutorial with id
    router.put("/:id", associados.update);

    // Delete a Tutorial with id
    router.delete("/:id", associados.delete);

    // Create a new Tutorial
    // router.delete("/", tutorials.deleteAll);

    app.use('/associados', router);
};