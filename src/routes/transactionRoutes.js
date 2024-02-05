const express = require("express");
const router = express.Router();

const {
  getUserTransactions , 
  getAverageTransactionsAmount,
  getTopUser,
  getPotentialUsers,
  fetchHighestTransactionHour,
  fetchUserLoyalityScore
} = require('../controller/transactionController');  

router.post("/avg-trans-amt", async (req, res) => {
  try {
    const averageTransactionDetails = await getAverageTransactionsAmount();
    return res.status(200).send({averageTransactionDetails,isSucess: true});
    
  } catch (error) {
    return res.status(400).send({isSucess: false,errorMessage: error.message});
  }
});

router.post("/all-trans", async (req, res) => {
  try {
    const {userId , startTime , endTime} = req.body;
    const userTransactions = await getUserTransactions(userId,startTime,endTime);
    return res.status(200).end({userTransactions,isSucess: true});
    
  } catch (error) {
    return res.status(400).end({isSucess: false,errorMessage: error.message});
  }
});
router.post("/top-users", async (req, res) => {
  try {
    const { topUserCount } = req.body;
    const topUserDetails = await getTopUser(topUserCount);
    return res.status(200).end({topUserDetails,isSucess: true});
    
  } catch (error) {
    return res.status(400).end({isSucess: false,errorMessage: error.message});
  }
});

router.post("/potential-users", async (req, res) => {
  try {
    const potentialUserDetails = await getPotentialUsers();
    return res.status(200).end({potentialUserDetails,isSucess: true});
    
  } catch (error) {
    return res.status(400).end({isSucess: false,errorMessage: error.message});
  }
});

router.post("/hightest-trans-hour", async (req, res) => {
  try {
    const { transactionDate } = req.body;
    const transactionDetails = await fetchHighestTransactionHour(transactionDate);
    return res.status(200).end({transactionDetails,isSucess: true});
    
  } catch (error) {
    return res.status(400).end({isSucess: false,errorMessage: error.message});
  }
});

router.post("/loyalty-score", async (req, res) => {
  try {
    const userLoyalityScore = await fetchUserLoyalityScore();
    return res.status(200).end({userLoyalityScore,isSucess: true});
    
  } catch (error) {
    return res.status(400).end({isSucess: false,errorMessage: error.message});
  }
});

module.exports = router;
