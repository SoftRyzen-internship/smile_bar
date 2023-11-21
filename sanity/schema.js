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
            readOnly: false, // Дозволяє редагування
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
            readOnly: false, // Дозволяє редагування
          },
        },
        {
          name: 'list',
          type: 'array',
          title: 'Інформація про послугу',
          options: {
            readOnly: false, // Дозволяє редагування
          },
          of: [
            {
              type: 'object',
              name: 'Add',
              fields: [
                {
                  type: 'string',
                  name: 'title',
                },
                { type: 'string', name: 'value' },
              ],
            },
          ],
        },
        {
          name: 'price',
          type: 'number',
          title: 'Ціна',
          options: {
            readOnly: false, // Дозволяє редагування
          },
        },
        {
          name: 'image',
          title: 'Зоображення',
          type: 'image',

          options: {
            hotspot: true, // <-- Defaults to false
            readOnly: false,
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
    },
  ],
};
