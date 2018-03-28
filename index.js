function getFirstSelector(selector) {
  var firstElement = document.querySelector(selector);
  return firstElement;
}

function nestedTarget() {
  var target = document.querySelector('div#nested .target');
  return target;
}

function increaseRankBy(n) {
  var list = document.querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + n;
  }
  return list;
}

function deepestChild() {
  var grandList = document.querySelectorAll('div#grand-node div');
  var deepest = grandList[grandList.length - 1];
  return deepest;
}
