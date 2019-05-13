// This configuration file is picked automatically by Create React App.
// It is required for enzyme to know which adapter it needs to use.

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });