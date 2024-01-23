const Comment = require("../models/Comment")


// Comments Post API

const NewComment = async (req, res) => {
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