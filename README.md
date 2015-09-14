# Project Paw
TODO: Write Project Paw desription

## Api Routing Layout
``` ruby
/api  
├── /users
│   ├── GET: Return all users
│   ├── POST: Add a new user
│   └── /:userId
│       ├── GET: Return user with id userId
│       └── POST: Update the user information of user with id userId
└── /posts
    ├── GET: Return all posts
    ├── POST: Add a new post
    └── /:postId
        ├── GET: Return post with id postId
        ├── POST: Update post with id postId
        └── /comments
            ├── GET: Return comments on post with id postId
            └── POST: Add a new comment to post with id postId
```
