import _ from 'lodash'

export default function solution(content){
  // BEGIN
  const list = content.trim().split('\n').slice(1);
  const data = list.map(el=>el.split(','));

  console.log(`Count: ${data.length}`);

  const cities = data.map(el=>el[7])
  console.log(`Cities: ${_.uniq(cities.sort()).join(', ')}`);

  const humidities = data.map(el=>el[3])
  console.log(`Humidity: Min: ${Math.min(...humidities)}, Max: ${Math.max(...humidities)}`);
  
  const temperature = data.map(el=>el[1])
  const maxtemp = Math.max(...temperature)
  const indexOfhottestCity = temperature.indexOf(String(maxtemp))
  console.log(`HottestDay: ${data[indexOfhottestCity][0]} ${data[indexOfhottestCity][7]}`);
  
  const uniques = _.uniq(cities)
  const temp = uniques.map((city) => [])
  
  for (let i = 0; i < uniques.length; i++) {
    for (let j = 0; j < data.length; j++) {
      if (data[j].includes(uniques[i])) {
        temp[i].push(data[j][1])
      }
    }
  }

  const average = temp.map((arr) => arr.map(el => Number(el)).reduce((acc, el) => acc + el))
  const hottestCity = uniques[average.indexOf(Math.max(...average))]

  console.log(`HottestCity: ${hottestCity}`);
  // END

}