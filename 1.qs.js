const parser = str => {
  const obj = {};
  str.replace(/([^=&]+)=([^=&]+)/g, function() {
    obj[arguments[1]] = arguments[2];
  });
  return obj;
};

const stringify = obj => {
  const arr = [];
  Reflect.ownKeys(obj).forEach(key => {
    arr.push(`${key}=${obj[key]}`);
  });
  return arr.join("&");
};
