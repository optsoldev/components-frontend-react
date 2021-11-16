import { OptMiniUpload, OptMiniUploadProps, OptUpload, OptUploadProps } from "@optsol/react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { useState } from "react";

export default {
  title: "OptUpload",
  component: OptUpload,
} as Meta;

export const OptUploadDialog: Story<OptUploadProps> = ({ ...args }) => (
  <OptUpload {...args} onChange={() => {}} />
);

OptUploadDialog.args = {};

OptUploadDialog.storyName = "OptUpload";

OptUploadDialog.argTypes = {
  ref: {
    table: { disable: true },
  },
};

export const OptMiniUploadDialog: Story<OptMiniUploadProps> = ({ ...args }) => {
  const [arquivos, setArquivos] = useState<File[]>([]);

  function alterarArquivos(files: File[]) {
    setArquivos(files);
  }

  return (
    <React.Fragment>
      <OptMiniUpload {...args} onChange={alterarArquivos} />

      {arquivos.map((a) => (
        <p>{a.name}</p>
      ))}
    </React.Fragment>
  );
};

OptMiniUploadDialog.args = {};

OptMiniUploadDialog.storyName = "OptMiniUpload";

OptMiniUploadDialog.argTypes = {
  ref: {
    table: { disable: true },
  },
};
