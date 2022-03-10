const {NODE_ENV} = process.env;

export const API_URL =
  NODE_ENV === 'production'
    ? 'https://foodstreet-dev.herokuapp.com/customer'
    : 'http://localhost:4000/customer';

// Mixpanel Prod Token: a9fcee0dda63a07cf98e20e00e61bfb0
export const MIX_PANEL_TOKEN = 'e732cf3a4e119777ec566628eac9bfb2';
