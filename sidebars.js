// @ts-check

/**
 * Knowledge Base Sidebar Configuration
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // Main knowledge sidebar
  knowledgeSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: ['getting-started/overview', 'getting-started/quick-start', 'getting-started/concepts'],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Core Topics',
      items: [
        'core-topics/topic-one',
        'core-topics/topic-two',
        'core-topics/topic-three',
      ],
    },
    {
      type: 'category',
      label: 'Mitglieder & Organisationen',
      items: [
        'members/overview',
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      items: [
        'advanced/deep-dive',
        'advanced/best-practices',
        'advanced/troubleshooting',
      ],
    },
  ],

  // Guides sidebar
  guidesSidebar: [
    {
      type: 'category',
      label: 'How-To Guides',
      items: [
        'guides/getting-started',
        'guides/common-tasks',
        'guides/workflows',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        'guides/tutorials/beginner',
        'guides/tutorials/intermediate',
        'guides/tutorials/advanced',
      ],
    },
  ],

  // Resources sidebar
  resourcesSidebar: [
    {
      type: 'category',
      label: 'Reference',
      items: [
        'resources/tools',
        'resources/templates',
        'resources/glossary',
        'resources/faq',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'External Links',
      items: [
        'resources/links',
      ],
    },
  ],
};

export default sidebars;
