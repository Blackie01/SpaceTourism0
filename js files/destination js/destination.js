function onClickOfMoon(event){
  event.preventDefault()
  document.getElementById('moon-section').style.display = 'block'
  document.getElementById('moonName').style.borderBottom = '2px solid yellow'
  document.getElementById('hero-image-moon').style.display = 'block'
  document.getElementById('mars-section').style.display = 'none'
  document.getElementById('marsName').style.borderBottom = 'none'
  document.getElementById('hero-image-mars').style.display = 'none'
  document.getElementById('europa-section').style.display = 'none'
  document.getElementById('europaName').style.borderBottom = 'none'
  document.getElementById('hero-image-europa').style.display = 'none'
  document.getElementById('titan-section').style.display = 'none'
  document.getElementById('titanName').style.borderBottom = 'none'
  document.getElementById('hero-image-titan').style.display = 'none'
}

function onClickOfMars(event){
  event.preventDefault()
  document.getElementById('moon-section').style.display = 'none'
  document.getElementById('moonName').style.borderBottom = 'none'
  document.getElementById('hero-image-moon').style.display = 'none'
  document.getElementById('mars-section').style.display = 'block'
  document.getElementById('marsName').style.borderBottom = '2px solid yellow'
  document.getElementById('hero-image-mars').style.display = 'block'
  document.getElementById('europa-section').style.display = 'none'
  document.getElementById('europaName').style.borderBottom = 'none'
  document.getElementById('hero-image-europa').style.display = 'none'
  document.getElementById('titan-section').style.display = 'none'
  document.getElementById('titanName').style.borderBottom = 'none'
  document.getElementById('hero-image-titan').style.display = 'none'
}

function onClickOfEuropa(event){
  event.preventDefault()
  document.getElementById('moon-section').style.display = 'none'
  document.getElementById('moonName').style.borderBottom = 'none'
  document.getElementById('hero-image-moon').style.display = 'none'
  document.getElementById('mars-section').style.display = 'none'
  document.getElementById('marsName').style.borderBottom = 'none'
  document.getElementById('hero-image-mars').style.display = 'none'
  document.getElementById('europa-section').style.display = 'block'
  document.getElementById('europaName').style.borderBottom = '2px solid yellow'
  document.getElementById('hero-image-europa').style.display = 'block'
  document.getElementById('titan-section').style.display = 'none'
  document.getElementById('titanName').style.borderBottom = 'none'
  document.getElementById('hero-image-titan').style.display = 'none'
}

function onClickOfTitan(event){
  event.preventDefault()
  document.getElementById('moon-section').style.display = 'none'
  document.getElementById('moonName').style.borderBottom = 'none'
  document.getElementById('hero-image-moon').style.display = 'none'
  document.getElementById('mars-section').style.display = 'none'
  document.getElementById('marsName').style.borderBottom = 'none'
  document.getElementById('hero-image-mars').style.display = 'none'
  document.getElementById('europa-section').style.display = 'none'
  document.getElementById('europaName').style.borderBottom = 'none'
  document.getElementById('hero-image-europa').style.display = 'none'
  document.getElementById('titan-section').style.display = 'block'
  document.getElementById('titanName').style.borderBottom = '2px solid yellow'
  document.getElementById('hero-image-titan').style.display = 'block'
}

