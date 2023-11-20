import Image from 'next/image';
import { client } from '../../../sanity/lib/client';
import { urlForImage } from '../../../sanity/lib/image';

export const ExampleConenectSanity = async () => {
  const query = `*[_type=="services"]{title, description, list, price, image}`;
  const services = await client.fetch(query);
  console.log(services);
  return (
    <ul className="container mx-auto flex justify-between gap-1">
      {services.map(service => (
        <li key={service.title} className="w-4/12">
          <p>{service.title}</p>
          <p>{service.description}</p>

          {service.list.map(el => (
            <p>
              {el.Title} : {el.Value}
            </p>
          ))}

          <p>{service.price}</p>
          <Image
            src={urlForImage(service.image).url()}
            alt={service.image.caption}
            width="300"
            height="300"
          />
        </li>
      ))}
    </ul>
  );
};
