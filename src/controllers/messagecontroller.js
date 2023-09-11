exports.create = async (req, res) => {
  res.status(200).json({ status: "success", data: "Create Message" });
};

exports.read = async (req, res) => {
  res.status(200).json({ status: "success", data: "Read Message" });
};

exports.delete = async (req, res) => {
  res.status(200).json({ status: "success", data: "Delete Message" });
};

exports.update = async (req, res) => {
  res.status(200).json({ status: "success", data: "Update Message" });
};
