var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
    itemName: {
        type: String,
        required: true
    },
    itemSummary: {
        type: String,
        required: false
    },
    itemImage: {
        type: String,
        required: false
    },
    /**
     * Added by Prathibha for storing the image as binary object in Mongo
     */
    imgData: {
        type: Buffer,
        required: false
    },
    /**
     * Added by Prathibha for storing the image as binary object in Mongo
     */
    price: {
        type: Number,
        required: false
    },
    rating: {
        type: Number,
        required: false
    },
    itemReviews: {
        type: [Schema.Types.ObjectId],
        ref: "ItemReview"
    },
    itemCategory: {
        type: [Schema.Types.ObjectId],
        ref: "ItemCategory"
    },
    itemTag: {
        type: [Schema.Types.ObjectId],
        ref: "ItemTag"
    }
});

var Item = mongoose.model("Item", ItemSchema);

module.exports = Item;