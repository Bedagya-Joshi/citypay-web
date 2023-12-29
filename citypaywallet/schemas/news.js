import {defineField, defineType} from 'sanity'
import client from '../../src/services/sanityClient'

export default defineType({
  name: 'news', 
  title: 'News',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title', 
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      resolve: async (doc) => {
        if (doc.mainImage && doc.mainImage.asset) {
          try {
            const imageDetails = await client.fetch(
              `*[_id == '${doc.mainImage.asset._ref}']{
                asset {
                  url
                }
              }`,
            )

            return {
              ...doc.mainImage,
              url: imageDetails?.asset?.url || null,
            }
          } catch (error) {
            console.error('Error fetching image URL:', error)
            return null
          }
        }
        return null
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'blockContent', // Directly reference the block type
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent', // Directly reference the block type
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
