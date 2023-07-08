import { CodeRecord } from './CodeRecord';

export interface AppState {
    counter: number;
    searchText: string;
    codeRecords: CodeRecord[];
}
