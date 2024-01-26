const Comment = require("../models/Comment")


// Comments Post API

const NewComment = async (req, res) => {
    const {  pid, comment } = req.body;
    console.log(req.body)

    try {


        // New Comment
       const data= await Comment.create({
             pid: pid, comment: comment

        })


        // return response
        res.status(200).json({
            status: "success",
            message: "Comment Added successfully",
            data:data

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

// del Comment

const DelComment = async (req, res) => {
    const commentId = req.params.commentId;
    console.log(commentId);

    try {

        await Comment.findByIdAndDelete(commentId)

        return res.status(200).json({

            status: true,
            message: "Comment is Deleted"
        })

    } catch (error) {
        res.status(200).json({
            status: false,
            message: "Something is Wrong"
        })

    }


};


module.exports = {
    NewComment,
    DelComment
}