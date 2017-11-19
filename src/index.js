import dva from 'dva';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.min';
import 'materialize-css/dist/js/materialize';
import './index.css';
// import 'react-mdl/extra/material.css';
// import 'react-mdl/extra/material.js';
// import 'semantic-ui-css/semantic.min.css';
// import 'jquery/dist/jquery.min';


// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/Authentication'));
app.model(require('./models/Photo'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
