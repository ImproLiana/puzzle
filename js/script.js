const img = document.querySelectorAll('img');
const table = document.querySelectorAll('td')
// const check = document.getElementById('check')
// const check1 = document.querySelector('button')
const div = document.querySelector('div')
const imlist = [];


img.forEach(item => {
  item.style.position = 'absolute';
    imlist.push({
      image: item,
      isMouseDown: false,
      startX: 0,
      startY: 0
    });
});

function done() {
  let a = 0
  let j = 0
  let i = 0
  table.forEach(td => {
    // console.log(td.children)
    if (td.children.length == 1) {
      j += 1
      // console.log ('j', j)
    }})
    if (j == 9){
      table.forEach(td => {
        console.log(td.children, i)
        // console.log(td.children, i)
        // console.log(td.children[i])
            console.log(`${td.children[0].id}`, i,  `img${i+1}`)
            if (`${td.children[0].id}` == `img${i+1}`){
                a += 1
                console.log('a', a)}
            i = i + 1
      })}
 if (a == 9) {  
  return true
 }
}

imlist.forEach(element => {

  function isTouch(DOMRect) {
    const imgRect = element.image.getBoundingClientRect();
    if ((imgRect.x + imgRect.width / 2) > DOMRect.left &&
        (imgRect.x + imgRect.width / 2) < DOMRect.right &&
        (imgRect.y + imgRect.height / 2) > DOMRect.top &&
        (imgRect.y + imgRect.height / 2) < DOMRect.bottom) {
      return true;
    }
    return false;
  }

  element.image.addEventListener('touchstart', (event) => {
    element.isMouseDown = true;
    element.startX = event.pageX - element.image.offsetLeft;
    element.startY = event.pageY - element.image.offsetTop;
    console.log('touch')

    element.image.addEventListener('touchend', () => {
      console.log('touchend')
      element.isMouseDown = false;
      table.forEach(td => {
        const tdRect = td.getBoundingClientRect()
        if (isTouch(tdRect)) {
          if (td.children.length == 0){
            element.image.classList.remove(element.image.id)
            element.image.style.left = tdRect.x + 'px'
            element.image.style.top = tdRect.y + 'px'
            element.image.style.position = 'static'
            td.appendChild(element.image);
          }else{
            // console.log(td.children[0])
            td.children[0].style.left = null
            td.children[0].style.top = null
            td.children[0].style.position = null
            td.children[0].classList.add(td.children[0].id)
            let delet = td.children[0]
            td.children[0].remove()
            div.appendChild(delet)
            element.image.classList.remove(element.image.id)
            element.image.style.left = tdRect.x + 'px'
            element.image.style.top = tdRect.y + 'px'
            element.image.style.position = 'static'
            td.appendChild(element.image)};
          }}
        )
        
      if (done()){
        confirm('Поздравляю вы собрали пазл!')
      }})
      document.addEventListener('touchmove', (event) => {
        if (element.isMouseDown) {
          console.log('touchmove')
          element.image.style.left = event.pageX - element.startX + 'px';
          element.image.style.top = event.pageY - element.startY + 'px';
    
          table.forEach(td => {
            const tdRect = td.getBoundingClientRect()
            // console.log(tdRect);
            if (isTouch(tdRect)) {
              td.style.backgroundColor = 'rgb(201, 174, 255)'
            }
            else{
              td.style.backgroundColor = 'rgb(227, 213, 255)'
            }
          });
        }
      });
  });
  


  element.image.ondragstart = function() {
    return false;
  }
}); 

// check.addEventListener('click', () => {
//   if (done()) {
//     console.log('yes')
//   }else{
//     console.log('no')
//   }
// })
      /*
      // new
      const rect = element.image.getBoundingClientRect();
    
      imlist.forEach(obj => {
        if (element.image != obj.image) {
          const newRect = obj.image.getBoundingClientRect();
          if (rect.left <= newRect.left &&
              rect.right >= newRect.right &&
              rect.top <= newRect.top &&
              rect.bottom >= newRect.bottom) {
            // element.image.style.borderWidth = '10px';
            // element.image.style.borderColor = 'pink';
            console.log('djdjjd')
          } else {
            // element.image.style.borderWidth = '1px';
          }
        }
      });
      //
      */


    //   for (let u = 0; u < td.children.length; u++) {
    //     console.log(`${td.children[u].id}`, u,  `img${u+1}`)
    //     if (td.children[u].id == `img${u+1}`){
    //       a += 1
    //       console.log('a', a)
    //     }
    //   }
