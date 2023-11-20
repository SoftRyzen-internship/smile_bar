import { client } from '../../../sanity/lib/client';
export const ExampleConenectSanity = async () => {
  const query = `*[_type=="services"]{title, description, list, price, image}`;
  const services = await client.fetch(query);
  // console.log(services);
  return (
    <ul>
      {services.map(service => (
        <li key={service.title}>
          <p>{service.title}</p>
          <p>{service.description}</p>
          <p>{service.list.map(el => el.Title + el.Value)}</p>
          <p>{service.price}</p>
        </li>
      ))}
    </ul>
  );
};
