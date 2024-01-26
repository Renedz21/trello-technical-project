export interface IMainProps {
    id: string;
    name: string;
    prefs: Prefs;
    lists: List[];
    cards: CardProps[];
}

export interface CardProps {
    id: string;
    name: string;
    idList: string
}

export interface List {
    id: string;
    name: string;
    closed: boolean;
    color: null;
    idBoard: string;
    pos: number;
    subscribed: boolean;
    softLimit: null;
}

export interface Prefs {
    comments: string;
    invitations: string;
    cardCovers: boolean;
    cardCounts: boolean;
    cardAging: string;
    calendarFeedEnabled: boolean;
    switcherViews: SwitcherView[];
    background: string;
    backgroundColor: string;
    backgroundImage: string;
    backgroundTile: boolean;
    backgroundBrightness: string;
    backgroundImageScaled: null;
    backgroundBottomColor: string;
    backgroundTopColor: string;
}

export interface SwitcherView {
    viewType: string;
    enabled: boolean;
}

export interface IPostList {
    idBoard: string
    listName: string;
}

export interface IPostCard {
    id: string
    cardName: string;
}