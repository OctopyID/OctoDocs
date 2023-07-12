export default defineAppConfig({
    docus: {
        title: 'Octopy ID',
        description: 'The best place to start your documentation.',
        image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
        socials: {
            github: 'OctopyID',
        },
        github: {
            dir: 'content',
            branch: 'main',
            repo: 'OctoWiki',
            owner: 'OctopyID',
            edit: true
        },
        aside: {
            level: 0,
            collapsed: false,
            exclude: []
        },
        main: {
            padded: false,
            fluid: false
        },
        header: {
            logo: false,
            showLinkIcon: true,
            exclude: [],
            fluid: false
        },
        footer: {
            credits: {
                icon: 'IconDocus',
                text: 'Powered by Docus',
                href: 'https://docus.dev',
            },
        }
    }
});
