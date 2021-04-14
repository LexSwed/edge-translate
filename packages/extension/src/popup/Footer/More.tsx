import React from 'react';
import { Icon, Button, Menu, Item as MenuItem, styled, Text } from '@fxtrot/ui';
import { DotsVerticalIcon } from '@heroicons/react/outline';

import { useTranslatorLink } from '../TranslatorLink/TranslatorLink';

const Item = styled(MenuItem, {
  height: '$8',
});

const More: React.FC = () => {
  const translatorHref = useTranslatorLink();
  return (
    <Menu>
      <Button variant="flat" aria-label="More" size="xs">
        <Icon as={DotsVerticalIcon} size="md" />
      </Button>
      <Menu.List>
        <Item
          onClick={() =>
            chrome.tabs.create({
              url: 'https://alexanderswed.typeform.com/to/sjSxc6',
            })
          }
        >
          <Text size="sm">Leave Feedback</Text>
        </Item>
        <Item
          onClick={() => {
            chrome.tabs.create({
              url: translatorHref,
            });
          }}
        >
          <Text size="sm">Open in Microsoft Bing</Text>
        </Item>
      </Menu.List>
    </Menu>
  );
};

export default More;
