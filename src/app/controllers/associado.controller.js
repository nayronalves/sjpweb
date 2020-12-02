const db = require("../models");
const Address = db.address;
const Associado = db.associado;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Associado
    const associado = {
        name: req.body.name,
        matricula: req.body.matricula,
        email: req.body.email,
        rg: req.body.rg,
        cpf: req.body.cpf,
        mat: req.body.mat,
        dt_born: req.body.dt_born
            // nomeServ: req.body.nomeServ ? req.body.nome : false
    };

    // Save Tutorial in the database
    Associado.create(associado)
        .then(data => {
            res.send(data);
            console.log(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Associado."
            });
        });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? {
        name: {
            [Op.like]: `%${name}%`
        }
    } : null;

    Associado.findAll({ where: condition, include: [Address] })
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

    Associado.findOne({ where: { id: id }, include: [Address] })
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

    Associado.update(req.body, {
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

    Associado.destroy({
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