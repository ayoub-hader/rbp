/**
 *
 * Asynchronously loads the component for OmdbPage
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
