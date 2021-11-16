import React, { FocusEventHandler } from 'react';
import { DropzoneOptions } from 'react-dropzone';
export interface UploadContainerOptions extends DropzoneOptions {
    icon?: string;
    size?: number;
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
export declare const OptMiniUpload: React.ForwardRefExoticComponent<OptMiniUploadProps & React.RefAttributes<HTMLInputElement>>;
