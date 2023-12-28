import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'citypaywallet',

  projectId: 'gfx5cjiu',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  api: {
    projectId: 'gfx5cjiu',
    dataset: 'production',
    cors: [
      {
        origin: 'http://localhost:3000', // Add your React development server URL
        credentials: true,
      },
      // Add other allowed origins if needed
    ],
  },

  schema: {
    types: schemaTypes,
  },
})
