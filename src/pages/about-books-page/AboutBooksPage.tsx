import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from 'routes';
import { v4 as uuidv4 } from 'uuid';
import MenuButton from 'shared/components/button/MenuButton';
import PageQuestionComponent from 'shared/components/page-question/PageQuestionComponent';
import { IPageOptions } from 'shared/i18n/copies/types';
import './AboutBooks.scss';
import { nextButtonStyles } from 'shared/constants/styles';
import { useTypedDispatch } from 'shared/hooks/hooks';
import { setFourthOrder, setProgress } from 'store/slices/common-slice';

const AboutBooksPage: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(setProgress(4));
  });

  const [checkboxStates, setCheckboxStates] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);

  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleOptionSelector = () => {
    navigate(RouteNames.TOPICS);
    dispatch(
      setFourthOrder({
        title: `${t('page4.title')}`,
        type: 'multiple-select',
        answer: selectedValues.join(', '),
      })
    );
  };

  const handleButtonClick = (index: number, value: string) => {
    const newCheckboxStates = [...checkboxStates]; // Create a copy of the current state array
    newCheckboxStates[index] = !newCheckboxStates[index]; // Toggle the state of the clicked checkbox
    if (newCheckboxStates[index]) {
      setSelectedValues([...selectedValues, value]);
    } else {
      const i = selectedValues.indexOf(value);
      if (index > -1) {
        selectedValues.splice(i, 1);
      }
    }
    setCheckboxStates(newCheckboxStates); // Update the state
  };

  return (
    <>
      <div>
        <PageQuestionComponent question={t('page4.title')} />
        {JSON.parse(t('page4.options')).map(
          ({ value }: IPageOptions, index: number) => (
            <MenuButton
              key={value + uuidv4()}
              title={value}
              showCheckbox
              isChecked={checkboxStates[index]}
              onClick={() => handleButtonClick(index, value)}
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
    </>
  );
};

export default AboutBooksPage;
