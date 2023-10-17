const convertToByteArray = (data) => {
  let byte_array = [];

  for (let i = 0; i < data.length; i++) {
    byte_array.push(data.charCodeAt(i));
  }

  return byte_array
};

const xorWithKey = (data, key) => {
  let out = [];
  data = convertToByteArray(data);
  key = convertToByteArray(key);

  for (let i = 0; i < data.length; i++) {
    out.push(String.fromCharCode(data[i] ^ key[i % key.length]));
  }

  return out.join('');
};


export const decrypt = (base64) => {
  try {
    const encrypted = base64;
    let decrypted = xorWithKey(atob(encrypted), "key");
    return JSON.stringify(JSON.parse(decrypted), null, 2);
  }
  catch (e) {
    alert('Invalid Base64')
    return ''
  }
};

export const encrypt = (json) => {
  try {
    const decrypted = json;
    let encrypted = btoa(xorWithKey(decrypted, "key"));
    return encrypted
  }
  catch (e) {
    alert('Invalid JSON')
    return ''
  }
};
