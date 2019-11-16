import { Drive } from './drive.model';

export interface Goal {
    title?: string;
    acceptanceCriteria?: string;
    description?: string;
    start?: Date;
    end?: Date;
    drive?: Drive;
    retroComplete?: boolean;
    criteriaWasMet?: boolean;
    criteriaNotMetReasons?: string;
    goalWasEffective?: boolean;
    retroComments?: string;
}
