import del from 'del';

// Configurations
import path from '../config/path.js';

// Deleting Directory
export default () => {
   return del(path.root);
};