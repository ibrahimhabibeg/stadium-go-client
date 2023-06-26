import { CodegenConfig } from '@graphql-codegen/cli'
 
// Schema will be changed before publishing

const config: CodegenConfig = {
  schema: '../stadium-go-server/src/schema.gql',
  documents: ['src/**/*.tsx'],
  ignoreNoDocuments: true,
  generates: {
    './src/gql/': {
      preset: 'client'
    }
  }
}
 
export default config