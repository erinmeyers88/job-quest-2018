import {ObjectID} from 'mongodb';

export default function (app, db) {

  app.get('/', (req, res) => {
    db.collection('jokes').find({}).toArray((err, returnedJokes) => {
      if (err) {
        res.send('An error has occurred.');
      } else {
        res.send(returnedJokes);
      }
    });
  });

  app.post('/', (req, res) => {
    const joke = {joke: req.body.joke};
    db.collection('jokes').insert(joke, (err, postedJoke) => {
      if (err) {
        console.log('err', err);
        res.send({'error': 'An error has occurred.'});
      } else {
        res.send(postedJoke.ops[0]);
      }
    });
  });

  app.get('/:id', (req, res) => {
    const id = req.params.id;
    const jokeID = {'_id': new ObjectID(id)};
    db.collection('jokes').findOne(jokeID, (err, returnedJoke) => {
      if (err) {
        res.send('An error has occurred.');
      } else {
        res.send(returnedJoke);
      }
    });
  });

  app.put('/:id', (req, res) => {
    const id = req.params.id;
    const jokeID = {'_id': new ObjectID(id)};
    const updatedJoke = {joke: req.body.joke};
    db.collection('jokes').findAndModify(jokeID, [], updatedJoke, {new: true}, (err, returnedJoke) => {
      if (err) {
        res.send('An error has occurred.');
      } else {
        res.send(returnedJoke.value);
      }
    });
  });

  app.delete('/:id', (req, res) => {
    const id = req.params.id;
    const jokeID = {'_id': new ObjectID(id)};
    db.collection('jokes').remove(jokeID, (err, deletedJoke) => {
      if (err) {
        res.send('An error has occurred.')
      } else {
        res.send('Joke ' + id + ' successfully deleted.');
      }
    })
  });

  app.post('/:id/like', (req, res) => {

    const id = req.params.id;
    const jokeID = {'_id': new ObjectID(id)};
    const userAddress = req.connection.remoteAddress;
    const like = {user: userAddress, joke: jokeID};

    db.collection('likes').findOne(like, (err, alreadyLikedJoke) => {
      //Check if the user has already liked the joke
      if (alreadyLikedJoke) {
        res.send('You have already liked the joke ' + alreadyLikedJoke.joke._id)
      } else {
        //If the user previously disliked the joke, remove the dislike
        db.collection('dislikes').remove(like, (err, dislikedJoke) => {
          if (err) {
            res.send('An error has occurred.')
          } else {
            //Add a like for this user and joke
            db.collection('likes').insert(like, (err, likedJoke) => {
              if (err) {
                res.send('An error has occurred.')
              } else {
                res.send(likedJoke.ops[0]);
              }
            });
          }
        });
      }
    });

  });

  app.post('/:id/dislike', (req, res) => {
    const id = req.params.id;
    const jokeID = {'_id': new ObjectID(id)};
    const userAddress = req.connection.remoteAddress;
    const dislike = {user: userAddress, joke: jokeID};

    db.collection('dislikes').findOne(dislike, (err, alreadyDislikedJoke) => {
      //Check if the user has already disliked the joke
      if (alreadyDislikedJoke) {
        res.send('You have already disliked the joke ' + alreadyDislikedJoke.joke._id)
      } else {
        //If the user previously liked the joke, remove the like
        db.collection('likes').remove(dislike, (err, likedJoke) => {
          if (err) {
            res.send('An error has occurred.')
          } else {
            //Add a dislike for this user and joke
            db.collection('dislikes').insert(dislike, (err, dislikedJoke) => {
              if (err) {
                res.send('An error has occurred.')
              } else {
                res.send(dislikedJoke.ops[0]);
              }
            });
          }
        });
      }
    });

  });

};