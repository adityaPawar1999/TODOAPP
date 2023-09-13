const taskmodel = require("../models/taskmodel")



module.exports.getTasks = async (req, res) => {
  const tasks = await taskmodel.find()
  res.send(tasks);
};



module.exports.saveTask = async (req, res) => {
  const { task } = req.body
  taskmodel.create({ task }). 
  then((data) => {
    console.log("save")
    res.status(201).send(data)
  }).catch((err) => {
    console.log(err)
    res.send({ error: err, msg: "something went wrong" })
  })
};


module.exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { task } = req.body;
  taskmodel.findByIdAndUpdate(id, { task })
    .then(() => res.send("updated sucessfuly"))
    .catch((err) => {
      console.log(err)
      res.send({ error: err, msg: "something went wrong" })
    })
}

module.exports.deleteTask = async (req, res) => {
  const { id } = req.params
  taskmodel.findByIdAndDelete(id)
    .then(() => res.send("delete sucessfuly"))
    .catch((err) => {
      console.log(err)
      res.send({ error: err, msg: "something went wrong" })
    })
};
