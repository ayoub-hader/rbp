/*
 * MovieCard Messages
 *
 * This contains all the text for the MovieCard component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.MovieCard';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the MovieCard component!',
  },
});
