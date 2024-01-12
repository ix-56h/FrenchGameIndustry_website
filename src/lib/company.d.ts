export interface Company {
    name:          string;
    description:   null | string;
    logo:          string;
    games:         Game[];
    address:       string;
    contact:       null | string;
    phone:         null | string;
    email:         null | string;
    website:       null | string;
    youtube:       null | string;
    facebook:      null | string;
    twitter:       null | string;
    linkedin:      null | string;
    instagram:     null | string;
    source_url:    string;
    platforms:     string[];
    tags:          string[];
    is_publisher:  boolean;
    is_developer:  boolean;
    employees:     string;
    creation_date: null | string;
}

export interface Game {
    name:         string;
    release_date: null | string;
    platform:     null | string;
    game_links:   string[];
    logo:         null | string;
}
