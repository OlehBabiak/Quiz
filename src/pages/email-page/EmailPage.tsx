import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from 'routes';
import MenuButton from 'shared/components/button/MenuButton';
import InputField from 'shared/components/input-field/InputField';
import PageQuestionComponent from 'shared/components/page-question/PageQuestionComponent';
import { nextButtonStyles } from 'shared/constants/styles';
import { useTypedDispatch } from 'shared/hooks/hooks';
import { setEmail } from 'store/slices/common-slice';
import { regex } from './constants';
import './EmailPage.scss';

const EmailPage: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  const [inputValue, setInputValue] = useState('');

  const validateEmail = (email: string): boolean => {
    return regex.test(email);
  };

  const onChangeInput = (value: string) => {
    setInputValue(value);
  };

  const handleSubmit = () => {
    dispatch(
      setEmail({
        title: `${t('emailPage.title')}`,
        type: 'email',
        answer: inputValue,
      })
    );
    navigate(RouteNames.RESULT);
  };

  return (
    <>
      <div>
        <PageQuestionComponent
          question={t('emailPage.title')}
          action={t('emailPage.text')}
        />
        <div>
          <InputField
            inputType="email"
            inputValue={inputValue}
            placeholder={t('emailPage.placeholder')}
            onInputChange={onChangeInput}
          />
        </div>
        <p>{t('emailPage.privatePolicy')}</p>
      </div>
      <div>
        <MenuButton
          title={t('emailPage.button')}
          onClick={() => handleSubmit()}
          styles={nextButtonStyles}
          disabled={!validateEmail(inputValue)}
        />
      </div>
    </>
  );
};

export default EmailPage;
