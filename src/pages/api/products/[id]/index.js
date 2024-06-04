import { ProductsModel } from "../../../../backend/models";

export default async function handler(req, res) {
  try {
    const get = await ProductsModel.findByIdAndDelete(req.query.id);

    if (!get) {
      res.status(200).json({
        succcess: false,
        message: "product not found",
      });
    }

    res.status(200).json({
      succcess: true,
      message: "product deleted",
    });    console.log(error);

  } catch (error) {
  }
}
