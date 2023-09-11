exports.create = async (req, res) => {
  res.status(200).json({ status: "success", data: "Create Portfolio" });
};

exports.read = async (req, res) => {
  res.status(200).json({ status: "success", data: "Read Portfolio" });
};

exports.delete = async (req, res) => {
  res.status(200).json({ status: "success", data: "Delete Portfolio" });
};

exports.update = async (req, res) => {
  res.status(200).json({ status: "success", data: "Update Portfolio" });
};
