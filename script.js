//change theme//
const themeChange = document.getElementById('theme')
const rootElement = document.documentElement //pega o elemnto root do css

const lightTheme = {
  '--background-color': 'lightcoral',
  '--title-color': 'DimGrey',
  '--header-color': 'Gainsboro',
  '--text-color': '#000000',
  '--container-color': '#fff',
} //cores do tema claro

const darkTheme = {
  '--background-color': '#282937',
   '--title-color': '#FFFFFF',
   '--header-color': '#000000',
   '--text-color': '#fff',
   '--container-color': '#535151'
} //cores do tema escuro

themeChange.addEventListener('change', function () {
  const isChecked = themeChange.checked
  if (isChecked) {
    changeTheme(darkTheme)
  } else {
    changeTheme(lightTheme)
  }
}) //checa se a opção "mudar tema" está selecionada, se estiver, então ele muda o tema para escuro.

function changeTheme (theme) {
  for(let prop in theme) {
    changeProperty(prop, theme[prop])
  }
}

function changeProperty (property, value) {
  rootElement.style.setProperty(property, value)
}



//calculate//
function calculateTip(event) {
  event.preventDefault(); //Evento que não deixa  a página recarregar depois de um submit

  let bill = document.getElementById('bill').value;
  let serviceQual = document.getElementById('serviceQual').value;
  let people = document.getElementById('people').value;

  if (bill == '' | serviceQual == 0) {
    alert('Preencha os valores')
    return;
  }

  if (people == '' | people <= 1) {
    people = 1;
    document.getElementById('each').style.display = 'none'
  } else {
    document.getElementById('each').style.display = 'block'
  }

  let total = (bill * serviceQual) / people;
  total = total.toFixed(2);
  document.getElementById('tip').innerHTML = total;
  document.getElementById('totalTip').style.display = "block"

}

document.getElementById('totalTip').style.display = "none"
document.getElementById('each').style.display = "none"

document.getElementById('tipsForm').addEventListener('submit', calculateTip)

const year = document.getElementById('current-year')

year.innerHTML = new Date().getFullYear()

