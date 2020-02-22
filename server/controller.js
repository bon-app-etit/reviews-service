const db = require('../database/index.js');

module.exports = {
  getReviews: (req, res) => {
    const { id } = req.params;
    db.readAllReviews(id, (err, reviews) => {
      if (err) {
        res.status(500).end();
      } else {
        res.send(reviews);
      }
    });
  },
  postReview: (req, res) => {
    db.addReview(req, (err, results) => {
      if (err) {
        console.log('controller error: postReview');
        res.status(500);
      } else {
        res.status(201).end();
      }
    });
  },
  // putReview: (req, res) => {
  //   const { id } = req.params;
  //   db.updateReview(id, req.body, (err, results) => {
  //     if (err) {
  //       console.log('controller error: putReview');
  //       res.status(500);
  //     } else {
  //       res.status(201);
  //     }
  //   });
  // },
  // deleteReview: (req, res) => {
  //   const { id } = req.params;
  //   db.deleteReview(id, (err, results) => {
  //     if (err) {
  //       console.log('controller error: deleteReview');
  //       res.status(500);
  //     } else {
  //       res.status(201);
  //     }
  //   });
  // },
  // getUser: (req, res) => {
  //   const { id } = req.params;
  //   db.readUser(id, (err, user) => {
  //     if (err) {
  //       console.log('controller error: getUser');
  //       res.status(500).end();
  //     } else {
  //       res.send(user);
  //     }
  //   });
  // },
  // postUser: (req, res) => {
  //   db.createUser(req.body, (err, results) => {
  //     if (err) {
  //       console.log('controller error: postUser');
  //       res.status(500);
  //     } else {
  //       res.status(201);
  //     }
  //   });
  // },
  patchUser: (req, res) => {
    db.updateUser(req, (err, results) => {
      if (err) {
        console.log('controller error: putUser');
        res.status(500);
      } else {
        res.status(201).end();
      }
    });
  },
  // deleteUser: (req, res) => {
  //   const { id } = req.params;
  //   db.deleteUser(id, (err, results) => {
  //     if (err) {
  //       console.log('controller error: deleteUser');
  //       res.status(500);
  //     } else {
  //       res.status(201);
  //     }
  //   });
  // },
};
