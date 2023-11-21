const Client = require('../../models/Client');
const db = require('../../utils/db');

const getAllClients = async (req, res) => {
  const { page, sort, data, date, phone, name } = req.query;
  const perPage = parseInt(data) || 10;
  const skip = (parseInt(page) - 1) * perPage;

  const query = {};

  if (date) {
    query.createdAt = { $gte: new Date(date) }; // Filter by createdAt date greater than or equal to the specified date
  }

  if (phone) {
    query.phone = phone; // Filter by phone
  }

  if (name) {
    query.name = { $regex: new RegExp(name, 'i') }; // Filter by name (case-insensitive)
  }

  await db.connect();

  try {
    const resData = await Client.find(query)
      .sort({ createdAt: (sort && parseInt(sort)) || -1 })
      .skip(skip)
      .limit(perPage);
    res.status(200).json(resData);
  } catch (error) {
    res.status(500).json({ message: error.toString() });
  }
};

const deleteClientById = async (req, res) => {
  const clientId = req.params.id;
  //   try {
  //     const clientId = req.params.id; // Assuming the ID is passed as a route parameter

  //     await db.connect();

  //     const deletedClient = await Client.findByIdAndDelete(clientId);

  //     if (!deletedClient) {
  //       return res.status(404).json({ error: 'Client not found' });
  //     }

  //     res
  //       .status(200)
  //       .json({ message: 'Client deleted successfully', deletedClient });
  //   } catch (error) {
  //     console.error('Error deleting client:', error);
  //     res.status(500).json({ error: 'Internal Server Error' });
  //   }
  res.status(200).json({ message: clientId });
  console.log(clientId);
};

module.exports = { getAllClients, deleteClientById };
