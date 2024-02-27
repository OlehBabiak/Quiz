import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from 'routes';
import MenuButton from 'shared/components/button/MenuButton';
import PageQuestionComponent from 'shared/components/page-question/PageQuestionComponent';
import { nextButtonStyles } from 'shared/constants/styles';
import { useTypedDispatch } from 'shared/hooks/hooks';
import { IPageOptions } from 'shared/i18n/copies/types';
import { setFifthOrder, setProgress } from 'store/slices/common-slice';
import { v4 as uuidv4 } from 'uuid';

const TopicsPage: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(setProgress(5));
  });

  const [checkboxStates, setCheckboxStates] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const isNextButtonDisabled = checkboxStates.every((state) => !state);

  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleOptionSelector = () => {
    navigate(RouteNames.LOADING);
    dispatch(
      setFifthOrder({
        title: `${t('page5.title')}`,
        type: 'bubble',
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
        <PageQuestionComponent
          question={t('page5.title')}
          action={t('page5.text')}
        />
        {JSON.parse(t('page5.options')).map(
          ({ value }: IPageOptions, index: number) => (
            <MenuButton
              key={value + uuidv4()}
              title={value}
              showCheckbox={false}
              isChecked={checkboxStates[index]}
              onClick={() => handleButtonClick(index, value)}
            />
          )
        )}
      </div>
      <div>
        <MenuButton
          title={t('page5.button')}
          onClick={() => handleOptionSelector()}
          styles={nextButtonStyles}
          disabled={isNextButtonDisabled}
        />
      </div>
    </>
  );
};

export default TopicsPage;
