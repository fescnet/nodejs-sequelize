module.exports = (request, response, next) => {

  response.sendList = (page, lastPage, data, count = 0) => {
    const newData = {
      page,
      lastPage,
      data,
      count
    }
    response.json(newData)
  }

  response.sendItem = (data) => {
    const newData = data
    response.json(newData)
  }

  next()
}