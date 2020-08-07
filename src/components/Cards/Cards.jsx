import React from 'react';
import { Grid, Typography, CardContent, Card } from '@material-ui/core';
import Countup from 'react-countup';
import cx from 'classnames';
import CircularIndeterminate from './Spinner.js'
import style from './Cards.module.css';

export const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
	// console.log('cards props: ', confirmed, recovered, deaths, lastUpdate);
	if (!confirmed) {
		return CircularIndeterminate();
	}
	return (

		<div className='style.container'>
			<Grid container spacing={3} justify='center'>
				<Grid item component={Card} xs={12} md={4} className={cx(style.card, style.infected)}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>Infected</Typography>
						<Typography variant="h5">
							<Countup start={0} end={confirmed.value} duration={3.5} separator="," />
						</Typography>
						<Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
						<Typography variant="body2">Number of active cases of covid-19</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card} xs={12} md={3} className={cx(style.card, style.recovered)}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>Recovered</Typography>
						<Typography variant="h5">
							<Countup start={0} end={recovered.value} duration={3.5} separator="," />
						</Typography>
						<Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
						<Typography variant="body2">Number of recoveries from covid-19</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card} xs={12} md={4} className={cx(style.card, style.deaths)}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>Deaths</Typography>
						<Typography variant="h5">
							<Countup start={0} end={deaths.value} duration={3.5} separator="," />
						</Typography>
						<Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
						<Typography variant="body2">Number of deaths caused by covid-19</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</div>

	)
}
