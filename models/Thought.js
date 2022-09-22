const {Schema, model} = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        maxLength: 280
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    username: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    reactions:[reactionSchema],
},
{
    toJSON: {
        virtuals: true,
        getters: true
    }
});



const Thought = model('thought', thoughtSchema);
module.exports = Thought;