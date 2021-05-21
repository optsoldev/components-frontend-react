import { mdiPaperclip } from '@mdi/js';
import Icon from '@mdi/react';
import React, { FocusEventHandler, useEffect, useState } from 'react';
import { DropzoneOptions, useDropzone } from 'react-dropzone';
import { bytesToSize } from '../../shared/functions';
import { FileFix } from '../../types/FileFix';
import * as S from './styles';

export interface UploadContainerOptions extends DropzoneOptions {}

interface Props {
  description?: string;
  filesDescription?: string;
  onChange: (files: File[]) => void;
  options: UploadContainerOptions;
  onBlur: FocusEventHandler;
  value?: File[];
  name?: string;
}

export const OptUpload = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      description = 'Arraste arquivos para cá ou clique para selecioná-los',
      filesDescription,
      onChange,
      options,
      value,
      ...props
    },
    ref,
  ) => {
    const [firstRender, setFirstRender] = useState(true);
    const { acceptedFiles, getRootProps, getInputProps, isDragAccept, isDragActive, isDragReject } =
      useDropzone(options);

    const hasFiles = (acceptedFiles && acceptedFiles.length > 0) || (!!value && value.length > 0);

    const currentFiles = !!value ? value : acceptedFiles;
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
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [acceptedFiles]);

    return (
      <S.StyledUploadContainer hasFiles={hasFiles} {...getRootProps({ isDragActive, isDragAccept, isDragReject })}>
        <input {...getInputProps()} {...props} />
        <Icon path={mdiPaperclip} size={1.4} />
        <p>{description}</p>
        {filesDescription && <p>{filesDescription}</p>}
        {acceptedFileItems}
      </S.StyledUploadContainer>
    );
  },
);
