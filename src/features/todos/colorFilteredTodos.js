const colorFilteredListItems = (colorFilter, todos) => {
  let temp = [];
  colorFilter.forEach(e => {
    todos.forEach(todo => {
      if (todo.color == e) {
        temp.push(todo);
      }
    });
  });
  return temp;
};

export default colorFilteredListItems;
