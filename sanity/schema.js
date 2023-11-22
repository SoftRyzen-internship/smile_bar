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
          validation: Rule =>
            Rule.required().min(10).error('Мінімальна кількість символів 10'),
          options: {
            readOnly: false,
          },
        },
        {
          name: 'list',
          type: 'object',
          title: 'Інформація про послугу',
          options: {
            collapsed: false,
            columns: 2,
          },
          fields: [
            {
              title: 'Тривалість процедури:',
              name: 'time',
              type: 'string',
              description: 'Напишіть тривалість процедури в хвилинах',
              validation: Rule => [
                Rule.required().min(4).error('Мінімальна кількість символів 4'),
                Rule.required()
                  .max(15)
                  .error('Максимальна кількість символів 15'),
              ],
            },
            {
              title: 'Освітлення:',
              name: 'lighting',
              type: 'string',
              description: 'Напишіть на скільки тонів буде освітлена посмішка',
              validation: Rule => [
                Rule.required().min(4).error('Мінімальна кількість символів 4'),
                Rule.required()
                  .max(15)
                  .error('Максимальна кількість символів 15'),
              ],
            },
            {
              title: 'Гель наноситься:',
              name: 'gel',
              type: 'string',
              description: 'Скільки разів наносять гель',
              validation: Rule => [
                Rule.required().min(4).error('Мінімальна кількість символів 4'),
                Rule.required()
                  .max(15)
                  .error('Максимальна кількість символів 15'),
              ],
            },
            {
              title: 'Результат:',
              name: 'result',
              type: 'string',
              description: 'Як довго тримається ефект',
              validation: Rule => [
                Rule.required().min(4).error('Мінімальна кількість символів 4'),
                Rule.required()
                  .max(15)
                  .error('Максимальна кількість символів 15'),
              ],
            },
          ],
          validation: Rule =>
            Rule.custom(fields => {
              if (
                fields.time &&
                fields.lighting &&
                fields.gel &&
                fields.result
              ) {
                return true;
              } else {
                return 'Всі поля повинні бути заповнені';
              }
            }),
        },
        {
          name: 'price',
          type: 'number',
          title: 'Ціна',
          description: 'Вартість послуги в гривнях',
          validation: Rule => [
            Rule.required().min(10).error('Мінімальне значення поля 10'),
            Rule.required()
              .max(1000000)
              .error('Максимальне значення поля 1000000'),
            Rule.required().positive().error('Число має бути більшим за 0'),
            Rule.required().integer().error('Число може бути лише цілим'),
          ],
          options: {
            readOnly: false,
          },
        },
        {
          name: 'image',
          title: 'Зоображення',
          type: 'image',
          validation: Rule => Rule.required().error('Додайте зоображення'),
          options: {
            hotspot: true,
            readOnly: false,
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Підпис для фото',
              validation: Rule =>
                Rule.required().error('Додайте підпис для фото'),
            },
          ],
        },
      ],
    },
  ],
};
