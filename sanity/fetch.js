import { client } from './lib/client';

export const getServices = async () => {
  const query = `*[_type=="services"]{title, description, list, price, image}`;
  const services = await client.fetch(query);
  return services;
};
