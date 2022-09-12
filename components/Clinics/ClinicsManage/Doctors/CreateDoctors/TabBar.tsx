import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { CustomizedButton } from '../../../../UI/Button/CustomizedButton';

export const TabBar = () => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };

    const [awards, setAwards]: any = React.useState(false);


    const aboutUs = [
        {
            create: "Create About Us",
            // firstpage: <AboutCompany />,
            // secondpage: <CreateAboutCompany />,
        },
        {
            create: "Our Team",
            // firstpage: <OurTeam />,
            // secondpage: <CreateTeam />,
        },
        {
            create: "Investors",
            // firstpage: <Investors />,
            // secondpage: <CreateInvestors />,
        },
        {
            create: "Create Awards ",
            // firstpage: <Awards />,
            // secondpage: <CreateAwards />,
        }
    ]

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        {["Id Verfication", "Specialization", "Practice", "Lifestyle",
                            "Appoinments", "EMR", "Complaints", "OB/GYN", "Medical Info", "CRM"].map((data: any, index: any) =>

                                <Tab label={data} value={JSON.stringify(index)} />

                            )}

                    </TabList>

                </Box>

                {aboutUs.map((data: any, index: any) =>

                    <TabPanel value={JSON.stringify(index)}>

                        {awards ? data.secondpage :

                            <>

                                <CustomizedButton bgColor="dodgerblue" onClick={() => setAwards(true)}>{data.create}</CustomizedButton>

                                {data.firstpage}

                            </>
                        }

                    </TabPanel>

                )}


            </TabContext>

        </Box>
    );
}
