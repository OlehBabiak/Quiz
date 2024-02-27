import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PageQuestionComponent from 'shared/components/page-question/PageQuestionComponent';
import './ResultPage.scss';
import MenuButton from 'shared/components/button/MenuButton';
import { nextButtonStyles } from 'shared/constants/styles';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from 'routes';
import { ICommonState, IUserOrder } from 'store/slices/common-slice';
import LoadIcon from 'assets/download_icon.svg?react';

const ResultPage: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleRetakeQuiz = () => {
    navigate(RouteNames.START_PAGE);
  };

  function getOrdersFromLocalStorage(): IUserOrder[] {
    // Get user object from local repository
    const { user }: ICommonState = JSON.parse(
      localStorage.getItem('data') as string
    );
    // Create an array to store orders
    const orders: IUserOrder[] = Object.values(user);

    return orders;
  }

  // Function for generating a CSV file with data
  function generateCSV(orders: IUserOrder[]) {
    const rows = [['Title', 'Type', 'Answer']]; // Column headers

    // Add data from local storage to rows
    orders.forEach((order) => {
      const row = [order.title, order.type, order.answer];
      rows.push(row);
    });

    // Create a CSV string
    const csvContent = `data:text/csv;charset=utf-8,${rows
      .map((row) => row.join(','))
      .join('\n')}`;

    console.log(rows);

    // Create a link to download the CSV file
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'user_orders.csv');

    link.click();
  }

  const handleDownloadButtonClick = () => {
    const orders = getOrdersFromLocalStorage();
    generateCSV(orders);
  };

  useEffect(() => {
    const downloadButton = document.getElementById('download-button');
    if (downloadButton) {
      downloadButton.addEventListener('click', handleDownloadButtonClick);
    }

    // remove the event handler when unmounting a component
    return () => {
      if (downloadButton) {
        downloadButton.removeEventListener('click', handleDownloadButtonClick);
      }
    };
  }, []);
  return (
    <>
      <PageQuestionComponent
        question={t('resultPage.title')}
        action={t('resultPage.subTitle')}
      />
      <div className="successIcon">
        <img
          width={118}
          src="https://s3-alpha-sig.figma.com/img/0c24/5cb5/ebdf2417d7fde04bf86fa1469f3d7f00?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QRXxwwft5vZwmC1yy03OL-cTr0EL3jJZSZkfhPpO5aOVCqEOP~Fbp1dfwDItJ0TFnKS4T5F9PFkHjhXTLFh35oOFn8nMjZ8846sq4f0xRH4qZbiqedSFfHT92~G9E34FeSXhats0nfSMB7V57Rz746OxjOg6BDIW8onnl3Sv9Kmsnq42j-9AMPsD-GuJm2LViFvfuiLdOZ1Kbc1F6P3h0TuqwTlFtT2vSgC~0VRbTY9nQxbJ-6SyqereiAORp3Mf4Y5uZDR2mqTvQ1vOllMUDEnhCRzl2bYcLtDJYNKJjNGzQ4g9T6dJFZlzjeDLqxMpbneYuKFig-zotbyLQfzEuA__"
          alt="success"
        />
      </div>
      <p>
        <LoadIcon id="download-button" />
        {t('resultPage.text')}
      </p>
      <MenuButton
        title={t('resultPage.button')}
        onClick={() => handleRetakeQuiz()}
        styles={nextButtonStyles}
      />
    </>
  );
};

export default ResultPage;
