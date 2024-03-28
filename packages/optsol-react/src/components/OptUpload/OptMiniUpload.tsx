import { mdiPaperclip } from '@mdi/js';
import Icon from '@mdi/react';
import React, { FocusEventHandler, useEffect, useState } from 'react';
import { DropzoneOptions, useDropzone } from 'react-dropzone';

import * as S from './styles';

export interface UploadContainerOptions extends DropzoneOptions {
  icon?: string;
  width?: string;
  height?: string;
  borderStyle?: 'dashed' | 'solid';
}

export interface OptMiniUploadProps {
  filesDescription?: string;
  onChange: (files: File[]) => void;
  options?: UploadContainerOptions;
  onBlur?: FocusEventHandler;
  value?: File[];
  name?: string;
}

export const OptMiniUpload = React.forwardRef<
  HTMLInputElement,
  OptMiniUploadProps
>(({ onChange, options, value, ...props }, ref) => {
  const [firstRender, setFirstRender] = useState(true);
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragAccept,
    isDragActive,
    isDragReject,
  } = useDropzone(options);

  const hasFiles =
    (acceptedFiles && acceptedFiles.length > 0) ||
    (!!value && value.length > 0);

  useEffect(() => {
    if (!firstRender) {
      onChange(acceptedFiles);
    } else {
      setFirstRender(false);
    }
  }, [acceptedFiles, firstRender, onChange]);

  return (
    <S.StyledMiniUploadContainer
      className="opt-mini-upload"
      hasFiles={hasFiles}
      width={options?.width}
      height={options?.height}
      borderStyle={options?.borderStyle}
      {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
      ref={ref}
    >
      <input {...getInputProps()} {...props} />
      <Icon path={options?.icon ?? mdiPaperclip} size={1.4} />
    </S.StyledMiniUploadContainer>
  );
});

OptMiniUpload.displayName = 'OptMiniUpload';
