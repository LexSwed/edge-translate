import React from 'react';
import { ContentBlock, Columns, Column, Heading, Stack } from '@fxtrot/edge';

import styles from './styles.module.css';

const Intro: React.FC = () => {
  return (
    <div className={styles.intro}>
      <ContentBlock>
        <Columns alignY="center" align="apart">
          <Column width="1/3">
            <Stack>
              <Heading as="h2">Translator Extension for your browser</Heading>
              <a
                href="https://chrome.google.com/webstore/detail/jbkaeigbknejjmhnkhmankagkfepncmn"
                className={styles.webStore}
              >
                <img
                  src="/images/chrome-web-store.png"
                  alt="Available in Chrome Web Store"
                />
              </a>
              <a href="void;" className={styles.webStore}>
                <img
                  src="/images/edge-addons.png"
                  alt="Available in Microsoft Edge Addons"
                />
              </a>
            </Stack>
          </Column>
          <Column width="1/2">
            <div>
              <img
                src="/images/screenshot-1.png"
                alt=""
                className={styles.screenshot}
              />
            </div>
          </Column>
        </Columns>
      </ContentBlock>
    </div>
  );
};

export default Intro;