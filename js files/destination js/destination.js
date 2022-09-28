function onClickOfMoon(event){
  event.preventDefault()
  document.getElementById('moon-section').style.display = 'block'
  document.getElementById('moonName').style.textDecoration = 'underline'
  document.getElementById('mars-section').style.display = 'none'
  document.getElementById('europa-section').style.display = 'none'
  document.getElementById('titan-section').style.display = 'none'
}

function onClickOfMars(event){
  event.preventDefault()
  document.getElementById('moon-section').style.display = 'none'
  document.getElementById('mars-section').style.display = 'block'
  document.getElementById('europa-section').style.display = 'none'
  document.getElementById('titan-section').style.display = 'none'
}

function onClickOfEuropa(event){
  event.preventDefault()
  document.getElementById('moon-section').style.display = 'none'
  document.getElementById('mars-section').style.display = 'none'
  document.getElementById('europa-section').style.display = 'block'
  document.getElementById('titan-section').style.display = 'none'
}

function onClickOfTitan(event){
  event.preventDefault()
  document.getElementById('moon-section').style.display = 'none'
  document.getElementById('mars-section').style.display = 'none'
  document.getElementById('europa-section').style.display = 'none'
  document.getElementById('titan-section').style.display = 'block'
}

