import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const Rates = ({name,rate,title,cont}) => {
  return (
    <div className='text-center bg-[#F7F7F7] py-8 px-4 border-2 border-[#CE4642] rounded-lg'>
              <div className=' flex justify-center items-center text-center'>
                <Box
                  sx={{
                    width: 400,
                  }}
                >
                    <Rating
                      name="text-feedback"
                      value={rate}
                      readOnly
                      size = "large"
                      precision={1}
                      emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                </Box>
          </div>
      <div className='text-2xl'>{title}</div>
      <div className='text-md text-center'>{cont}</div>
      <div className='text-sm text-[#CE4642] py-4'>{name}</div>
    </div>
  );
}

export default Rates;
