import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, FormControl, Grid, MenuItem, Select, Tab, TextField, Typography } from '@mui/material'
import React from 'react'
import { Faq } from './TabComponents/Faq';


import { AllTabs } from './TabComponents/AllTabs';
import { CustomizedButton } from '../../../UI/Button/CustomizedButton';
import { PRIMARY_COLOR } from '../../../../utls/colors';
import { Seo } from '../../../Seo/Seo';

export const TabHome = (props: any) => {

  const [value, setValue] = React.useState('0');

  const { fetchedData, overview } = props;


  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  }

  const [age, setAge] = React.useState('1');

  const handleChange2 = (event: any) => {

    setAge(event.target.value);

  };

  return (
    <Grid>

      <Box sx={{ width: '100%' }}>

        <TabContext value={value}>

          <Box sx={{ backgroundColor: "white", display: "flex", justifyContent: "center" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">

              {["OverView", "Symptoms", "Causes", "Complication",
                "Home Remedy", "DietAndNutrition", "Faq"]
                .map((data: any, index: any) =>

                  <Tab label={data} value={JSON.stringify(index)} />

                )}

            </TabList>

          </Box>

          <Box sx={{ display: "flex" }}>

            <Box sx={{ flex: 2 }}>

              <TabPanel value="0">
                <AllTabs fetchedData={overview} />
              </TabPanel>

              <TabPanel value="1">
                <AllTabs fetchedData={fetchedData?.result?.symptoms} />
              </TabPanel>

              <TabPanel value="2">
                <AllTabs fetchedData={fetchedData?.result?.causes} />
              </TabPanel>

              <TabPanel value="3">
                <AllTabs fetchedData={fetchedData?.result?.complications} />
              </TabPanel>

              <TabPanel value="4">
                <AllTabs fetchedData={fetchedData?.result?.home_remadies} />
              </TabPanel>

              <TabPanel value="5">
                <AllTabs fetchedData={fetchedData?.result?.diet_and_nutrition} />
              </TabPanel>

              <TabPanel value="6">
                <Faq fetchedData={fetchedData?.result?.faq} />
              </TabPanel>

              <TabPanel value="7">
                <Seo fetchedData={fetchedData} />
              </TabPanel>

            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", flex: 1, border: "1px solid #239B56", p: 1 }}>

              <Box sx={{ backgroundColor: "white", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>

                <Typography sx={{ fontWeight: "bold", my: 0.4 }}>START FREE CONSULTATION WITH OUR <br /> DOCTORS NOW</Typography>

              </Box>


              <TextField placeholder='Full Name' sx={{ mb: 1 }} />

              <TextField placeholder='Email Id' sx={{ mb: 1 }} />


              <FormControl fullWidth sx={{ mb: 1 }}>

                <Select
                  id="filter-2"
                  value={age}
                  onChange={handleChange2}
                >
                  <MenuItem value={'1'} disabled hidden>Select Your Country</MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>

              <TextField placeholder='Mobile Number' />

              <CustomizedButton bgColor={PRIMARY_COLOR} m="10px">Register Now</CustomizedButton >


              <Box>

                <Typography sx={{ backgroundColor: "dodgerblue", textAlign: "center", p: 1, color: "white" }}>Expert Doctors</Typography>

                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "white" }}>

                  <img width="30%" src="https://i.ibb.co/qnm1Rq1/Picsart-22-08-27-13-35-17-370.jpg" alt="Picsart-22-08-27-13-35-17-370" />

                  <Box>

                    <Typography fontWeight="bold">Dr Barjiz Muhammed</Typography>

                    <Typography>Kozhikode</Typography>

                    <Typography>MBBS</Typography>


                  </Box>

                  <Box>

                    <CustomizedButton bgColor={PRIMARY_COLOR}>Book a Slot</CustomizedButton>

                  </Box>


                </Box>


                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "white" }}>

                  <img width="30%" src="https://i.ibb.co/qnm1Rq1/Picsart-22-08-27-13-35-17-370.jpg" alt="Picsart-22-08-27-13-35-17-370" />

                  <Box>

                    <Typography fontWeight="bold">Dr Barjiz Muhammed</Typography>

                    <Typography>Kozhikode</Typography>

                    <Typography>MBBS</Typography>


                  </Box>

                  <Box>

                    <CustomizedButton bgColor={PRIMARY_COLOR}>Book a Slot</CustomizedButton>

                  </Box>


                </Box>


                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "white" }}>

                  <img width="30%" src="https://i.ibb.co/qnm1Rq1/Picsart-22-08-27-13-35-17-370.jpg" alt="Picsart-22-08-27-13-35-17-370" />

                  <Box>

                    <Typography fontWeight="bold">Dr Barjiz Muhammed</Typography>

                    <Typography>Kozhikode</Typography>

                    <Typography>MBBS</Typography>


                  </Box>

                  <Box>

                    <CustomizedButton bgColor={PRIMARY_COLOR}>Book a Slot</CustomizedButton>

                  </Box>


                </Box>

                <Box sx={{ my: 1 }}>

                  <iframe width="100%" height="300" src="https://www.youtube.com/embed/tgbNymZ7vqY">
                  </iframe>

                </Box>




                <Box>

                  <Typography sx={{ backgroundColor: "dodgerblue", textAlign: "center", p: 1, color: "white" }}>Frequently Asked Questions</Typography>




                  <div className="accordion accordion-flush" id="accordionFlushExample">

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                          Accordion Item #1
                        </button>
                      </h2>
                      <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                      </div>
                    </div>

                  </div>


                </Box>




              </Box>

            </Box>


          </Box>

        </TabContext>

      </Box>




    </Grid >
  )
}


