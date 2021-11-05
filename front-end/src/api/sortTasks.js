const sortTasks = (setData, data, setRefresh, refresh, key) => {
  setData(data.sort((a, b) => a[key].localeCompare(b[key]))); //codigo de referencia https://pt.stackoverflow.com/questions/445795/como-funciona-o-m%C3%A9todo-localecompare
  setRefresh(!refresh);
};

export default sortTasks;
