import { GenericContext } from '../genericContext';
import { BreadcrumbActions } from './breadcrumbActions';
import { BreadcrumbDictionary, BreadcrumbState } from './breadcrumbState';
export declare type BreadcrumbDispatch = (action: BreadcrumbAction) => void;
export declare const BREADCRUMB_INITIAL_DISPATCH: (action: BreadcrumbAction) => void;
export declare function BreadcrumbReducer(state: BreadcrumbState, action: BreadcrumbAction): BreadcrumbState;
declare type BreadcrumbAction = GenericContext<BreadcrumbActions.SET_VALUES, BreadcrumbDictionary> | GenericContext<BreadcrumbActions.RESET_VALUES>;
export {};
