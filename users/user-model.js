const db = require("../data/config")

function findPostByUserId(id) {
    return db("posts")

    .innerJoin("users", "users.id", "posts.user_id")
    .where("user_id", id)
    .select("posts.id", "posts.contents", "users.username")


}

module.exports = {
    findPostsByUserId,
}