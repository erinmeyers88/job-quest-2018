# TakeMeTour's Job Quest 2018 Edition

Thank you for your interest in working at TakeMeTour. First, we would like to take a simple test on your coding skill.

Please fork this repo and work on the test. After finishing the test, please send your repo to WantToWork@takemetour.com (Subject: JavaScript Engineer Application).

The quest has 2 major parts: **Front-end** and **Back-end**. If you interesting on which part you can work on the test only that part. But you can do both. (Or in case you want to apply as **Full-stack Engineer** you should done both. Obviously.)

Also in both part has some question needed to be answer. So don't forget to done that. Answer can be both in Thai or English.

## Front-End

You are going to make a web application which allow users to get some joke from **Chuck Norris**.

> Chuck Norris once ordered a Big Mac at Burger King, and got one.

In case you don't know who the heck is Chuck Norris. See his statement.

![](https://blazepress.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_620/MTI4OTk1Mjg4MDE3OTEzODY2/18.webp)

(Sorry. Please just google it)

### Features
- Users can get a joke from [Chuck Norris API](http://www.icndb.com/api/)
- Users has options to change number of result jokes, user's first name and last name
- How to display the result is up to you.

### Technical description
- Using data from [REST API](http://www.icndb.com/api/)
- Any tools & framework is allowed.
- If you are using tools & framework which is same as our tech stack (React, Redux, styled-components etc.) will be a plus.
- Any extra feature will be a plus.

### Front-end Questions

1. Please explain a situation that using Redux to manage application state is more helpful than original React's state.

Managing application state with Redux is great when you have multiple components that want to access the same state.  It makes it easy for components to receive state straight from the store rather than having to pass state down many levels from parent components to child components.

2. Why do we need "Server-Side Rendering". Please explain.

Server-side rendering enables a faster initial render of the app.  It also makes it easier for search engines to index the app.

3. Explain the differences of `null` and `undefined`

Null means the variable has an empty value. Undefined means the variable has not been declared or it has not been assigned a value.

4. Tell us the benefit of using ESLint.

ESLint helps to ensure a common style of coding between multiple developers working on a project.

## Back-End

You are going to made a simple **Thai's joke API**. And this API is follow to REST API pattern.

Thai's joke API can allow user to explore, add, delete, like or dislike Thai's joke.

### Endpoints
- `GET /` Get all jokes.
- `POST /` Add new joke.
- `GET /:id` Get joke by id.
- `DELETE /:id` Delete joke. (In case you hate it)
- `POST /:id/like` Like a joke. (Because we don't have authentication system yet. Like spaming is fine here.)
- `POST /:id/dislike` Dislike a joke. (Same as above. Dislike spaming is fine here.)

### Technical description
- All data must store to the database. Any database is fine. But we prefer MongoDB.
- Back-end code must written in Node.js. Any library or helper tools is up to you.

### Bonus
- If you can make like/dislike system can't be spammed (like or dislike action only happen once for each joke respect to user). We will give you a bonus on that.
- If you deploy this API publicly to anywhere with some **GOOD Thai's joke** to get. We will give you a bonus on that as well. (Deploy to where and how is up to you. But don't forget to send us your work.)

### Back-end Questions

1. Explain a benefit gain from using JavaScript to implements back-end API server.

One benefit is that developers working on the full stack need to be familiar with only one language.  It is also faster and more flexible than other languages/platforms.

2. Explain what is a GraphQL?

GraphQL is an alternative to REST API architecture.  It is a query language that allows the front end to request the exact structure of the data it needs.

3. If you have a task to convert existing back-end API which follow to REST API pattern to GraphQL. Which approach you will make?

All of the data would need to be matched to a GraphQL type defined with a schema.  The GET, POST, PUT, and DELETE endpoints would need to be converted to either queries or mutations.

