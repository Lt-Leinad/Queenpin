import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'client',
      type: 'string',
    }),
    defineField({
      name: 'testimony',
      type: 'text',
    }),
    defineField({
      name: 'link',
      type: 'url',
    }),
  ],
})
