const capitalize = (name) => {
  return !name ? '' : name[0].toUpperCase() + name.slice(1);
};

module.exports = { capitalize };
