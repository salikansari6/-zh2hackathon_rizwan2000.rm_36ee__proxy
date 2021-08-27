const AxiosInstance = require("./instance");

module.exports = {
  // Make account holder for every user
  createAccountHolder(payload) {
    return AxiosInstance.post("/applications/newIndividual", payload);
  },

  // Assign a bundle to every account holder
  // Will return accountID
  assignBundleToAccountHolder(payload) {
    return AxiosInstance.post(
      `/bundles/${process.env.bundleId}/issueBundle`,
      payload
    );
  },

  // Account To Account Transfer
  transferMoney(payload) {
    return AxiosInstance.post("/transfers", payload);
  },
  getBalance(accountID) {
    return AxiosInstance.get(`/accounts/${accountID}/balance`);
  },
  // For passing the money from us (middleman) to the provider
};
