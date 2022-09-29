function onClickOfMoon(event){
  event.preventDefault()
  document.getElementsByClassName('moon-section').style.display = 'block'
  document.getElementById('moonName').style.borderBottom = '2px solid yellow'
  document.getElementsByClassName('mars-section').style.display = 'none'
  document.getElementById('marsName').style.borderBottom = 'none'
  document.getElementsByClassName('europa-section').style.display = 'none'
  document.getElementById('europaName').style.borderBottom = 'none'
  document.getElementsByClassName('titan-section').style.display = 'none'
  document.getElementById('titanName').style.borderBottom = 'none'
}

function onClickOfMars(event){
  event.preventDefault()
  document.getElementsByClassName('moon-section').style.display = 'none'
  document.getElementById('moonName').style.borderBottom = 'none'
  document.getElementsByClassName('mars-section').style.display = 'block'
  document.getElementById('marsName').style.borderBottom = '2px solid yellow'
  document.getElementsByClassName('europa-section').style.display = 'none'
  document.getElementById('europaName').style.borderBottom = 'none'
  document.getElementsByClassName('titan-section').style.display = 'none'
  document.getElementById('titanName').style.borderBottom = 'none'
}

function onClickOfEuropa(event){
  event.preventDefault()
  document.getElementsByClassName('moon-section').style.display = 'none'
  document.getElementById('moonName').style.borderBottom = 'none'
  document.getElementsByClassName('mars-section').style.display = 'none'
  document.getElementById('marsName').style.borderBottom = 'none'
  document.getElementsByClassName('europa-section').style.display = 'block'
  document.getElementById('europaName').style.borderBottom = '2px solid yellow'
  document.getElementsByClassName('titan-section').style.display = 'none'
  document.getElementById('titanName').style.borderBottom = 'none'
}

function onClickOfTitan(event){
  event.preventDefault()
  document.getElementsByClassName('moon-section').style.display = 'none'
  document.getElementById('moonName').style.borderBottom = 'none'
  document.getElementsByClassName('mars-section').style.display = 'none'
  document.getElementById('marsName').style.borderBottom = 'none'
  document.getElementsByClassName('europa-section').style.display = 'none'
  document.getElementById('europaName').style.borderBottom = 'none'
  document.getElementsByClassName('titan-section').style.display = 'block'
  document.getElementById('titanName').style.borderBottom = '2px solid yellow'
}

