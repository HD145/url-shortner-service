const express = require("express");
const { handleCreateURL, handleRedirectUrl } = require("../controllers/url");

const router = express.Router();

router.post("/", handleCreateURL);

router.get("/:id", handleRedirectUrl);

module.exports={
    router
}