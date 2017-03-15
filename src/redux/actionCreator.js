/**
 * Created by leglars on 2017/3/15.
 */
export function increment(index) {
    return {
        type: "INCREMENT_LIKES",
        index
    }
}

// add comment
export function addComment(postId, author, comment) {
    return {
        type: "ADD_COMMENT",
        postId,
        author,
        comment
    }
}

// remove comment
export function removeComment(postId, index) {
    return {
        type: "REMOVE_COMMENT",
        postId,
        index
    }
}