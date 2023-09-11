exports.create = async (req, res) => {
  res.status(200).json({ status: "success", data: "Create Comment" });
};

exports.read = async (req, res) => {
  res.status(200).json({ status: "success", data: "Read Comment" });
};

exports.delete = async (req, res) => {
  res.status(200).json({ status: "success", data: "Delete Comment" });
};

exports.update = async (req, res) => {
  res.status(200).json({ status: "success", data: "Update Comment" });
};
