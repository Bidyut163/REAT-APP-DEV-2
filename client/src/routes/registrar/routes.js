import RegistrarPanel from '../../components/official/registrar/RegistrarPanel';
import AppealShow from '../../components/official/registrar/AppealShow';

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
];

export default routes;
