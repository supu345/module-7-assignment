exports.create = async (req, res) => {
  res.status(200).json({ status: "success", data: "Create Product" });
};

exports.read = async (req, res) => {
  res.status(200).json({ status: "success", data: "Read Product" });
};

exports.delete = async (req, res) => {
  res.status(200).json({ status: "success", data: "Delete Product" });
};

exports.update = async (req, res) => {
  res.status(200).json({ status: "success", data: "Update Product" });
};
