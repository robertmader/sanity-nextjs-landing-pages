export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ce0370e5699e613830453e4',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-bpj2sr4f',
                  apiId: 'ab4bc3aa-78cc-4207-9984-8b32dbb0032d'
                },
                {
                  buildHookId: '5ce0370f974426008e1838ce',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-e3ogqiyp',
                  apiId: 'ec3b9e25-4d0c-40d4-b1f4-c49b32cde524'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/robertmader/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-e3ogqiyp.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
