const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const asyncValidate = (values) => {
  return sleep(1000).then(() => {
    // simulate server latency
    if (['foo', 'bar'].includes(values.login)) {
      // eslint-disable-next-line no-throw-literal
      throw { login: 'Login already Exists' }
    }
  })
}

export default asyncValidate