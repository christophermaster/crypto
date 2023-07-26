import  Joi from 'joi';

const querySchema = Joi.object({
    crypto: Joi.string().pattern(/^[a-zA-Z-]+$/).allow(''),
});

export default querySchema;