import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import PolicyIcon from '@mui/icons-material/Policy';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import MasksIcon from '@mui/icons-material/Masks';
import ElevatorIcon from '@mui/icons-material/Elevator';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import InfoIcon from '@mui/icons-material/Info';
import ScienceIcon from '@mui/icons-material/Science';
import PaidIcon from '@mui/icons-material/Paid';
import ReviewsIcon from '@mui/icons-material/Reviews'
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import PersonIcon from '@mui/icons-material/Person';

export const subRoutes = [

    {
        name: 'Clincs',
        icon: VaccinesIcon,
        path: '/clinics',
        children: [
            {
                text: "clinics",
                path: '/clinics'
            }
        ]
    },
    {
        name: 'Hospitals',
        icon: LocalHospitalIcon,
        path: '/hospitals',
        children: [
            {
                text: "clinics",
                path: '/clinics'
            }
        ]
    },
    {
        name: 'Labs',
        icon: ScienceIcon,
        path: '/labs',
        children: [
            {
                text: "clinics",
                path: '/clinics'
            }
        ]
    },
    {
        name: 'Doctors',
        icon: PersonIcon,
        path: '/doctors',
        children: [
            {
                text: "clinics",
                path: '/clinics'
            }
        ]
    },
    {
        name: 'Diseases',
        icon: CoronavirusIcon,
        path: '/diseases',
        children: [
            {
                text: "clinics",
                path: '/clinics'
            }
        ]
    },
    {
        name: 'Enquiry',
        icon: MedicalInformationIcon,
        path: '/enquiry',
        children: [
            {
                text: "clinics",
                path: '/clinics'
            }
        ]
    },
    // {
    //     name: 'Advertisement',
    //     icon: FeaturedVideoIcon,
    //     path: '/advertisement'
    // },
    // {
    //     name: 'Corporate Wellness',
    //     icon: SelfImprovementIcon,
    //     path: '/corporatewellness'
    // },
    // {
    //     name: 'users',
    //     icon: AccessibleForwardIcon,
    //     path: '/users'
    // },

    // {
    //     name: 'DRxTx Policies',
    //     icon: PolicyIcon,
    //     path: '/policies'

    // },
    // {
    //     name: 'Contact Us',
    //     icon: ContactMailIcon,
    //     path: '/contactus'

    // },
    // {
    //     name: 'About Us',
    //     icon: InfoIcon,
    //     path: '/aboutus'
    // },
    // {
    //     name: 'Investors',
    //     icon: PaidIcon,
    //     path: '/investors'

    // },
    // {
    //     name: 'Testimonials',
    //     icon: ReviewsIcon,
    //     path: '/testimonials'
    // },
    // {
    //     name: 'Services',
    //     icon: ElevatorIcon,
    //     path: '/services'
    // },
    // {
    //     name: 'Careers',
    //     icon: WorkHistoryIcon,
    //     path: '/careers'
    // },

]