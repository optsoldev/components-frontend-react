import { mdiPaperclip } from '@mdi/js';
import Icon from '@mdi/react';
import React, { FocusEventHandler, useEffect, useState } from 'react';
import { DropzoneOptions, useDropzone } from 'react-dropzone';

import { bytesToSize } from '../../shared/functions';
import { FileFix } from '../../types/FileFix';

import * as S from './styles';

export type UploadContainerOptions = DropzoneOptions;

export interface OptUploadProps {
  description?: string;
  filesDescription?: string;
  onChange: (files: File[]) => void;
  options?: UploadContainerOptions;
  onBlur?: FocusEventHandler;
  value?: File[];
  name?: string;
  style?: React.CSSProperties;
}

export const OptUpload = React.forwardRef<HTMLInputElement, OptUploadProps>(
  (
    {
      description = 'Arraste arquivos para cá ou clique para selecioná-los',
      filesDescription,
      onChange,
      options,
      value,
      style,
      ...props
    },
    ref
  ) => {
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

    const currentFiles = value || acceptedFiles;
    const acceptedFileItems = currentFiles?.map((oldFile: File) => {
      const file = oldFile as FileFix;

      return (
        <S.Arquivo key={file.path ?? file.name}>
          <span>{file.path ?? file.name}</span> ({bytesToSize(file.size)})
        </S.Arquivo>
      );
    });

    useEffect(() => {
      if (!firstRender) {
        onChange(acceptedFiles);
      } else {
        setFirstRender(false);
      }
    }, [acceptedFiles, onChange, firstRender]);

    return (
      <S.StyledUploadContainer
        hasFiles={hasFiles}
        {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
        ref={ref}
        style={style}
      >
        <input {...getInputProps()} {...props} />
        <Icon path={mdiPaperclip} size={1.4} />
        <p>{description}</p>
        {filesDescription && <p>{filesDescription}</p>}
        {acceptedFileItems}
      </S.StyledUploadContainer>
    );
  }
);

OptUpload.displayName = 'OptUpload';
