
module.exports = {
  getReviews: (req, res) => {
    db.readAllReviews((err, reviews) => {
      if (err) {
        console.log('controller error: getReviews');
        res.status(500).end();
      } else {
        res.send(reviews);
      }
    });
  },
  postReview: (req, res) => {
    db.createReview(req.body, (err, results) => {
      if (err) {
        console.log('controller error: postReview');
        res.status(500);
      } else {
        res.status(201);
      }
    });
  },
  putReview: (req, res) => {
    db.updateReview(req.body, (err, results) => {
      if (err) {
        console.log('controller error: putReview');
        res.status(500);
      } else {
        res.status(201);
      }
    });
  },
  deleteReview: (req, res) => {
    db.deleteReview(req.body, (err, results) => {
      if (err) {
        console.log('controller error: deleteReview');
        res.status(500);
      } else {
        res.status(201);
      }
    });
  },
  getUser: (req, res) => {
    db.readUser((err, user) => {
      if (err) {
        console.log('controller error: getUser');
        res.status(500).end();
      } else {
        res.send(user);
      }
    });
  },
  postUser: (req, res) => {
    db.createUser(req.body, (err, results) => {
      if (err) {
        console.log('controller error: postUser');
        res.status(500);
      } else {
        res.status(201);
      }
    });
  },
  putUser: (req, res) => {
    db.updateUser(req.body, (err, results) => {
      if (err) {
        console.log('controller error: putUser');
        res.status(500);
      } else {
        res.status(201);
      }
    });
  },
  deleteUser: (req, res) => {
    db.deleteUser(req.body, (err, results) => {
      if (err) {
        console.log('controller error: deleteUser');
        res.status(500);
      } else {
        res.status(201);
      }
    });
  },
};
