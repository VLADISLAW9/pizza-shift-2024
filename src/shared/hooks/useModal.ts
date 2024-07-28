import { useDisclosure } from '@mantine/hooks';

interface ModalHandlers {
  open: () => void;
  close: () => void;
}

export const useModal = (): [boolean, ModalHandlers] => {
  const [opened, { open, close }] = useDisclosure(false);

  return [
    opened,
    {
      open,
      close
    }
  ];
};
