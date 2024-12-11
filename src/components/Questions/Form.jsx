import React from 'react';
import styles from './Questions.module.scss';
import Button from '../Button/Button';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

export default function Form() {
  const { t } = useTranslation();
  const form = React.useRef();
  const [name, setName] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [questions, setQuestions] = React.useState('');

  const onChaneName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const onChaneNumber = (e) => {
    e.preventDefault();
    setNumber(e.target.value);
  };
  const onChaneQuestions = (e) => {
    e.preventDefault();
    setQuestions(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5hneqvn', 'template_z6j4wwf', form.current, 'KEU8NfLQIl6K9JJWC').then(
      (result) => {
        console.log(result.text);
        console.log('succses');
        alert('Ваш вопрос отправлен.Наш специалист скоро ответить вам.')
        setName('');
        setNumber('');
        setQuestions('');
      },
      (error) => {
        console.log(error.text);
      },
    );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={styles.form}>
      <input
        onChange={onChaneName}
        type="text"
        value={name}
        name="user_name"
        placeholder={t('questions.form1')}
      />
      <input
        onChange={onChaneNumber}
        type="number"
        value={number}
        name="user_number"
        placeholder={t('questions.form2')}
      />
      <textarea
        onChange={onChaneQuestions}
        type="text"
        value={questions}
        name="user_question"
        placeholder={t('questions.form3')}
      />

      <Button type="submit" width={461} height={52} font={24}>
        {t('questions.button')}
      </Button>
    </form>
  );
}
