const mongoose = require('mongoose');
const clientSchema = new mongoose.Schema({
nom: {
type: String,
required: true
},
email: {
type: String,
required: true,
},
dateDeNaissance: {
type: Date,
required: true
},
adresse: {
type: String,
required: true
}
});
const Client = mongoose.model('Client', clientSchema);
module.exports = Client;