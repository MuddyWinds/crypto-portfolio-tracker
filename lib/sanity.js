import sanityClient from '@sanity/client';
import api_key from '../api_keys/keys';

export const client = sanityClient({
    projectId: 'tfxiokif',
    dataset: 'production',
    apiVersion: '2022-02-06',
    token: api_key,
    useCdn: false
})