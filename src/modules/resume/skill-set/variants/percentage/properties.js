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
                type: propertyTypes.STRING,
                value: 'Skill 1',
                percentage: {
                    name: 'Percentage',
                    type: propertyTypes.NUMBER,
                    value: 47,
                    required: true
                },
                required: true
            },
            {
                name: 'Skill',
                type: propertyTypes.STRING,
                value: 'Skill 2',
                percentage: {
                    name: 'Percentage',
                    type: propertyTypes.NUMBER,
                    value: 60,
                    required: true
                },
                required: true
            },
            {
                name: 'Skill',
                type: propertyTypes.STRING,
                value: 'Skill 3',
                percentage: {
                    name: 'Percentage',
                    type: propertyTypes.NUMBER,
                    value: 20,
                    required: true
                },
                required: true
            },
            {
                name: 'Skill',
                type: propertyTypes.STRING,
                value: 'Skill 4',
                percentage: {
                    name: 'Percentage',
                    type: propertyTypes.NUMBER,
                    value: 100,
                    required: true
                },
                required: true
            }
        ],
        required: true
    }
};

export default properties;