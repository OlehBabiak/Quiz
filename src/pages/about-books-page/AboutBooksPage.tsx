import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from 'routes';
import { v4 as uuidv4 } from 'uuid';
import MenuButton from 'shared/components/button/MenuButton';
import PageQuestionComponent from 'shared/components/page-question/PageQuestionComponent';
import { IPageOptions } from 'shared/i18n/copies/types';
import './AboutBooks.scss';
import { nextButtonStyles } from 'shared/constants/styles';

const AboutBooksPage: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleOptionSelector = () => {
    navigate(RouteNames.TOPICS);
  };

  const [checkboxStates, setCheckboxStates] = useState<boolean[]>([
    false,
    false,
    false,
  ]);

  const handleButtonClick = (index: number) => {
    const newCheckboxStates = [...checkboxStates]; // Create a copy of the current state array
    newCheckboxStates[index] = !newCheckboxStates[index]; // Toggle the state of the clicked checkbox
    setCheckboxStates(newCheckboxStates); // Update the state
  };

  return (
    <div>
      <div>
        <PageQuestionComponent question={t('page4.title')} />
        {JSON.parse(t('page4.options')).map(
          ({ value }: IPageOptions, index: number) => (
            <MenuButton
              key={value + uuidv4()}
              title={value}
              showCheckbox
              isChecked={checkboxStates[index]}
              onClick={() => handleButtonClick(index)}
            />
          )
        )}
      </div>
      <div>
        <MenuButton
          title={t('page4.button')}
          onClick={() => handleOptionSelector()}
          styles={nextButtonStyles}
        />
      </div>
    </div>
  );
};

export default AboutBooksPage;
