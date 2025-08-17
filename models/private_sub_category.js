const mongoose = require('mongoose');

const privateSubCategorySchema = mongoose.Schema({
    page_id: {
        type: String,
        required: true,
    },
    categoryId: {
        type: String,
        required: true,
    },
    subCategoryName: {
        type: String,
        required: true,
    },
})

const PrivateSubCategory = mongoose.model('PrivateSubCategory',privateSubCategorySchema);

module.exports = PrivateSubCategory;