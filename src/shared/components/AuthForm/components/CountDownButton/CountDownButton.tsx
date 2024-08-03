import { useEffect } from 'react';
import { useCountDown } from '@hooks/useCountDown';
import { UnstyledButton } from '@ui/buttons/UnstyledButton';
import { Text } from '@ui/typography/Text';
import clsx from 'clsx';

import styles from './CountDownButton.module.css';

interface CountDownButtonProps {
  className?: string;
  onRetrySendOtpCode: () => void;
  loading?: boolean;
  endTime: number;
}

export const CountDownButton = ({
  loading,
  onRetrySendOtpCode,
  endTime,
  className
}: CountDownButtonProps) => {
  const [seconds, { startCountDown }] = useCountDown({
    countStart: Math.floor((endTime - Date.now()) / 1000),
    enabled: false,
    interval: 1000
  });

  useEffect(() => {
    startCountDown();
  }, [startCountDown]);

  if (seconds)
    return (
      <Text size='xs' className={styles.count_down_seconds_text}>
        Запросить код повторно можно через {seconds} секунд
      </Text>
    );

  return (
    <UnstyledButton
      onClick={onRetrySendOtpCode}
      className={clsx(styles.count_down_button, className)}
    >
      {loading ? 'Отправка...' : 'Отправить код еще раз'}
    </UnstyledButton>
  );
};
