import React, { useMemo } from 'react';

import LanguageSelect from '../LanguageSelect';
import { useFromLanguage, useLanguages, useTranslation } from '../store/utils';

type Props = {
  size?: React.ComponentProps<typeof LanguageSelect>['size'];
  border?: React.ComponentProps<typeof LanguageSelect>['border'];
};

const FromLanguageSelect: React.FC<Props> = (props) => {
  const [from, setFrom] = useFromLanguage();
  const languages = useLanguagesWithAuto(from);

  return (
    <LanguageSelect
      value={from}
      onChange={setFrom}
      languages={languages}
      {...props}
    />
  );
};

export default FromLanguageSelect;

function useLanguagesWithAuto(from: string) {
  const translation = useTranslation();
  const languages = useLanguages();

  return useMemo(() => {
    if (from === 'auto' && translation.from) {
      const suffix = ' | Auto';
      const lang = languages[translation.from];

      return {
        ...languages,
        auto: {
          name: `${lang.name}${suffix}`,
          nativeName: `${lang.nativeName}${suffix}`
        }
      };
    }

    return languages;
  }, [from, languages, translation.from]);
}