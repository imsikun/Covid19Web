const country_name_element = document.querySelector('.country .name')
const total_cases_element = document.querySelector('.total-cases .value')
const new_caess_element = document.querySelector('.total-cases .new-value')
const recovere_cases_element = document.querySelector('.recovered .value')
const new_recovered_element = document.querySelector('.recovered .new-value')
const death_cases_element = document.querySelector('.deaths .value')
const new_death_element = document.querySelector('.deaths .new-value')
// const ctx = document.getElementById('axex_line_chart').getContext('2d')

//App variables
let app_data = [],
  cases_list = [],
  recovered_list = [],
  deaths_list = [],
  dates = []

// Todo: Please check on this thing, as 'country_list' is not imported from other files
//get users country code
let country_code = geoplugin_countryCode()
let user_country
country_list.forEach(country => {
  if (country.code == country_code) {
    user_country = country.name
  }
})

console.log(user_country)
