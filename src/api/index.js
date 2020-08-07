import { useEffect, useState } from 'react';
import axios from 'axios';
import style from './../App.module.css';

const apiURL = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
	let changeableURL;
	if(country) changeableURL = `${apiURL}/countries/${country}`;
	else changeableURL = apiURL;

	try {
		const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableURL);
		// const { confirmed, recovered, deaths, lastUpdate } = data;
		const modifiedDate = { confirmed, recovered, deaths, lastUpdate };
		return modifiedDate;
	} catch (error) {
		if (error) throw error
	}
}

export const FetchDailyData =
	async () => {
		try {
			const { data } = await axios.get(`${apiURL}/daily`);
			return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
		} catch (error) {
			if (error) throw error;
		}
	};


export const Countries =
	async () => {
		try {
			const { data: { countries } } = await axios.get(`${apiURL}/countries`);
			return countries.map((country) => country.name );
			// console.log('Data', data);
			// console.log('Data Countries', data.countries);
		} catch (error) {
			if (error) throw error;
		}
	};

