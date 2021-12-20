import { OptLabel } from "@optsol/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import styled from "styled-components";

export default {
  title: "OptLabel",
  component: OptLabel,
} as ComponentMeta<typeof OptLabel>;

const Template: ComponentStory<typeof OptLabel> = (args) => {
  const StyledDiv = styled.div`
    display: flex;
  `;

  const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    margin-right: 1rem;
    width: 10.5rem;

    & div {
      margin-bottom: 1rem;
    }
  `;

  return (
    <StyledDiv>
      <StyledForm>
        <div>
          <OptLabel htmlFor="default" accessKey="n">
            Default
          </OptLabel>
          <input id="default" />
        </div>
        <div>
          <OptLabel
            htmlFor="disabled"
            accessKey="e"
            color="primary"
            disabled={true}
          >
            Disabled
          </OptLabel>
          <input id="disabled" disabled />
        </div>
        <div>
          <OptLabel
            htmlFor="focused"
            accessKey="p"
            color="primary"
            focused={true}
          >
            Focused
          </OptLabel>
          <input id="focused" />
        </div>
        <div>
          <OptLabel htmlFor="error" accessKey="p" color="primary" error={true}>
            Error
          </OptLabel>
          <input id="error" />
        </div>
      </StyledForm>
      <StyledForm>
        <div>
          <OptLabel
            htmlFor="editable"
            accessKey="p"
            color="primary"
            contentEditable={true}
          >
            Editable
          </OptLabel>
          <input id="editable" />
        </div>
        <div>
          <OptLabel
            htmlFor="draggable"
            accessKey="p"
            color="primary"
            draggable={true}
          >
            Draggable
          </OptLabel>
          <input id="draggable" />
        </div>
        <div>
          <OptLabel
            htmlFor="outlined"
            accessKey="p"
            color="primary"
            variant="outlined"
          >
            Outlined
          </OptLabel>
          <input id="outlined" />
        </div>
        <div>
          <OptLabel
            htmlFor="filled"
            accessKey="p"
            color="primary"
            variant="filled"
          >
            Filled
          </OptLabel>
          <input id="filled" />
        </div>
      </StyledForm>
    </StyledDiv>
  );
};

export const OptLabelExample = Template.bind({});

OptLabelExample.storyName = "Opt Label";
