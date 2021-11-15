module.exports = (req, res) => {
  const myHeaders = new Headers()
  myHeaders.append('Accept', 'application/json, text/plain,  /')
  myHeaders.append(
    'Cookie',
    'AWSALB=Z1dgL1jxN7OpAWJuHuZ+1fMswBSARQh7yTiySAr5+iVnS16gZcDlMWltVaIBHtB2YzGyTAzvntlYVlnFcp8KWpHDcJ3DBdyKXQrvdaSPCBo0t7mgz6meEa7IlEff; AWSALBCORS=Z1dgL1jxN7OpAWJuHuZ+1fMswBSARQh7yTiySAr5+iVnS16gZcDlMWltVaIBHtB2YzGyTAzvntlYVlnFcp8KWpHDcJ3DBdyKXQrvdaSPCBo0t7mgz6meEa7IlEff',
  )

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  }
  const resp = null
  resp.req = req

  await fetch(
    'https://api.pivohub.com/public/products?tags[]=the-festival-2019',
    requestOptions,
  )
    .then(response => resp.response = response)
    .then(result => resp.result = result)
    .catch(error => resp.error = error)
  res.status(200).send(`Hello  ${resp}`)
}
