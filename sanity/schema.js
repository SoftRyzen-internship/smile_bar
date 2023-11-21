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
          name: 'info',
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
