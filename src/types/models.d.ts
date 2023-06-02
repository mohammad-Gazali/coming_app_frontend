export interface Master {
    id: number;
    username: string;
    is_superuser: boolean;
    groups: string[];
}