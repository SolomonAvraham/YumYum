import Joi from "joi";

export const registerValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(3).required(),
    // email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).max(10).required(),
  });
  return schema.validate(data);
};

export const loginValidation = (data) => {
  const schema = Joi.object({
    // email: Joi.string().min(2).required().email(),
    username: Joi.string().required(),
    password: Joi.string().min(6).max(10).required(),
  });
  return schema.validate(data);
};

 
