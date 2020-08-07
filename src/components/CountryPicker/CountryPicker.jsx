import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { Countries } from './../../api';
import style from './CountryPicker.module.css';

export const CountryPicker = ({ handleCountryChange }) => {
	const [fetchedCountries, setFetchedCountries] = useState([]);

	useEffect(() => {
		const Fetch =
			async () => {
				const initialCountries = await Countries();
				setFetchedCountries(initialCountries);
				// console.log(`fetchedCountries: ${fetchedCountries}`);
			}
		Fetch();
	}, [setFetchedCountries])

	return (
		<FormControl className={style.formControl}>
			<NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
				<option value=''>ALL OVER THE WORLD</option>
				{
					fetchedCountries.map((country, i) => <option value={country} key={i}>{country}</option>)
				}
			</NativeSelect>
		</FormControl>

	)
}
