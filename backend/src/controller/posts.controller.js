const database = require('../config/database');

exports.createPost = async (req, res) => {
	const { title, content } = req.body;

	try {
		const { rows } = await database.query(
			"INSERT INTO posts (title, content) VALUES ($1, $2)",
			[title, content]);

		res.status(201).send({
			message: 'Post added successfully!',
			body: {
				post: { title, content }
			},
		});

	} catch (error) {
		console.log('Something went wrong', error);
	}
};

exports.listPosts = async (req, res) => {
	try {
		const response = await database.query(
			"SELECT * FROM posts ORDER BY title ASC"
		)
		res.status(200).send(response.rows);
	} catch (error) {
		console.log('Something went wrong', error);
	}
}

exports.findPostsById = async (req, res) => {
	const postId = parseInt(req.params.id);

	try {
		const response = await database.query(
			"SELECT * FROM posts WHERE id = $1", [postId]
		)
		res.status(200).send(response.rows);
	} catch (error) {
		console.log('Something went wrong', error);
	}
};

exports.updatePostById = async (req, res) => {
	const postId = parseInt(req.params.id);
	const { title, content } = req.body;
	try {
		const response = await database.query(
			"UPDATE FROM posts SET title = $1, content = $2 WHERE id = $3", [title, content, postId]
		)
		res.status(200).send({ message: 'successfully' });
	} catch (error) {
		console.log('Something went wrong', error);
	}
};

exports.deletePostById = async (req, res) => {
	const postId = parseInt(req.params.id);
	try {
		const response = await database.query(
			"UPDATE posts SET deleted_at = now() WHERE id = $1", [postId]
		)
		res.status(200).send({ message: 'Post deleted successfully!', postId });
	} catch (error) {
		console.log('Something went wrong', error);
	}
};

