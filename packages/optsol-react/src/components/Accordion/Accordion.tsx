import { ChevronRightFilled } from '@fluentui/react-icons';
import { AccordionDetails as MuiAccordionDetails, styled } from '@mui/material';
import MuiAccordion, {
  AccordionProps as MuiAccordionProps
} from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps as MuiAccordionSummaryProps
} from '@mui/material/AccordionSummary';

export const Accordion = styled((props: MuiAccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0
  },
  '&::before': {
    display: 'none'
  }
}));

export const AccordionSummary = styled((props: MuiAccordionSummaryProps) => (
  <MuiAccordionSummary
    sx={{ flexDirection: 'row-reverse', px: 0 }}
    expandIcon={<ChevronRightFilled fontSize={20} />}
    {...props}
  />
))(({ theme }) => ({
  minHeight: 40,
  borderLeft: 0,
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)'
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(0),
    marginTop: theme.spacing(0)
  }
}));

export const AccordionDetails = MuiAccordionDetails;

export default Accordion;
