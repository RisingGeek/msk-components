import propertyTypes from 'msk-property-types';
import themes from 'msk-themes';

const properties = {
    theme: {
        name: 'Theme',
        type: propertyTypes.THEME,
        value: themes.light.skyBlue,
        required: true
    },
    headlineText: {
        name: 'Headline text',
        type: propertyTypes.STRING,
        value: 'Skill Set',
        required: true
    },
    skills: {
        name: 'Skills',
        type: propertyTypes.ARRAY,
        value: [
            {
                name: 'Skill',
                type: propertyTypes.OBJECT,
                value: {
                    type: propertyTypes.OBJECT,
                    percentage: {
                        name: 'Percentage',
                        type: propertyTypes.NUMBER,
                        value: 47,
                        required: true
                    },
                    title: {
                        name: 'Title',
                        type: propertyTypes.STRING,
                        value: 'Skill 1',
                        required: true
                    }
                },
                required: true
            },
            {
                name: 'Skill',
                type: propertyTypes.OBJECT,
                value: {
                    type: propertyTypes.OBJECT,
                    percentage: {
                        name: 'Percentage',
                        type: propertyTypes.NUMBER,
                        value: 70,
                        required: true
                    },
                    title: {
                        name: 'Title',
                        type: propertyTypes.STRING,
                        value: 'Skill 2',
                        required: true
                    }
                },
                required: true
            },
            {
                name: 'Skill',
                type: propertyTypes.OBJECT,
                value: {
                    type: propertyTypes.OBJECT,
                    percentage: {
                        name: 'Percentage',
                        type: propertyTypes.NUMBER,
                        value: 20,
                        required: true
                    },
                    title: {
                        name: 'Title',
                        type: propertyTypes.STRING,
                        value: 'Skill 3',
                        required: true
                    }
                },
                required: true
            },
            {
                name: 'Skill',
                type: propertyTypes.OBJECT,
                value: {
                    type: propertyTypes.OBJECT,
                    percentage: {
                        name: 'Percentage',
                        type: propertyTypes.NUMBER,
                        value: 100,
                        required: true
                    },
                    title: {
                        name: 'Title',
                        type: propertyTypes.STRING,
                        value: 'Skill 4',
                        required: true
                    }
                },
                required: true
            },
        ],
        required: true
    }
};

export default properties;