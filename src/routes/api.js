const express = require("express");
const blogController = require("../controllers/blogcontroller");
const commentController = require("../controllers/commentcontroller");
const messageController = require("../controllers/messagecontroller");
const portfolioController = require("../controllers/portfoliocontroller");
const productController = require("../controllers/productcontroller");

const router = express.Router();

router.get("/blogs/create", blogController.create);
router.get("/blogs/read", blogController.read);
router.get("/blogs/delete", blogController.delete);
router.get("/blogs/update", blogController.update);

router.get("/comments/create", commentController.create);
router.get("/comments/read", commentController.read);
router.get("/comments/delete", commentController.delete);
router.get("/comments/update", commentController.update);

router.get("/messages/create", messageController.create);
router.get("/messages/read", messageController.read);
router.get("/messages/delete", messageController.delete);
router.get("/messages/update", messageController.update);

router.get("/portfolios/create", portfolioController.create);
router.get("/portfolios/read", portfolioController.read);
router.get("/portfolios/delete", portfolioController.delete);
router.get("/portfolios/update", portfolioController.update);

router.get("/products/create", productController.create);
router.get("/products/read", productController.read);
router.get("/products/delete", productController.delete);
router.get("/products/update", productController.update);

module.exports = router;
