export const isObjEmpty = obj => {
  return (
    Object.keys(obj).filter(item => obj[item] != '' && obj[item]).length === 0
  )
}
