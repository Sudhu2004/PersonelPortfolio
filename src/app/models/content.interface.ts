export interface Home {
    name: string;
    role: string;
    description: string;
    socials: Social[];
}

export interface Social {
    platform: string;
    url: string;
    icon: string;
}

export interface Education {
    school: string;
    degree: string;
    department: string;
    startDate: string;
    endDate: string;
    url: string;
    logo: string;
    courses: string[];
}

export interface Experience {
    company: string;
    role: string;
    startDate: string;
    endDate: string;
    url: string;
    logo: string;
    skills: string[];
    description: string;
}

export interface Project {
    name: string;
    url: string;
    skills: string[];
    description: string;
}

export interface SkillCategory {
    category: string;
    items: string[];
}

export interface Award {
    title: string;
    hackathonName?: string;
    organization: string;
    logo?: string;
    certificateUrl?: string;
    description: string;
}

export interface Leadership {
    organization: string;
    position: string;
    certificateUrl?: string;
    description: string;
}

export interface AiConfig {
    modelName: string;
    apiUrl: string;
    enabled: boolean;
    systemPrompt: string;
}
