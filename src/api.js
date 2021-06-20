import { axios } from "./utils/axios";

export const getSubscriptions = () =>
  axios.get("/subscriptions").then((res) => res.data);

export const getSubscription = (subscriptionId) =>
  axios.get(`/subscriptions/${subscriptionId}`).then((res) => res.data);

export const getPayments = (userId = 1) =>
  axios.get("/payments", { params: { userId } }).then((res) => res.data);
