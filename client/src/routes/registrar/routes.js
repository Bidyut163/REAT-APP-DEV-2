import RegistrarPanel from '../../components/official/registrar/RegistrarPanel';
import AppealShow from '../../components/official/registrar/AppealShow';
import Checklist from '../../components/official/registrar/Checklist';

const routes = [
    { path: '/official/registrar', exact: true, name: 'Registrar' },

    {
        path: '/official/registrar/panel',
        exact: true,
        name: 'RegistrarPanel',
        component: RegistrarPanel,
    },

    {
        path: '/official/registrar/appeals',
        exact: true,
        name: 'RegistrarPanel',
        component: RegistrarPanel,
    },
    {
        path: '/official/registrar/appeals/:id',
        exact: true,
        name: 'AppealShow',
        component: AppealShow,
    },
    {
        path: '/official/registrar/appeals/:id/checklist',
        exact: true,
        name: 'Checklist',
        component: Checklist,
    },
];

export default routes;
