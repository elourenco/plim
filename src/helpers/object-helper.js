const hasIsNullOrEmpty = (obj) => {
  let values = Object.values(obj);
  return values.includes(null) || values.includes('');
}

export {
  hasIsNullOrEmpty
}