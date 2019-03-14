export interface Validator {
    name: string;
    validator: any;
    message: string;
}
export interface FieldConfig {
    label?: string;
    name?: string;
    inputType?: string;
    options?: string[];
    collections?: any;
    type: string;
    dataUri?: string;
    hideExpression?: string;
    value?: any;
    validations?: Validator[];
    tableData?: TableConfig;
}

export interface TableConfig {
    displayedColumns?: any[];
    expendedColumns?: any[];
    data?: any[];
    paginatorSupported?: boolean;
    pageSizeOptions?: any[];
    filterSupported?: boolean;
    sortSupported?: boolean;
}
