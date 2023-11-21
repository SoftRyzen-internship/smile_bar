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
            Rule.required().min(3).error('Мінімальна кількість символів 3'),
            Rule.max(50).warning('Коротші заголовки виглядають краще'),
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
          type: 'object',
          title: 'Інформація про послугу',
          fields: [
            {
              title: 'Тривалість процедури:',
              name: 'time',
              type: 'string',
            },
            {
              title: 'Освітлення:',
              name: 'lighting',
              type: 'string',
            },
            {
              title: 'Гель наноситься:',
              name: 'gel',
              type: 'string',
            },
            {
              title: 'Результат:',
              name: 'result',
              type: 'string',
            },
          ],
        },
        {
          name: 'price',
          type: 'number',
          title: 'Ціна',
          validation: Rule => Rule.required(),
          options: {
            readOnly: false,
          },
        },
        {
          name: 'image',
          title: 'Зоображення',
          type: 'image',
          validation: Rule => Rule.required(),
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
