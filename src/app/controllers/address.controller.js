const db = require("../models");
const Associado = db.associado;
const Address = db.address;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.description) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Associado
    const address = {
        description: req.body.description,
        zipcode: req.body.zipcode,
        neighborhood: req.body.neighborhood,
        state: req.body.state,
        city: req.body.city,
        number: req.body.number,
        complement: req.body.complement,
        AssociadoId: req.body.AssociadoId
    };

    // Save Tutorial in the database
    Address.create(address)
        .then(data => {
            res.send(data);
            console.log(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Associado."
            });
        });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const description = req.query.description;
    var condition = description ? {
        description: {
            [Op.like]: `%${description}%`
        }
    } : null;

    Address.findAll({ where: condition, include: [Associado] })
        .then(data => {
            res.send(data);
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

    Address.findByPk(id)
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

    Address.update(req.body, {
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tutorial was updated successfully."
                });
                console.log(req.params, req.params.id)
            } else {
                res.send({
                    message: `Cannot update Address with id=${id}. Maybe Tutorial was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Address with id=" + id
            });
        });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Address.destroy({
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