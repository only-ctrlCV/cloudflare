import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'SECS-II',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        SEMI E5（SECS-II）标准定义了主机与设备之间交换的消息格式和数据项（如报警报告、工艺参数等）。
        这些消息是面向业务逻辑的语义规范（例如“发送配方”“上报产量”），属于应用层功能。
      </>
    ),
  },
  {
    title: 'GEM 核心目标',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        GEM（通用设备模型）旨在为所有半导体制造设备定义一套基于 SECS-II 的标准化通信实现，确保设备具备
        统一的自动化交互能力，同时保持灵活性，以支持半导体制造商的自动化需求。
      </>
    ),
  },
  {
    title: '标准',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        标准是供应商和客户之间自愿的技术协议，旨在以合理的价格和稳定的供应提高产品质量和可靠性。标准确保商
        品和服务的兼容性和互作性。SEMI 标准是书面文件，可以采用规范、指南、测试方法、术语或最佳实践的形式。
        文件以 16 卷的集形式发布，称为 SEMI 国际标准。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
