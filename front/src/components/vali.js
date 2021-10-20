export function validate(elem, patternValue,input) {
    let res = elem.search(patternValue);
    if (res === -1) {
    if(input)input.style.backgroundColor = "red";     
    } else {
      if(input)input.style.backgroundColor = "transparent"     
    }
    return res
}

export function validateLength(elem,count,input) {
    if (elem.length<count) {
      if(input)input.style.backgroundColor = "red";
      return -1
    } else {
      if(input)input.style.backgroundColor = "transparent"   
      return 1  
    }
}

