import client from "./client";

const getListings = () => client.get("/categories");

export default getListings;
