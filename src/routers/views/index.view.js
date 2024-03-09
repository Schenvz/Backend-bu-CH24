import CustomRouter from "../CustomRouter.js";

export default class ViewsRouter extends CustomRouter {
  init() {
    this.read("/", ["PUBLIC"], async (req, res, next) => {
      try {
        return res.render("index", {
          title: "Index",
        });
      } catch (error) {
        next(error);
      }
    });
  }
}