import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started 📚
          </Link>
        </div>
      </div>
    </header>
  );
}

function Feature({title, description, link, emoji}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <div style={{fontSize: '3rem', marginBottom: '1rem'}}>{emoji}</div>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <Link className="button button--primary button--sm" to={link}>
          Explore →
        </Link>
      </div>
    </div>
  );
}

const FeatureList = [
  {
    title: 'Documentation',
    emoji: '📖',
    description: 'Core knowledge and concepts. Find detailed explanations of key topics.',
    link: '/docs/intro',
  },
  {
    title: 'Guides',
    emoji: '🗺️',
    description: 'Step-by-step instructions. Learn how to accomplish specific tasks.',
    link: '/docs/guides/getting-started',
  },
  {
    title: 'Resources',
    emoji: '🔧',
    description: 'Tools, templates, and references. Quick access to useful materials.',
    link: '/docs/resources/tools',
  },
];

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome`}
      description="Your centralized knowledge management system">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
