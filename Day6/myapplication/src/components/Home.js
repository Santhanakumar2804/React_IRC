import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
const Item = styled(Paper)(({ theme }) => ({
  
}));


export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={3}>
        <Container fixed>
        <Box sx={{ background: 'linear-gradient(to left, #2c3e50, #4ca1af)',height:'40vh'}} />
      </Container>
        </Grid>
        <Grid item xs={3}>
        <Container fixed>
        <Box sx={{ background: 'linear-gradient(to left, #e96443, #904e95)',height:'40vh'}} />
      </Container>
        </Grid>
        <Grid item xs={3}>
        <Container fixed>
        <Box sx={{ background: 'linear-gradient(to left, #0b486b, #f56217)',height:'40vh' }} />
      </Container>
        </Grid>
        <Grid item xs={3}>
        <Container fixed>
        <Box sx={{ background: 'linear-gradient(to right, #c31432, #240b36)',height:'40vh'}} />
      </Container>
        </Grid>
      </Grid>
    </Box>
  );
}