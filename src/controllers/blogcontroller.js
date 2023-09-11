exports.create = async (req, res) => {
  res.status(200).json({ status: "success", data: "Create Blog" });
};

exports.read = async (req, res) => {
  res.status(200).json({ status: "success", data: "Read Blog" });
};

exports.delete = async (req, res) => {
  res.status(200).json({ status: "success", data: "Delete Blog" });
};

exports.update = async (req, res) => {
  res.status(200).json({ status: "success", data: "Update Blog" });
};
