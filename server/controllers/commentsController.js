const { Comment, User } = require('../models');

class CommentsController {


    static async listComments(req, res, next) {
        try {
            const { id: ReportId } = req.params;

            const comments = await Comment.findAll({
                where: { ReportId },
                order: [['createdAt', 'ASC']],
                include: [{ model: User, attributes: ['id', 'name'] }]
            });
            res.status(200).json(comments);
        } catch (err) {
            console.log("ERROR IN LIST COMMENTS", err);
            next(err);
        }
    }

    static async createComment(req, res, next) {
        try {
            const { id: ReportId } = req.params;
            const { content } = req.body;

            const comment = await Comment.create({
                content,
                ReportId,
                UserId: req.user.id
            });
            res.status(201).json(comment);
        } catch (err) {
            console.log("ERROR IN CREATE COMMENT", err);
            next(err);
        }
    }

    static async deleteComment(req, res, next) {
        try {
            const { commentId } = req.params;

            const comment = await Comment.findByPk(commentId);
            if (!comment) {
                throw { name: "NotFound", message: "Comment not found" };
            }

            if (comment.UserId !== req.user.id) {
                throw { name: "Forbidden", message: "You are not authorized to delete this comment" };
            }

            await comment.destroy();
            res.status(200).json({ message: "Comment deleted successfully" });
        } catch (err) {
            console.log("ERROR IN DELETE COMMENT", err);
            next(err);
        }
    }

}

module.exports = CommentsController;