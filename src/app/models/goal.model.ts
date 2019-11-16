interface Goal {
    title: string;
    acceptanceCriteria: string;
    description: string;
    start: Date;
    end: Date;
    drive: Drive;
    criteriaWasMet: boolean;
    criteriaNotMetReason: string;
    goalWasEffective: boolean;
    retroComments: string;
}
