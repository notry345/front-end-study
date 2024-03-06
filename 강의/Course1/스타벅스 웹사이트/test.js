console.log('이건 출력되나 보자')

const els = document.querySelectorAll('div')
els.forEach(el => {
  console.log(el.dataset.fruitName)
})