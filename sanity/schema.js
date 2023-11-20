export const schema = {
  types: [
    {
      name: 'services',
      title: 'Services',
      type: 'document',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: Rule => [
            Rule.required()
              .min(3)
              .error('A title of min. 3 characters is required'),
            Rule.max(50).warning('Shorter titles are usually better'),
          ],
        },
        {
          title: 'Description',
          name: 'description',
          type: 'text',
          validation: Rule => Rule.required(),
        },
        {
          name: 'list',
          type: 'array',
          title: 'List',
          of: [
            {
              type: 'object',
              name: 'Add',
              fields: [
                { type: 'string', name: 'Title' },
                { type: 'string', name: 'Value' },
              ],
            },
          ],
        },
        {
          name: 'price',
          type: 'number',
          title: 'Price',
        },
        {
          name: 'image',
          title: 'image',
          type: 'image',

          options: {
            hotspot: true, // <-- Defaults to false
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
