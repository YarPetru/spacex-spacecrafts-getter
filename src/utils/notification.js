import { toast } from 'react-toastify';
import { nanoid } from '@reduxjs/toolkit';

export default function openNotification(type, message) {
  toast[type](message, {
    toastId: nanoid(),
  });
}
