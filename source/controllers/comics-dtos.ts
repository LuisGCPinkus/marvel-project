const orderBy = ['name', 'modified', '-name', '-modified'];

export interface ListFilterParams {
    format?: string;
    formatType?: string;
    noVariants?: string;
    dateDescriptor?: string;
    dateRange?: string;
    title?: string;
    titleStartsWith?: string;
    startYear?: string;
    issueNumber?: string;
    diamondCode?: string;
    digitalId?: string;
    upc?: string;
    isbn?: string;
    ean?: string;
    issn?: string;
    hasDigitalIssue?: string;
    nameStartsWith?: string;
    modifiedSince?: string;
    creators?: string;
    characters?: string;
    series?: string;
    events?: string;
    stories?: string;
    sharedAppearances?: string;
    collaborators?: string;
    orderBy?: string;
    limit?: string;
    offset?: string;
}