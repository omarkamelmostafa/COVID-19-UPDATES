import React from 'react';
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';
import style from './App.module.css';
import img from './img/image.png';

export class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    // console.log(data);
    this.setState({ data: fetchedData });
  };

  handleCountryChange = 
    async (country) => {
      // console.log(country);
      const fetchedData = await fetchData(country);
      this.setState({ data: fetchedData, country: country });

    }
  render() {
    const { data, country } = this.state;
    return (
      <div className={style.container}>
        <img src={img} alt='COVID-19' className={style.image} />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data}  country={country}/>
      </div>
    )
  }
}
