const Transaction = require("../model/index");
const { Op } = require("sequelize");

const getUserTransactions = async (userId, startTime, endTime) => {
  try {
    if (!userId) throw "INVALID USER ID";
    if (!startTime) throw "INVALID Start time";
    if (!endTime) throw "INVALID End time";
    const userTransactions = await Transaction.findAll({
      where: {
        UserID: userId,
        Timestamp: {
          [Op.gte]: startTime,
          [Op.lte]: endTime,
        },
      },
      raw: true,
    });
    return { userTransactions };
  } catch (error) {
    console.log("FAILED TO GET ALL USER TRANSACTIONS :: ", error.message);
    throw error.message;
  }
};

const getAverageTransactionsAmount = async () => {
  try {
    const allTransactions = await Transaction.findAll({
      attributes: ["Amount"],
      raw: true,
    });
    let sum = 0;
    allTransactions.forEach((element) => {
      sum += element.Amount;
    });
    const averageTransactionAmount = sum / allTransactions.length || 0;
    return { averageTransactionAmount };
  } catch (error) {
    console.log("FAILED TO GET ALL USER TRANSACTIONS :: ", error.message);
    throw error.message;
  }
};
const getTopUser = async (topUserCount) => {
  try {
    let userDetails = await Transaction.findAll({
      attributes: ["UserId"],
      order: [["Amount", "DESC"]],
      limit: topUserCount,
      raw: true,
    });

    return { userDetails };
  } catch (error) {
    console.log("FAILED TO GET ALL USER TRANSACTIONS :: ", error.message);
    throw error.message;
  }
};
const getPotentialUsers = async () => {
  try {
    return {};
  } catch (error) {
    console.log("FAILED TO GET ALL USER TRANSACTIONS :: ", error.message);
    throw error.message;
  }
};
const fetchHighestTransactionHour = async (currentDate) => {
  try {
    if (!currentDate) throw "PLease provide a valid date";

    const transactionHour = await Transaction.findAll({
      attributes: ["UserId"],
      where: {
        Timestamp: {
          [Op.gte]: startTime,
          [Op.lte]: startTime,
        },
      },
      group: [sequelize.fn("date_trunc", "day", sequelize.col("timeStamp"))],
    });
    return { transactionHour };
  } catch (error) {
    console.log("FAILED TO GET ALL USER TRANSACTIONS :: ", error.message);
    throw error.message;
  }
};
const fetchUserLoyalityScore = async () => {
  try {
    return {};
  } catch (error) {
    console.log("FAILED TO GET ALL USER TRANSACTIONS :: ", error.message);
    throw error.message;
  }
};

module.exports = {
  getUserTransactions,
  getAverageTransactionsAmount,
  getTopUser,
  getPotentialUsers,
  fetchHighestTransactionHour,
  fetchUserLoyalityScore,
};
