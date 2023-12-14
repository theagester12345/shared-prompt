import {Schema, model, models} from 'moongoose';

const PromptSchema = new Schema({
     creator : {
        type: Schema.Types.ObjectId,
        ref: 'User',
     },
     prompt:{
        type: String,
        required : [true, 'Prompt is required']
     },
     tag:{
        type: String,
        required: [true, 'Tag is required']
     }
});

const Prompt =  model.Prompt || model('pormpt',PromptSchema);

export default Prompt;