import { Box, BoxProps, Typography } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import { DropzoneOptions, useDropzone } from 'react-dropzone';

export interface FileUploadProps extends DropzoneOptions {
  value?: File[];
  onChange: (files: File[]) => void;
  borderColor: BoxProps['borderColor'];
}

export function bytesToSize(bytes: number) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return '0 Byte';

  const index = Math.floor(Math.log(bytes) / Math.log(1024));
  const label = sizes[Number(index)];

  return `${Math.round(bytes / 1024 ** index)} ${label}`;
}

const FileUpload = React.forwardRef<
  HTMLInputElement,
  PropsWithChildren<FileUploadProps>
>(({ onChange, borderColor, value, children, ...props }, ref) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop: onChange,
    ...props,
  });

  const currentFiles = value ?? acceptedFiles;

  const acceptedFileItems = currentFiles.map((file: File) => {
    return (
      <Typography key={file.name} ml={1}>
        {file.name} ({bytesToSize(file.size)})
      </Typography>
    );
  });

  return (
    <Box
      ref={ref}
      flex={1}
      border={1}
      padding={2}
      minHeight={100}
      borderRadius={1}
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ cursor: 'pointer' }}
      borderColor={borderColor}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      {children}
      {acceptedFileItems}
    </Box>
  );
});

FileUpload.displayName = 'FileUpload';
export default FileUpload;
