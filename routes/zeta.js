const { default: axios } = require("axios");
const express = require("express");
const router = express.Router();
const {
  createAccountHolder,
  assignBundleToAccountHolder,
  transferMoney,
} = require("../axios/index");

router.post("/applications/newIndividual", (req, res) => {
  createAccountHolder(req.body)
    .then(function (response) {
      // handle success
      res.json(response.data).status(200);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      res
        .json({
          message: error.message,
        })
        .status(400);
    });
});

router.post("/getAccountID", (req, res) => {
  assignBundleToAccountHolder(req.body)
    .then(function (response) {
      // handle success
      res.json(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      res.json(error).status(400);
    });
});

router.post("/transfer", (req, res) => {
  transferMoney(req.body)
    .then(function (response) {
      // handle success
      console.log(response);
      res.json(response.data);
    })
    .catch(function (error) {
      // handle error
      res.json(error);
    });
});

module.exports = router;
