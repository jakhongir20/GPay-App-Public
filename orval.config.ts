import { defineConfig } from 'orval';

export default defineConfig({
  api: {
    output: {
      mode: 'split',
      target: 'app/[lang]/_api/generated',
      schemas: 'app/[lang]/_api/generated/models',
      client: 'react-query',
      mock: false,
      prettier: true,
      clean: true,
      override: {
        mutator: {
          path: 'app/[lang]/_api/mutator/custom-instance.ts',
          name: 'customInstance',
        },
        query: {
          useQuery: true,
          useInfinite: false,
          useInfiniteQueryParam: 'pageParam',
          // Optionally set default query options
        },
      },
    },
    input: {
      target: 'https://api.myuzbekistan.uz/swagger.json',
    },
  },
});
