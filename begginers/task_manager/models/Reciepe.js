const mongoose = require('mongoose')

const Reciepe = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		trim: true,
		minLength: 3
	},
	description: {
		type: String,
		trim: true,
		default: ''
	},
	ingredients: {
		type: [String],
		required: true,
		validate: {
			validator: function (value) {
				return Array.isArray(value) && value.length > 0
			},
			message: 'At least one ingredient is required'
		}
	},
	instructions: {
		type: String,
		required: true,
		trim: true,
		minLength: 10
	},
	cookingTime: {
		type: Number,
		required: true,
		min: 1
	},
	servings: {
		type: Number,
		default: 1,
		min: 1
	},
	createdBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}
}, { timestamps: true })

const reciepeModel = mongoose.model('Reciepe', Reciepe)

module.exports = { reciepeModel }