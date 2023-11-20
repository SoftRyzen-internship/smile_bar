export const schema = {
  types: [
    {
      name: 'services',
      title: 'Services',
      type: 'document',
      fields: [
        {
          name: 'title',
          title: 'Назва процедури',
          type: 'string',
          options: {
            readOnly: false,
          },
          validation: Rule => [
            Rule.required()
              .min(3)
              .error('The minimum title length is 3 characters'),
            Rule.max(50).warning('Shorter titles are usually better'),
          ],
        },
        {
          title: 'Опис процедури',
          name: 'description',
          type: 'text',
          validation: Rule => Rule.required(),
          options: {
            readOnly: false,
          },
        },
        {
          name: 'list',
          type: 'array',
          title: 'Інформація про послугу',
          options: {
            readOnly: false,
          },
          of: [
            { title: 'Тривалість процедури:', type: 'string', name: 'time' },
            { title: 'Освітлення:', type: 'string', name: 'lighting' },
            { title: 'Гель наноситься:', type: 'string', name: 'gel' },
            { title: 'Результат:', type: 'string', name: 'result' },
          ],
          validation: Rule => [
            Rule.custom(fields => {
              if (fields.length !== 4) {
                return 'Кількість заповнених полів повинна дорівнювати 4';
              }
              return true;
            }),
          ],
        },
        {
          name: 'price',
          type: 'number',
          title: 'Ціна',
          options: {
            readOnly: false,
          },
        },
        {
          name: 'image',
          title: 'Зоображення',
          type: 'image',

          options: {
            hotspot: true,
            readOnly: false,
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Підпис для фото',
            },
          ],
        },
      ],
    },
  ],
};
