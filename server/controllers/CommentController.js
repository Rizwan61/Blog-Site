



// Comments Post API

const Comment =  async (req, res) => {
    const { userid, postid, comment, status } = req.body;
    console.log(req.body)

    try {


        // New Comment
        await Comment.create({
            userid: userid, postid: postid, comment: comment, status: status

        })


        // return response
        res.status(201).json({
            status: "success",
            message: "Comment Added successfully",

        })

    } catch (error) {
        if (error.name === 'ValidationError') {
            // Mongoose validation error
            const errors = {};
            for (const field in error.errors) {
                errors[field] = error.errors[field].message;
            }
            res.status(200).json({
                status: false,
                errors: errors
            });
        } else {
            // Other types of errors
            res.status(500).json({ error: 'Internal Server Error' });
        }

    }
}


module.exports ={
    Comment
}