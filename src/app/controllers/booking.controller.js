const db = require("../models");
const Associado = db.associado;
const Booking = db.booking;
const Op = db.Sequelize.Op;
// const associadoModel = require("../models/associado.model");

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.checkin && !req.body.checkout) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Booking
    const booking = {
        checkin: req.body.checkin,
        checkout: req.body.checkout,
        status: req.body.status,
        AssociadoId: req.body.associado_id
            // nomeServ: req.body.nomeServ ? req.body.nome : false
    };

    // Save Tutorial in the database
    Booking.create(booking)
        .then(data => {
            res.send(data);
            console.log(data);
        })
        .catch(err => {
            console.log(err);
            // res.status(500).send({
            //     message: err.message || "Some error occurred while creating the Associado."
            // });
        });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const checkin = req.query.checkin;
    const associd = req.query.associado_id;

    var condition = checkin ? {
        checkin: {
            [Op.like]: `%${checkin}%`
        }
    } : null;

    Booking.findAll({ where: condition, include: [Associado] })
        .then(data => {
            res.send(data);
            // console.log(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Associado."
            });
        });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Booking.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Associado with id=" + id
            });
        });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Booking.update(req.body, {
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tutorial was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Associado with id=" + id
            });
        });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Booking.destroy({
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Associado was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Associado with id=${id}. Maybe Tutorial was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Associado with id=" + id
            });
        });
};

// Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {};

// Find all published Tutorials
// exports.findAllPublished = (req, res) => {};