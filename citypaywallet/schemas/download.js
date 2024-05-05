import {defineField, defineType} from 'sanity'

export default {
  name: 'downloads',
  title: 'Downloads',
  type: 'document',
  fields: [
    {
      name: 'totalDownloads',
      title: 'Total Downloads',
      type: 'number',
      validation: (Rule) => Rule.integer().min(1),
      description: 'Enter the total number of downloads for the page (must be at least 1).',
    },
  ],
}