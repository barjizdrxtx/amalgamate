import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ScienceIcon from '@mui/icons-material/Science';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import PersonIcon from '@mui/icons-material/Person';
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo';
import ReviewsIcon from '@mui/icons-material/Reviews';

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
                text: "Create Clinic",
                path: '/clinics/create'
            },
        ]
    },
    {
        name: 'Hospitals',
        icon: LocalHospitalIcon,
        children: [
            {
                text: "Hospitals List",
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
                text: "Labs List",
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
                text: "Create Doctor",
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
                text: "Create Disease",
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
    {
        name: 'Advertisement',
        icon: FeaturedVideoIcon,
        children: [
            {
                text: "Advertisement List",
                path: '/advertisement'
            },
            {
                text: "Create Advertisement",
                path: '/advertisement/create'
            },
        ]
    },

    {
        name: 'Testimonials',
        icon: ReviewsIcon,
        children: [
            {
                text: "Testimonials List",
                path: '/testimonials'
            },
            {
                text: "Create Testimonials",
                path: '/testimonials/create'
            },
        ]
    },
]