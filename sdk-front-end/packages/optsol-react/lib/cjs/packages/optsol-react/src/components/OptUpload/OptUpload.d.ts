import React, { FocusEventHandler } from 'react';
import { DropzoneOptions } from 'react-dropzone';
export interface UploadContainerOptions extends DropzoneOptions {
}
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
export declare const OptUpload: React.ForwardRefExoticComponent<OptUploadProps & React.RefAttributes<HTMLInputElement>>;
