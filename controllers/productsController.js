const showAll = (req, res) => {
  res.send({ "message": "Hello!World" })
}
const create = (req, res) => {
  const { name, sku } = req.body
  res.send(`Product name: ${name} and sku: ${sku}`)
}
const remove = (req, res) => {
  const { id } = req.params
  res.send(`Product with id: ${id} has been deleted`)
}

const update = (req, res) => {
  const { id } = req.params
  res.send(`Product with id: ${id} has been updated`)
}

module.exports = {
  showAll,
  create,
  remove,
  update
}