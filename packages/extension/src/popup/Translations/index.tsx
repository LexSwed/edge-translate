import React from 'react';
import useSWR from 'swr';
import { Box, Flex, Grid, Heading, StyleRecord, Text } from '@fxtrot/ui';

import { useTranslation, useText } from '../store/utils';
import { API } from '../../utils';

export const Translations = () => {
  const { from, to, text } = useTranslation();
  const [sourceText] = useText();
  const { data } = useSWR(
    () => ([from, to, text].every(Boolean) ? [from, to, text] : null),
    (from, to) => API.dictionaryLookup({ text: sourceText, from, to })
  );

  if (!data) {
    return null;
  }

  return (
    <Box css={styles.wrapper}>
      {/* <Flex flow="column" gap="md" cross="stretch">
        {data.map((dict) => {
          return (
            <Flex flow="column" key={pos} gap="2" cross="stretch">
              <Heading as="h4" css={styles.heading}>
                {pos}
              </Heading>
              <Grid columns="34% 1fr" columnGap="3" rowGap="2">
                {translations.map((el) => {
                  return (
                    <React.Fragment key={el.target}>
                      <Text size="sm" tone="light">
                        {el.target}
                      </Text>
                      <Text size="sm">{el.backTranslations.join(', ')}</Text>
                    </React.Fragment>
                  );
                })}
              </Grid>
            </Flex>
          );
        })}
      </Flex> */}
    </Box>
  );
};

const styles: StyleRecord = {
  wrapper: {
    overflow: 'auto',
  },
  heading: {
    fontSize: '$xs',
  },
};
