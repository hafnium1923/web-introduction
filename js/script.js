function AlertCount() {
  const query = `input[name="movie"]:checked`;
  const checkedElements = document.querySelectorAll(query);

  const name = document.getElementById("nickName").value;
  const checkedElementsCount = checkedElements.length;
      
      
  alert(`${name}님 저와 취향이 ${checkedElements.length}개 같으시네요!`);
}