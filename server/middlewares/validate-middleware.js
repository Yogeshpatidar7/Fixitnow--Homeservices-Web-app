const validate = (schema) => async (req, res, next) => {
    try {
        var parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        //console.log(parseBody);
        next();
    } catch (err) {
        const status = 422;
        const message = "Fill the input properlly"
        const extraDetails = err.errors[0].message;
        const error = {
            status,
            message,
            extraDetails,
        }
        // console.log(error);
       // res.status(400).json({msg: "validation failed"});
       next(error)
    }
};

 module.exports =validate;


