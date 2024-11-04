import { dark, light, noSidebar } from '@adminjs/themes';
import { AdminJSOptions } from 'adminjs';

import componentLoader from './component-loader.js';

// const client = new pg.Client({
//   connectionString: process.env.DATABASE_URL,
// });
// await client.connect();

const options: AdminJSOptions = {
  componentLoader,
  rootPath: '/admin',
  resources: [],
  databases: [],

  defaultTheme: dark.id,
  availableThemes: [dark, light, noSidebar],
};

export default options;
