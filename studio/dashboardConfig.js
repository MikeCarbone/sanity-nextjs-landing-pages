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
                  buildHookId: '5f910c2f4d13f847e4b61726',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-8ana447s',
                  apiId: '530b037c-4a1a-4ef7-bca0-20741ed59d16'
                },
                {
                  buildHookId: '5f910c2f4a8ec14b45f9b3f1',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-mfweb2y9',
                  apiId: '7283f49f-c262-4536-aed4-3634643082cf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/carbonology/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-mfweb2y9.netlify.app', category: 'apps'}
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
