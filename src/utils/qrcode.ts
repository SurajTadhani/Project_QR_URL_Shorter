import QRCode from 'qrcode';
import { QRCodeOptions } from '../types';

const defaultOptions: QRCodeOptions = {
  width: 300,
  margin: 2,
  color: {
    dark: '#000000',
    light: '#ffffff',
  },
};

export const generateQRCodeURL = async (input: string, options: Partial<QRCodeOptions> = {}): Promise<string> => {
  try {
    return await QRCode.toDataURL(input, {
      ...defaultOptions,
      ...options,
    });
  } catch (error) {
    throw new Error('Failed to generate QR code');
  }
};