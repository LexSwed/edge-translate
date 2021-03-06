import React from 'react';
import { Flex, Icon, styled } from '@fxtrot/ui';

import Translated from './Translated';
import { useTranslation } from '../store/utils';
import LanguageIcon from './LanguageIcon';

const Wrapper = styled(Flex, {
  userSelect: 'none',
  height: '$24',
  color: '$textLight',
});

export const Result = React.memo(() => {
  const translation = useTranslation();

  return translation.text ? (
    <Translated />
  ) : (
    <Wrapper flow="column" main="center" cross="center">
      <Icon as={LanguageIcon} size="3xl" />
    </Wrapper>
  );
});
