import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'myintro',  // service-domain は XXXX.microcms.io の XXXX 部分
  apiKey: '65ba4708-4d5e-498e-bc6a-23a290265ff2',
});

