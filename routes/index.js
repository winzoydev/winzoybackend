const express = require('express');
const {
  getAllClients,
  deleteClientById,
} = require('../api/clients/getAllClients');

const router = express.Router();

router.route('/clients').get(getAllClients);
router.route('/clients/remove/:id').delete(deleteClientById);

module.exports = router;
