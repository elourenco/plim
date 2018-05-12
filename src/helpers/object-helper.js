const checkProperties = (obj) => {
  let isEmpty = false
  for (var key in obj) {
    if (obj[key] !== null && obj[key] !== "") {
      isEmpty = true;
    }
  }
  return isEmpty;
}

export {
  checkProperties
}