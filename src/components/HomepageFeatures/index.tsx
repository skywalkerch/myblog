import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {description: (
     <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/Machine-Learning/intro">
            机器学习
          </Link>
        </div>
    ),
    title: 'Machine Learning',
    Svg: require('@site/static/img/ai.svg').default,
    
  },
  {
    title: 'Linux',
    Svg: require('@site/static/img/linux.svg').default,
    description: (
       <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/Linux/intro">
            Linux
          </Link>
        </div>
    ),
  },
  {
    title: 'Programing Languages',
    Svg: require('@site/static/img/c.svg').default,
    description: (
      <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/Lang/intro">
            编程语言
          </Link>
        </div>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
