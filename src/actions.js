const ADD_COMMENT = 'ADD_COMMENT';

function addComment(text) {
  return {
    type: ADD_COMMENT,
    id: uuid.v4(),
    text: text
  }
}

export ADD_COMMENT;
export addComment;