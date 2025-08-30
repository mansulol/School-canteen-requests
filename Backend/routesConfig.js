const API_VERSION = "1.0.0";

const routes = {
  "/api/admins": require("./routes/admin.routes"),
  "/view/admin": require("./routes/admin.views.routes"),
  "/api/categories": require("./routes/categories.routes"),
  "/api/coffeshops": require("./routes/coffeShop.routes"),
  "/view/coffeshop": require("./routes/coffeShopViews.routes"),
  "/api/courses": require("./routes/course.routes"),
  "/api/orders": require("./routes/order.routes"),
  "/api/orderlines": require("./routes/orderLine.routes"),
  "/api/products": require("./routes/product.routes"),
  "/view/product": require("./routes/productViews.routes"),
  "/api/schools": require("./routes/school.routes"),
  "/api/site": require("./routes/site.routes"),
  "/api/students": require("./routes/student.routes"),
  "/view/students": require("./routes/student.views.routes"),
  "/api/wallets": require("./routes/wallet.routes"),
  "/api/workers": require("./routes/worker.routes"),
  "/view/worker": require("./routes/worker.views.routes"),
};

module.exports = routes;
