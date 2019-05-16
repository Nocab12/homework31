const a = params => {
  const {
    str
  } = params;
  console.log(str);
};

a({
  str: 'Some string'
});