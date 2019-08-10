import React from 'react';
import { Cosova } from 'cosova';

import styles from './App.module.css';
import { getRandomItemFormArray } from './utils';

const COLORS = [
  '#00FF00',
  '#00FFFF',
  '#CCFF00',
  '#CCFFFF',
  '#FFFF66',
  '#FF0099',
  '#33CCFF',
];

export const App: React.FC = () => {
  return (
    <Cosova className={styles.wrapper} initialStyle={{ color: '#1f1f1f' }}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>
          Cosova 示例
          <a
            className={styles.titleLink}
            href="https://github.com/hardo/cosova"
          >
            On GitHub
          </a>
        </h2>
        <h3 className={styles.subTitle}>默认样式</h3>
        <Cosova
          className={styles.demoBox}
          initialStyle={{ color: '#fafafa' }}
          onClick={event => event.stopPropagation()}
        >
          请使劲地点我吧 ~
        </Cosova>
        <h3 className={styles.subTitle}>魔改样式</h3>
        <Cosova
          className={styles.demoBox}
          cosovas={['阔口阔啰', '哇蛤蛤', '卖洞', '茶几']}
          initialStyle={{ color: '#fafafa' }}
          transitionStyle={{
            opacity: 0,
            transform: 'scale(2)',
          }}
          timing="cubic-bezier(0,-1, 1, 1)"
          duration={500}
          onClick={event => event.stopPropagation()}
        >
          再试试我呢, 我可和楼上不一样哦!
        </Cosova>
        <h3 className={styles.subTitle}>非主流样式</h3>
        <Cosova
          className={styles.demoBox}
          style={{
            overflow: 'hidden',
          }}
          cosovas={[
            '曾經很愛很愛伱..侞妗.o┈]我努力放棄多谢╰伱啲Οo絕.情讓我學会~死心',
            '「.我德存在织伪铕个顠亮的死法.﹖; !',
            '：／。涐 旳 脸 、出 现 在 谁 旳 世 ˉ界、﹖',
            '○.o.﹏如果難過請你忘叻⒌',
            'ˊ笑是開始的第一頁)﹡ ,結果是讓淚寫完結篇) ',
          ]}
          duration={() => getRandomItemFormArray([800, 2000, 5000, 10000])}
          initialStyle={() => ({
            color: getRandomItemFormArray(COLORS),
          })}
          transitionStyle={() => ({
            opacity: getRandomItemFormArray([0, 1, 0.5]),
            color: getRandomItemFormArray(COLORS),
            transform: getRandomItemFormArray([
              'scale(2)',
              'scale(2, 0)',
              'skew(30deg, 20deg)',
              'rotate(360deg)',
            ]),
          })}
          onClick={event => event.stopPropagation()}
        >
          当非主流成为主流, 你应该为你现在瞧不起我们的行为而感到羞愧!
        </Cosova>
      </div>
    </Cosova>
  );
};
