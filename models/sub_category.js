const mongoose = require('mongoose');

const subCategorySchema = mongoose.Schema({
    categoryId: {
        type: String,
        required: true,
    },
    subCategoryName: {
        type: String,
        required: true,
    },
})

const SubCategory = mongoose.model('SubCategory',subCategorySchema);

module.exports = SubCategory;