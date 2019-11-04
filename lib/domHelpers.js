function GetAllChecked(boxes) {
  let boolean = false;
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].checked) {
      boolean = true;
      continue
    } else {
      boolean = false
      break
    }
  }
  return boolean
}

function ToggleChildren(div, start) {
  div.style.height = div.scrollHeight + "px";
  console.log(div)
  console.log(div.scrollHeight, div.style.height)
  if (div.scrollHeight > 50) {
    div.style.height = "40px";
    setTimeout(function() {
      var children = div.children;
      if (children.length > 1 && children[start].style.display === "none") {
        for (var i = start; i < children.length; i++) {
          if (!children[i].dataset.hidden) children[i].style.display = "block"
        }
      }else{
        for (var i = start; i < children.length; i++) {
          children[i].style.display = "none"
        }
      }
      div.style.height = "auto";
    }, 400)
  }else{
    var children = div.children;
    if (children.length > 1 && children[start].style.display === "none") {
      for (var i = start; i < children.length; i++) {
        if (!children[i].dataset.hidden) children[i].style.display = "block"
      }
    }else{
      for (var i = start; i < children.length; i++) {
        children[i].style.display = "none"
      }
    }
    div.style.height = div.scrollHeight + "px";
    setTimeout(function() {
      div.style.height = "auto";
    }, 400)
  }
}

export {
  ToggleChildren,
  GetAllChecked
}