import React from 'react';
import { Grid, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Header from '../../components/header/header';

const Home = () => {
  return (
    <>
      <Header />
      <Grid
        container
        sx={{
          height: '100vh',
          backgroundImage: 'url(/src/assets/images/BackgroundHome.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Grid item xs={12} md={8} lg={6} sx={{ textAlign: 'center', marginTop: '20px' }}>
          <Box sx={{ margin: '40px' }}>
            <img style={{ maxWidth: '100%', height: 'auto'}} src="/src/assets/images/DeltaHome.png" alt="Delta Grupo"/>
          </Box>

          <Box sx={{ display: 'flex', gap:'20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#00C1B4',
                color: '#fff',
                padding: '15px 40px',
                borderRadius: '50px',
                fontSize: '16px',
                fontWeight: 'semibold',
                textTransform: 'none',
              }}
              endIcon={<SearchIcon />}
              component={Link}
              to="/search"
            >
              Busca por produto
            </Button>

            <Button
              variant="contained"
              sx={{
                backgroundColor: '#00C1B4',
                color: '#fff',
                padding: '15px 40px',
                borderRadius: '50px',
                fontSize: '16px',
                fontWeight: 'semibold',
                textTransform: 'none',
              }}
              endIcon={<ArrowForwardIcon />}
              component={Link}
              to="/contact"
            >
              Fale com a gente
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
