import FeedIcon from '@mui/icons-material/Feed';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import HistoryIcon from '@mui/icons-material/History';
import SummarizeIcon from '@mui/icons-material/Summarize';

export const siderbar = [
    {
        name: 'Search',
        icon: FeedIcon,
        path: '/'
    },
    {
        name: 'Registration',
        icon: CreateNewFolderIcon,
        path: '/request/create'
    },
    {
        name: 'History',
        icon: HistoryIcon,
        path: '/history'
    },
    {
        name: 'Report',
        icon: SummarizeIcon,
        path: '/report'
    },

]