import * as React from "react";

import { Box, Grid, Typography } from "@material-ui/core";

export default function ParallaxTop() {
	return(
		<>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6}>
					<Box mt={4} mb={2}>
						<Typography align="center" variant="h4">Build your ideal setup now!</Typography>
					</Box>
					<Box mt={4}>
						<Typography align="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod feugiat malesuada.</Typography>
						<Typography align="center">Morbi blandit nisl eu faucibus eleifend. Fusce dapibus facilisis nisl vitae scelerisque.</Typography>
						<Typography align="center"> Suspendisse vitae diam interdum, vehicula tellus eu, posuere massa.</Typography>
					</Box>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Typography align="center">Login / Register</Typography>
				</Grid>
			</Grid>
		</>
	);
}
