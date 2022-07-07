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
            Machine Learning
          </Link>
        </div>
    ),
    title: 'Machine Learning',
    Svg: require('@site/static/img/ai.svg').default,
    
  },
  {
    title: 'English',
    Svg: require('@site/static/img/english.svg').default,
    description: (
       <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/CET6/五个英语学习技巧">
            English
          </Link>
        </div>
    ),
  },
  {
    title: 'Mathematical modeling',
    Svg: require('@site/static/img/math.svg').default,
    description: (
      <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/mathmodel/intro">
            Mathematical modeling
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
