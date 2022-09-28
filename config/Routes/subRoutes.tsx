import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ScienceIcon from '@mui/icons-material/Science';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import PersonIcon from '@mui/icons-material/Person';

export const subRoutes = [

    {
        name: 'Clincs',
        icon: VaccinesIcon,
        children: [
            {
                text: "Clinic List",
                path: '/clinics'
            },
            {
                text: "Create Clinics",
                path: '/clinics/create'
            },
        ]
    },
    {
        name: 'Hospitals',
        icon: LocalHospitalIcon,
        children: [
            {
                text: "Hospital List",
                path: '/hospitals'
            },
            {
                text: "Create Hospital",
                path: '/hospitals/create'
            },
        ]
    },
    {
        name: 'Labs',
        icon: ScienceIcon,
        children: [
            {
                text: "Lab List",
                path: '/lab'
            },
            {
                text: "Create Lab",
                path: '/lab/create'
            },
        ]
    },
    {
        name: 'Doctors',
        icon: PersonIcon,
        children: [
            {
                text: "Doctors List",
                path: '/doctors'
            },
            {
                text: "Create Hospital",
                path: '/doctors/create'
            },
        ]
    },
    {
        name: 'Diseases',
        icon: CoronavirusIcon,
        children: [
            {
                text: "Diseases List",
                path: '/diseases'
            },
            {
                text: "Create Diseases",
                path: '/diseases/create'
            },
        ]
    },
    {
        name: 'Enquiry',
        icon: MedicalInformationIcon,

        children: [
            {
                text: "Enquiry List",
                path: '/enquiry'
            },
        ]
    },
]